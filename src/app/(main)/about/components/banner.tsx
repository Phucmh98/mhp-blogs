import GlitchText from "@/components/commons/reactbits/glitch-text";
import Threads from "@/components/commons/reactbits/threads";

const Banner = () => {
  return (
    <div className="w-full h-[300px] relative">
      <div className="absokute left-0 top-0 w-full h-full z-[5]">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>

      <div className="absolute top-[175px] flex w-full items-center justify-center z-[4]">
        <GlitchText
          speed={1.4}
          enableShadows={true}
          className="text-5xl font-bold mb-6 text-gray-500 cursor-default"
          colorAfter="var(--color-gray-500)"
          colorBefore="var(--color-gray-500)"
        >
          About me
        </GlitchText>
      </div>
    </div>
  );
};

export default Banner;
