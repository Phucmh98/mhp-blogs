import Magnet from "@/components/commons/reactbits/magnet";
import { InteractiveIcon } from "./interactive-icon";
import Signature from "@/components/commons/signature/signature";
import AnimatedContent from "@/components/animated-content";

const Footer = () => {
  return (
    <AnimatedContent>
      <div className="container w-full h-full mx-auto max-w-5xl px-10">
        <div className="py-10 px-5 rounded-lg border">
          <Magnet
            padding={5}
            disabled={false}
            magnetStrength={40}
            className="w-full h-full flex items-center justify-center"
            innerClassName="h-full w-full flex flex-col items-center justify-center"
          >
            {/* Signature */}
            <Signature svgSrc="/svg/svgviewer-output-test.svg" height={50} timeStep={1}/>

            <div className="text-5xl font-extrabold tracking-wide text-gray-500 text-center uppercase mt-3">
              Wanna create something fun and exciting?
            </div>

            <div className="flex items-center justify-center my-5 rounded-full shadow-md">
              <InteractiveIcon
                iconUrl="https://cdn.lordicon.com/fiytezjs.json"
                label="Contact me now"
                sizeIcon={32}
                colors="primary:#ffffff,secondary:#ffffff"
                animationState="in-reveal"
                animationHover="hover-launch"
                classNameContainer="pl-3.5 pr-1.5 py-1.5 text-white flex items-center cursor-pointer flex-row-reverse bg-amber-500 rounded-full hover:bg-amber-600 transition-all duration-300"
                classNameLabel="p-0"
              />
            </div>
          </Magnet>
        </div>
        <div className="flex justify-between items-center w-full py-3">
          <span className="text-sm text-gray-500">
            © 2025 Phuc. All rights reserved.
          </span>
          <span className="flex gap-2">
            <InteractiveIcon
              iconUrl="https://cdn.lordicon.com/jjxzcivr.json"
              label=""
              classNameContainer="cursor-pointer"
              classNameLabel=""
              sizeIcon={28}
            />

            <InteractiveIcon
              iconUrl="https://cdn.lordicon.com/euybrknk.json"
              label=""
              classNameContainer="cursor-pointer"
              classNameLabel=""
              sizeIcon={28}
            />

            <InteractiveIcon
              iconUrl="https://cdn.lordicon.com/lplofcfe.json"
              label=""
              classNameContainer="cursor-pointer"
              classNameLabel=""
              sizeIcon={28}
            />
            <InteractiveIcon
              iconUrl="https://cdn.lordicon.com/ozlkyfxg.json"
              label=""
              animationHover="hover-spin"
              classNameContainer="cursor-pointer"
              classNameLabel=""
              sizeIcon={28}
            />
          </span>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default Footer;
