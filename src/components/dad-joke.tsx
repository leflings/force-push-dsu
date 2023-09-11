import pluralize from 'pluralize';

export default async function DadJokes({ limit = 1 }) {
    if (limit <= 0) return (<></>);

    const data = await fetch(`https://api.api-ninjas.com/v1/dadjokes?limit=${limit}`, {
        headers: {
            'X-Api-Key': process.env.API_NINJAS_KEY!
        },
        next: {
            revalidate: 300,
        },
    });
    const quotes = await data.json() as { 'joke': string }[];
    return (
        <blockquote className="border-l border-cyan-700 px-3 text-lg">
            <div className='uppercase font-medium text-xs text-cyan-700'>{pluralize('dadjoke', limit)} of the day</div>
            {limit > 1 ?
            (
                <ul>
                    {quotes.map((q,i) => <li key={i}>- {q.joke}</li>)}
                </ul>
            ) : (
                <div>{quotes[0].joke}</div>
            )}
        </blockquote>
    );
}