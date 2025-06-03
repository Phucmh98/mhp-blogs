
import Aurora from "@/components/commons/reactbits/aurora";
import Threads from "@/components/commons/reactbits/threads";

const Banner = () => {
  return (
    <div className="relative w-full h-[300px]">
      {/* <Aurora
        colorStops={["#ffeac9", "#ffeac9", "#ffeac9"]}
        blend={0.5}
        amplitude={1}
        speed={0.5}
      /> */}
      <Threads amplitude={2} distance={0} enableMouseInteraction={true} />
    </div>
  );
};

export default Banner;
