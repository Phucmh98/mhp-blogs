import { Meteors } from "@/components/magicui/meteors";
import { SparklesText } from "@/components/magicui/sparkles-text";

const Banner = () => {
  return (
    <div className="w-full relative overflow-hidden h-[300px] flex items-center justify-center">
      <Meteors number={40} />
      <SparklesText className="text-5xl font-normal ">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center leading-none text-transparent dark:from-white dark:to-slate-900/10">
          LET'S WORK TOGETHER
        </span>
      </SparklesText>
    </div>
  );
};
export default Banner;