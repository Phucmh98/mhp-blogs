"use client";

import SpotlightCard from "@/components/commons/reactbits/spotlight-card";
import React from "react";
import { selectProjects } from "../../lib/select-project";
import BlurImage from "@/components/commons/image/blur-image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
const InteractiveIcon = dynamic(
  () =>
    import("../../../../components/commons/interactive-icon/interactive-icon"),
  { ssr: false }
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-5xl mx-auto mb-20">
      <div className="top-[70px] sticky">
        <Link href={"#skills"}>
          <h2
            className={cn(
              "bg-clip-text text-4xl text-center text-transparent md:text-7xl font-semibold",
              "bg-gradient-to-b from-black/80 to-black/50",
              "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 "
            )}
          >
            SELECT PROJECT
          </h2>
        </Link>
        <SelectProject />
      </div>
    </section>
  );
};

export default ProjectsSection;

const SelectProject = () => {
  const router = useRouter();
  return (
    <div className="container mx-auto max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2  w-full  gap-5 mt-20 mb-10">
        {/* Render Card */}
        {selectProjects.map((project, index) => (
          <SpotlightCard
            key={index}
            className="w-full cursor-pointer rounded-xl shadow-md backdrop-blur-xl bg-gray-100/20"
            spotlightColor="rgba(254, 154, 0, 0.3)"
            onClick={() => router.push(`/my-projects/${project.id}`)}
          >
            <BlurImage
              width={1280}
              height={832}
              src={project.image || ""}
              alt={project.name}
              className="h-[250px]"
            />

            <div className="flex justify-between border-t border-gray-300 text-gray-700">
              <div className="my-2 mx-3 flex-1 min-w-0">
                <div className="text-sm sm:text-base lg:text-xl font-medium truncate  dark:text-gray-200">
                  {project.name}
                </div>
                <div className="text-xs md:text-sm lg:text-base text-gray-800 dark:text-gray-300 truncate">
                  {project.description}
                </div>
              </div>
              <div className="flex items-center justify-end mr-2">
                {/* Icon Demo */}
                <Link href={project.urlDemo || "/my-project"} target="_blank">
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
                <Link href={project.urlGithub || "/my-project"} target="_blank">
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
          onClick={() => router.push("/my-projects")}
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
    </div>
  );
};
