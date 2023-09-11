const API_KEY = process.env.API_NINJAS_KEY!;
const BASE_URL = 'https://api.api-ninjas.com/v1'
const FALLBACK_REVALIDATE = 3000;

export type Joke = {
    joke: string,
};

export type Quote = {
    quote: string,
    author: string,
    category: string,
};

export type Fact = {
    fact: string,
};

export type ApiNinjasRequest = {
    revalidate?: number,
};

export type HistoricalEvent = {
    year: number,
    month: number,
    day: number,
    event: string,
};

export type LimitedApiNinjasRequest = ApiNinjasRequest & { limit?: number };

export type HistoricalEventsRequest = ApiNinjasRequest & { month: number, day: number};

function getRevalidate(request?: ApiNinjasRequest) {
    const defaultRevalidate = process.env.API_NINJAS_TTL;
    if (defaultRevalidate) {
        try {
            return Number(defaultRevalidate);
        } catch (ex) {
            return request?.revalidate ?? FALLBACK_REVALIDATE;
        }
    }
    return request?.revalidate ?? FALLBACK_REVALIDATE;
}

async function getFromApi<T>(path: string, request?: ApiNinjasRequest): Promise<T[]> {
    const response = await fetch(BASE_URL + path, {
        headers: {
            'X-Api-Key': API_KEY,
        },
        next: {
            revalidate: getRevalidate(request),
        },
    });

    return await response.json() as T[];
}

export async function getDadJokes(request?: LimitedApiNinjasRequest): Promise<Joke[]> {
    return await getFromApi<Joke>(`/dadjokes?limit=${request?.limit ?? 1}`, request);
}

export async function getJokes(request?: LimitedApiNinjasRequest): Promise<Joke[]> {
    return await getFromApi<Joke>(`/jokes?limit=${request?.limit ?? 1}`, request);
}

export async function getQuote(request?: ApiNinjasRequest) {
    const quotes = await getFromApi<Quote>('/quotes', request);
    return quotes[0];
}

export async function getFacts(request?: LimitedApiNinjasRequest): Promise<Fact[]> {
    return await getFromApi<Fact>(`/facts?limit=${request?.limit ?? 1}`);
}

export async function getHistoricalEvents(request: HistoricalEventsRequest): Promise<HistoricalEvent[]> {
    return await getFromApi<HistoricalEvent>(`/historicalevents?month=${request.month}&day=${request.day}`);
}