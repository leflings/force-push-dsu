import DadJokes from "@/components/dad-jokes";
import Jokes from "@/components/jokes";
import Quote from "@/components/quote";

export default function Home() {
  return (
    <div className='gap-4 flex flex-col'>
      <Quote/>
      <DadJokes />
      <Jokes />
    </div>
  );
}
