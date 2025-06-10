import AnimatedContent from "@/components/animated-content";
import BlurText from "@/components/commons/reactbits/blur-text";
import ShinyText from "@/components/commons/reactbits/shiny-text";
import { WorkDescriptionContaitainer } from "./work-description";

const ContainerInfomation = () => {
  return (
    <div className="w-full">
      <BlurText
        text="MAI HOAI PHUC"
        delay={300}
        animateBy="words"
        direction="top"
        className="text-4xl sm:text-6xl text-gray-500 font-bold mb-1.5 sm:mb-3"
      />
      <BlurText
        text="Frontend Developer"
        delay={100}
        animateBy="letters"
        direction="bottom"
        className="text-2xl sm:text-4xl text-[var(--phuc-text-primary-2)] font-medium"
      />
      <AnimatedContent>
        <ShinyText
          text="I'm a Frontend Developer with 1+ years of experience in developing scalable frontend libraries and interactive 3D web applications. Skilled in Next.js, TypeScript, Tailwind CSS, and Webpack. Experienced in implementing Cesium-based 3D model viewers for construction CDE systems"
          disabled={false}
          speed={3}
          textColorGradiant={[254, 154, 0]}
          className="text-[var(--phuc-text-primary-1)]/60  mt-3 sm:mt-10"
        />
        <div className="mb-10">
          <WorkDescriptionContaitainer />
        </div>
      </AnimatedContent>
    </div>
  );
};

export default ContainerInfomation;
