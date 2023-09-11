
import { getFacts } from '@/lib/api-ninja';
import pluralize from 'pluralize';

export default async function Facts({ limit = 1 }) {
    if (limit <= 0) return (<></>);

    const facts = await getFacts({ limit });

    return (
        <div className="border-l border-cyan-700 px-3 text-lg">
            <div className='uppercase font-medium text-xs text-cyan-700'>{pluralize('facts', limit)} of the day</div>
            {limit > 1 ?
            (
                <ul className='list-disc list-inside'>
                    {facts.map((q,i) => <li key={i}>{q.fact}</li>)}
                </ul>
            ) : (
                <div>{facts[0].fact}</div>
            )}
        </div>
    );
}