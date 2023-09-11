import DadJokes from "@/components/dad-jokes";
import Facts from "@/components/facts";
import HistoricalEvents from "@/components/historical-events";
import Jokes from "@/components/jokes";
import Quote from "@/components/quote";

export default function Home() {
  return (
    <div className='gap-4 flex flex-col'>
      <Quote/>
      <DadJokes />
      <Jokes />
      <Facts limit={5} />
      <HistoricalEvents />
    </div>
  );
}
