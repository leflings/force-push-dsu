import { getQuote } from "@/lib/api-ninja";

export default async function Quote() {
    const quote = await getQuote();
    return (
        <blockquote className="border-l border-cyan-700 px-3">
            <div className='uppercase font-medium text-xs text-cyan-700'>Quote of the day - #{quote.category}</div>
            <div className='text-lg'>{quote.quote}</div>
            <footer className='italic'>- {quote.author}</footer>
        </blockquote>
    );
}