import AnimatedContent from "@/components/animated-content";
import { InteractiveHoverButton } from "@/components/commons/magicui/interactive-hover-button";
import dynamic from "next/dynamic";
import Image from "next/image";
import { AnimatedSubscribeButton } from "@/components/commons/magicui/animated-subscribe-button";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";
const InteractiveIcon = dynamic(
  () =>
    import("../../../../components/commons/interactive-icon/interactive-icon"),
  { ssr: false }
);

const ContainerImage = () => {
  return (
    <AnimatedContent>
      <div className="h-full flex flex-col items-center justify-start md:mt-[20px] mx-0 md:mx-4 mb-5 md:mb-0 sticky top-0">
        <Image
          src={"/image/avt_phuc.jpg"}
          alt="avatar"
          width={200}
          height={200}
          className="rounded-full border-4 border-amber-500 shadow-md object-cover aspect-square "
        />
        <InteractiveIcon
          iconUrl="https://cdn.lordicon.com/rpviwvwn.json"
          label="Vietnam/HCM"
          sizeIcon={28}
          colors="primary:#ff6900,secondary:#ff6900"
          animationState="hover-rotate-up-to-down"
          animationHover="hover-rotate-up-to-down"
          classNameContainer="flex items-center justify-center  mt-3"
          classNameLabel="text-xl ml-2 font-semibold text-[var(--phuc-text-primary-1)]"
          isLoop={true}
        />
        <div className="w-full flex items-center justify-center mt-4">
          <AnimatedSubscribeButton className="text-lg font-medium text-gray-200 px-4 shadow-md border-1 rounded-full">
            <span className="group inline-flex items-center">
              Download
              <ArrowDownToLine className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="group inline-flex items-center">
              <InteractiveIcon
                iconUrl="https://cdn.lordicon.com/hmzvkifi.json"
                label="Clicked"
                sizeIcon={28}
                colors="primary:#ffffff,secondary:#ffffff"
                animationState="hover-loading"
                animationHover="hover-loading"
                classNameContainer="flex items-center justify-center"
                classNameLabel="ml-2"
              />
            </span>
          </AnimatedSubscribeButton>
        </div>
        <div className="w-full max-w-[250px] mt-3 text-gray-600 dark:text-gray-300">
          <p className="mb-3">Connect me:</p>
          <Link href={"https://github.com/Phucmh98"} target="_blank">
            <InteractiveHoverButton
              className="shadow-md w-full justify-center"
              icon={
                <InteractiveIcon
                  iconUrl="https://cdn.lordicon.com/jjxzcivr.json"
                  label=""
                  sizeIcon={30}
                  colors="primary:#ffffff,secondary:#ffffff"
                  animationState="loop-roll"
                  animationHover="loop-roll"
                  classNameContainer="flex reverse items-center justify-center"
                  classNameLabel=""
                  isLoop={true}
                />
              }
            >
              GitHub
            </InteractiveHoverButton>
          </Link>
          <Link href={"https://www.linkedin.com/in/mhphuc98/"} target="_blank">
            <InteractiveHoverButton
              className="shadow-md w-full justify-center mt-3"
              icon={
                <InteractiveIcon
                  iconUrl="https://cdn.lordicon.com/euybrknk.json"
                  label=""
                  sizeIcon={30}
                  colors="primary:#ffffff,secondary:#ffffff"
                  animationState="loop-roll"
                  animationHover="loop-roll"
                  classNameContainer="flex reverse items-center justify-center"
                  classNameLabel=""
                  isLoop={true}
                />
              }
            >
              LinkedIn
            </InteractiveHoverButton>
          </Link>
          <Link href={"/contact"} target="_blank">
            <InteractiveHoverButton
              className="shadow-md w-full justify-center mt-3"
              icon={
                <InteractiveIcon
                  iconUrl="https://cdn.lordicon.com/ozlkyfxg.json"
                  label=""
                  sizeIcon={30}
                  colors="primary:#ffffff,secondary:#ffffff"
                  animationState="loop-spin"
                  animationHover="loop-spin"
                  classNameContainer="flex reverse items-center justify-center"
                  classNameLabel=""
                  isLoop={true}
                />
              }
            >
              Email
            </InteractiveHoverButton>
          </Link>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default ContainerImage;
