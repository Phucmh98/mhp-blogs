import { Meteors } from "@/components/magicui/meteors";

const Banner = () => {
  return (
    <div className="relative overflow-hidden w-full h-[300px]">
      {/* <Aurora
        colorStops={["#ffeac9", "#ffeac9", "#ffeac9"]}
        blend={0.5}
        amplitude={1}
        speed={0.5}
      /> */}
      <Meteors number={40} />

      {/* <Threads amplitude={2} distance={0} enableMouseInteraction={true} /> */}
    </div>
  );
};

export default Banner;
