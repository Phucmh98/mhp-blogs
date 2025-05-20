import GlitchText from "@/components/commons/reactbits/glitch-text";
import PixelCard from "@/components/commons/reactbits/pixel-card";
import SpotlightCard from "@/components/commons/reactbits/spotlight-card";
import Image from "next/image";
import { InteractiveIcon } from "./interactive-icon";
import { selectProjects } from "../utils/select-project";
import Link from "next/link";

const SelectProject = () => {
  return (
    <>
      <div className="flex items-center justify-center text-4xl font-semibold text-gray-500 mb-5">
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
      <div className="grid grid-cols-2  w-full  gap-4">
        {/* Render Card */}
        {selectProjects.map((project, index) => (
          <SpotlightCard
            key={index}
            className="w-full"
            spotlightColor="rgba(254, 154, 0, 0.3)"
          >
            <div className="w-full h-[250px] overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                width={500}
                height={300}
                className="object-fit"
                unoptimized
              />
            </div>

            <div className="flex justify-between">
              <div className="my-2 mx-3">
                <div className="text-xl font-medium">{project.name}</div>
                <div className="text-gray-500">{project.description}</div>
              </div>
              <div className="flex items-center justify-center mr-2">
                {/* Icon Demo */}
                <Link href={project.urlDemo || "/"} target="_blank">
                  <InteractiveIcon
                    animationState="in-reveal"
                    animationHover="hover-pinch"
                    iconUrl="https://cdn.lordicon.com/ubpgwkmy.json"
                    sizeIcon={28}
                    label="Demo"
                    colors="primary:#fe9a00,secondary:#fe9a00"
                    classNameContainer="relative group flex items-center cursor-pointer"
                    classNameLabel="max-w-0 opacity-0 overflow-hidden translate-x-full text-neutral-100 text-xs font-light 
             group-hover:max-w-xs group-hover:opacity-100 group-hover:translate-x-0 bg border rounded-full bg-amber-500 px-1.5 py-0.5
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
                    classNameContainer="relative group flex items-center cursor-pointer"
                    classNameLabel="max-w-0 opacity-0 overflow-hidden translate-x-full text-neutral-100 text-xs font-light 
             group-hover:max-w-xs group-hover:opacity-100 group-hover:translate-x-0  rounded-full bg-amber-500 group-hover:px-1.5 group-hover:py-0.5
             transition-all duration-500 whitespace-nowrap"
                  />
                </Link>
              </div>
            </div>
          </SpotlightCard>
        ))}

        <SpotlightCard
          className="w-full"
          spotlightColor="rgba(254, 154, 0, 0.3)"
        >
          <Image
            src="/image/projects/banner-mhp-movie.png"
            alt="mhp-movie-banner"
            width={500}
            height={300}
          />
          <div className="flex justify-between">
            <div className="my-2 mx-3">
              <div className="text-xl font-medium">MHP Cinema</div>
              <div className="text-gray-500">
                Front End Course Completion Project
              </div>
            </div>
            <div className="flex items-center justify-center mr-2">
              <InteractiveIcon
                animationState="in-reveal"
                animationHover="hover-pinch"
                iconUrl="https://cdn.lordicon.com/ubpgwkmy.json"
                sizeIcon={28}
                label="Demo"
                colors="primary:#fe9a00,secondary:#fe9a00"
                classNameContainer="relative group flex items-center cursor-pointer"
                classNameLabel="max-w-0 opacity-0 overflow-hidden translate-x-full text-neutral-100 text-xs font-light 
             group-hover:max-w-xs group-hover:opacity-100 group-hover:translate-x-0 bg border rounded-full bg-amber-500 px-1.5 py-0.5
             transition-all duration-500 whitespace-nowrap"
              />
              <InteractiveIcon
                animationState="in-reveal"
                animationHover="hover-pinch"
                iconUrl="https://cdn.lordicon.com/jjxzcivr.json"
                sizeIcon={28}
                label="Github"
                colors="primary:#fe9a00,secondary:#fe9a00"
                classNameContainer="relative group flex items-center cursor-pointer"
                classNameLabel="max-w-0 opacity-0 overflow-hidden translate-x-full text-neutral-100 text-xs font-light 
             group-hover:max-w-xs group-hover:opacity-100 group-hover:translate-x-0  rounded-full bg-amber-500 group-hover:px-1.5 group-hover:py-0.5
             transition-all duration-500 whitespace-nowrap"
              />
            </div>
          </div>
        </SpotlightCard>
      </div>
    </>
  );
};

export default SelectProject;
