import AnimatedContent from "@/components/animated-content";
import { BorderBeam } from "@/components/magicui/border-beam";
import { MagicCard } from "@/components/magicui/magic-card";

const Studies = () => {
  const educcations = [
    {
      school: "Thai Nguyen University - Vietnam",
      major: "Information Technology",
      endDate: "2023 - Present",
    },
    {
      school: "CyberLearn Academy - Vietnam",
      major: "Front-end programmer vocational",
      endDate: "2021 - 2023",
    },
    {
      school: "University of Architecture Ho Chi Minh City - Vietnam",
      major: "Civil engineer",
      endDate: "2016 - 2021",
    },
  ];
  return (
    <>
      <AnimatedContent>
        <h2 className="text-3xl tsm:text-4xl text-gray-400 dark:text-gray-300 font-medium mb-5 mt-3">
          Education
        </h2>
        <MagicCard
          gradientColor={ "#D9D9D955"}
          className="rounded-xl"
        >
          <div className=" w-full flex flex-col p-2.5 sm:p-5 gap-3">
            {educcations.map((edu, index) => (
              <div key={index} className="w-full flex justify-between gap-3">
                <div className="flex flex-col text-gray-500">
                  <span className="text-sm sm:text-xl font-medium dark:text-gray-300">
                    {edu.school}
                  </span>
                  <span className="text-xs sm:text-base text-amber-600">{edu.major}</span>
                </div>
                <span className="text-xs sm:text-base text-gray-400 text-end">{edu.endDate}</span>
              </div>
            ))}
          </div>
        </MagicCard>
      </AnimatedContent>
    </>
  );
};

export default Studies;
