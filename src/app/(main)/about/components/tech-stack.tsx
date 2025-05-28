import { technologies, Technology } from "../../lib/technologies";
import Link from "next/link";
import { SVGIcons } from "@/components/commons/icons/svg-icons";
import { Marquee } from "@/components/magicui/marquee";
import AnimatedContent from "@/components/animated-content";

const TechStack = () => {
  return (
    <>
      <AnimatedContent>
        <div className="text-3xl tsm:text-4xl text-gray-400 dark:text-gray-300 font-medium mb-2">
          My tech stack
        </div>
        <div className="w-full max-w-[calc(100% - 50px)] py-5">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {technologies.map((tech, index) => (
                <CardTech key={index} {...tech} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
        </div>
      </AnimatedContent>
    </>
  );
};

export default TechStack;

const CardTech = ({ icon, name, url }: Technology) => {
  const Icon = SVGIcons[icon];

  return (
    <div className=" rounded-full">
      <Link
        href={url}
        className="flex items-center justify-center gap-1.5 mr-2"
      >
        <Icon className="size-8" />
        <span className="text-sm font-medium">{name}</span>
      </Link>
    </div>
  );
};
