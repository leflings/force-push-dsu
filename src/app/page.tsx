import DadJokes from "@/components/dad-joke";
import Quote from "@/components/quote";

export default function Home() {
  return (
    <div className='gap-4 flex flex-col'>
      <Quote/>
      <DadJokes />
    </div>
  );
}
