import { getHistoricalEvents } from "@/lib/api-ninjas";

export default async function HistoricalEvents() {
    const date = new Date();
    const args = { month: date.getMonth(), day: date.getDate() };
    const events = await getHistoricalEvents(args);

    return (
        <div>
            <div className="border-l border-cyan-700 px-3">
                <div className='uppercase font-medium text-xs text-cyan-700 pb-1'>Historical events on {args.day}/{args.month}</div>
                <table className='table-auto border border-separate border-spacing-3 border-slate-700'>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Event</th>
                        </tr>
                    </thead>
                    <tbody>
                    {events.map((e,i) => (
                        <tr key={i}>
                            <td className='text-right text-cyan-500'>{e.year}</td>
                            <td className='text-justify'>{e.event}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

}