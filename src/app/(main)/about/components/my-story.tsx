import AnimatedContent from "@/components/animated-content";
import InteractiveIcon from "@/components/commons/interactive-icon/interactive-icon";
import { ShineBorder } from "@/components/magicui/shine-border";

const MyStory = () => {
  return (
    <AnimatedContent>
      <div className="w-full grid grid-cols-2 my-8 sm:my-15 text-gray-400 dark:text-gray-300 gap-5">
        <div className="col-span-2 sm:col-span-1">
          <p className="text-2xl md:text-3xl font-semibold mb-3">
            My Journey to Becoming a Developer
          </p>
          <p className="font-light  text-gray-700 dark:text-gray-400">
            Discover how I transitioned from a civil engineer to a software
            developer and the milestones along the way.
          </p>
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
          <p className="font-light  text-gray-700 dark:text-gray-400">
            From wearing a hard hat on construction sites to sleepless nights
            coding. Click to see how I made the switch to dev!
          </p>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default MyStory;
