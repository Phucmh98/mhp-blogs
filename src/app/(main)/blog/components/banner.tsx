import { Meteors } from "@/components/magicui/meteors";

const Banner = () => {
  return (
    <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden">
      <Meteors number={30} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10 mt-10">
        BLOG
      </span>
    </div>
  );
};

export default Banner;
