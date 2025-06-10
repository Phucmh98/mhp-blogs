import AnimatedContent from "@/components/animated-content";
const InteractiveIcon = dynamic(
  () =>
    import("../../../../components/commons/interactive-icon/interactive-icon"),
  { ssr: false }
);
import { ShineBorder } from "@/components/commons/magicui/shine-border";
import { TextAnimate } from "@/components/commons/magicui/text-animate";
import dynamic from "next/dynamic";

const MyStory = () => {
  return (
    <AnimatedContent>
      <div className="w-full grid grid-cols-2 my-8 sm:my-15 text-gray-400 dark:text-gray-300 gap-5">
        <div className="col-span-2 sm:col-span-1">
          <div className="text-2xl md:text-3xl font-semibold mb-3">
            <TextAnimate animation="blurInDown" as="h1">
              My Journey to Becoming a Developer
            </TextAnimate>
          </div>
          <div className="font-light  text-gray-700 dark:text-gray-400">
            <TextAnimate animation="blurInDown" as="h1">
              Discover how I transitioned from a civil engineer to a software
              developer and the milestones along the way.
            </TextAnimate>
          </div>
        </div>
        <div className="relative overflow-hidden col-span-2 sm:col-span-1 gap-8 rounded-xl border py-2 sm:py-10 px-2 sm:px-6  cursor-pointer">
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
          <div className="text-2xl md:text-3xl font-semibold mb-3">
            <InteractiveIcon
              iconUrl="https://cdn.lordicon.com/edplgash.json"
              sizeIcon={40}
              classNameContainer="flex items-center justify-end flex-row-reverse"
              animationState="in-dynamic"
              animationHover="in-dynamic"
              classNameLabel="mr-3"
              label="My Journey"
              isLoop={true}
            />
          </div>
          <div className="font-light  text-gray-700 dark:text-gray-400">
            <TextAnimate animation="slideLeft" as="h1">
              From wearing a hard hat on construction sites to sleepless nights
              coding. Click to see how I made the switch to dev!
            </TextAnimate>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default MyStory;
