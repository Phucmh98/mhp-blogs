import AnimatedContent from "@/components/animated-content";
import { MagicCard } from "@/components/commons/magicui/magic-card";
import { TextAnimate } from "@/components/commons/magicui/text-animate";

const Studies = () => {
  const educcations = [
    {
      school: "Thai Nguyen University",
      major: "Information Technology",
      endDate: "2023 - Present",
    },
    {
      school: "CyberLearn Academy",
      major: "Front-end programmer vocational",
      endDate: "2021 - 2023",
    },
    {
      school: "University of Architecture Ho Chi Minh City",
      major: "Civil engineer",
      endDate: "2016 - 2021",
    },
  ];
  return (
    <>
      <AnimatedContent>
        <div className="text-3xl tsm:text-4xl text-gray-400 dark:text-gray-300 font-medium mb-5 mt-3">
          <TextAnimate animation="blurIn" as="h1">
            Education
          </TextAnimate>
        </div>
        <MagicCard gradientColor={"#D9D9D955"} className="rounded-xl">
          <div className=" w-full flex flex-col p-2.5 sm:p-5 gap-3">
            {educcations.map((edu, index) => (
              <div
                key={index}
                className="w-full sm:flex sm:justify-between gap-3"
              >
                <div className="flex flex-col text-gray-500">
                  <span className="text-xl font-medium dark:text-gray-300">
                    <TextAnimate animation="blurInDown" as="h2">
                      {edu.school}
                    </TextAnimate>
                  </span>
                  <span className="text-base text-amber-600">
                    <TextAnimate animation="slideRight" as="h2">
                      {edu.major}
                    </TextAnimate>
                  </span>
                </div>
                <span className="text-base text-gray-400 text-end">
                    <TextAnimate animation="slideLeft" as="h2">
                      {edu.endDate}
                    </TextAnimate>  
                </span>
              </div>
            ))}
          </div>
        </MagicCard>
      </AnimatedContent>
    </>
  );
};

export default Studies;
