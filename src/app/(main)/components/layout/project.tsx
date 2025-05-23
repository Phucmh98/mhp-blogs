'use client'
import SpotlightCard from "@/components/commons/reactbits/spotlight-card";
import Image from "next/image";
import { InteractiveIcon } from "../../../../components/commons/interactive-icon/interactive-icon";
import { selectProjects } from "../../lib/select-project";
import Link from "next/link";
import BlurImage from "@/components/commons/image/blur-image";
import { useRouter } from "next/navigation";


const SelectProject = () => {
    const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-center text-4xl font-semibold text-gray-500 mt-10 mb-6">
        <Image
          src="/image/gif/sparkles-animate.gif"
          alt="sparkles"
          width={40}
          height={40}
        />
        <span className="mx-2">Select Project</span>
        <Image
          src="/image/gif/sparkles-animate.gif"
          alt="sparkles"
          width={40}
          height={40}
        />
      </div>
      <div className="grid grid-cols-2  w-full  gap-5">
        {/* Render Card */}
        {selectProjects.map((project, index) => (
          <SpotlightCard
            key={index}
            className="w-full cursor-pointer rounded-xl shadow-md"
            spotlightColor="rgba(254, 154, 0, 0.3)"
            onClick={() => router.push("/about")}
          >
            <BlurImage
              width={1280}
              height={832}
              src={project.image || ""}
              alt={project.name}
              className="h-[250px]"
            />

            <div className="flex justify-between border-t border-gray-300">
              <div className="my-2 mx-3">
                <div className="text-xl font-medium">{project.name}</div>
                <div className="text-gray-500">{project.description}</div>
              </div>
              <div className="flex items-center justify-center mr-2">
                {/* Icon Demo */}
                <Link href={project.urlDemo || "/about"} target="_blank">
                  <InteractiveIcon
                    animationState="in-reveal"
                    animationHover="hover-pinch"
                    iconUrl="https://cdn.lordicon.com/ubpgwkmy.json"
                    sizeIcon={28}
                    label="Demo"
                    colors="primary:#fe9a00,secondary:#fe9a00"
                    classNameContainer="relative group/icon flex items-center cursor-pointer"
                    classNameLabel="max-w-0 opacity-0 overflow-hidden translate-x-full text-neutral-100 text-xs font-light 
             group-hover/icon:max-w-xs group-hover/icon:opacity-100 group-hover/icon:translate-x-0 bg border rounded-full bg-amber-500 px-1.5 py-0.5
             transition-all duration-500 whitespace-nowrap"
                  />
                </Link>

                {/* Icon Github */}
                <Link href={project.urlDemo || "/"} target="_blank">
                  <InteractiveIcon
                    animationState="in-reveal"
                    animationHover="hover-pinch"
                    iconUrl="https://cdn.lordicon.com/jjxzcivr.json"
                    sizeIcon={28}
                    label="Github"
                    colors="primary:#fe9a00,secondary:#fe9a00"
                    classNameContainer="relative group/icon flex items-center cursor-pointer"
                    classNameLabel="max-w-0 opacity-0 overflow-hidden translate-x-full text-neutral-100 text-xs font-light 
             group-hover/icon:max-w-xs group-hover/icon:opacity-100 group-hover/icon:translate-x-0 bg border rounded-full bg-amber-500 px-1.5 py-0.5
             transition-all duration-500 whitespace-nowrap"
                  />
                </Link>
              </div>
            </div>
          </SpotlightCard>
        ))}

  
      </div>

      <div className="flex items-center justify-center my-5">
          <InteractiveIcon
            iconUrl="https://cdn.lordicon.com/fiytezjs.json"
            label="View All Projects"
            sizeIcon={32}
            colors="primary:#ffffff,secondary:#ffffff"
            animationState="in-reveal"
            animationHover="hover-launch"
            classNameContainer="pl-3.5 pr-1.5 py-1.5 text-white flex items-center cursor-pointer shadow-md flex-row-reverse bg-amber-500 rounded-full hover:bg-amber-600 transition-all duration-300"
            classNameLabel="p-0"
          />
        </div>
    </>
  );
};

export default SelectProject;
