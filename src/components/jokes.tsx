
import { getJokes } from '@/lib/api-ninja';
import pluralize from 'pluralize';

export default async function Jokes({ limit = 1 }) {
    if (limit <= 0) return (<></>);

    const jokes = await getJokes({});

    return (
        <blockquote className="border-l border-cyan-700 px-3 text-lg">
            <div className='uppercase font-medium text-xs text-cyan-700'>{pluralize('joke', limit)} of the day</div>
            {limit > 1 ?
            (
                <ul>
                    {jokes.map((q,i) => <li key={i}>- {q.joke}</li>)}
                </ul>
            ) : (
                <div>{jokes[0].joke}</div>
            )}
        </blockquote>
    );
}