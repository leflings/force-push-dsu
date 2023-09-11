export default async function Quote() {
    const data = await fetch('https://api.api-ninjas.com/v1/quotes', {
        headers: {
            'X-Api-Key': process.env.API_NINJAS_KEY!
        },
        next: {
            revalidate: 300,
        },
    });
    const quotes = await data.json() as { 'quote': string, 'author': string, 'category': string }[];
    const res = quotes[0];
    return (
        <blockquote className="border-l border-cyan-700 px-3">
            <div className='uppercase font-medium text-xs text-cyan-700'>Quote of the day - #{res.category}</div>
            <div className='text-lg'>{res.quote}</div>
            <footer className='italic'>- {res.author}</footer>
        </blockquote>
    );
}