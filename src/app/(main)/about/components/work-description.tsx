"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/commons/magicui/animated-beam";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

interface WorkDescription {
  company: string;
  urlimgCompany: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export function WorkDescriptionContaitainer() {
  const workDescriptions: WorkDescription[] = [
    {
      company: "DP-UNITY COMPANY",
      urlimgCompany: "/image/work-experience/logo-dpu.png",
      position: "Front-End Developer & R&D",
      duration: "2024 - Present",
      description: [
        "Built a web application for managing construction data (CDE) in MEP projects using Blazor, with a focus on clear structure and easy maintenance.",
        "Integrated Autodesk Viewer to display and interact with 3D models directly in the browser.",
        "Created a feature that connects 3D models with Excel, allowing real-time data updates and interaction between the model and spreadsheet.",
        "Used xeokit and Bryntum Gantt together to sync 3D models with construction schedules, helping teams plan and track progress visually.",
        "Developed and released DPUGisViewer as an npm package, making it easy to reuse and integrate 3D viewer components into other projects.",
        "Worked on the front-end of the CDE platform using modern tools and frameworks to ensure the UI is fast, responsive, and user-friendly.",
      ],
      technologies: [
        "C#",
        "JavaScript",
        "TypeScript",
        "Blazor",
        "Next.js",
        "Tailwind CSS",
        "shadcn/ui",
        "Syncfusion",
        "Fluent UI",
        "BIM",
      ],
    },
    {
      company: "CENTRAL CONSTRUCTION JOINT STOCK COMPANY",
      urlimgCompany: "/image/work-experience/logo-central.png",
      position: "Add-in Developer & R&D",
      duration: "2021 - 2023",
      description: [
        "Developed custom add-ins for Revit to help engineering teams work faster and more accurately in design and construction tasks.",
        "Researched and built prototypes for new tools in 3D visualization, automation, and data processing for construction workflows.",
        "Created internal tools that saved time for engineers, including automated data exports, report generation, model checks, and BIM model interactions.",
        "Worked closely with technical teams and project managers to understand their needs and deliver software that fits real construction use cases.",
        "Provided development support to construction teams by identifying common issues and building tools to solve them efficiently.",
        "Learned 3D modeling and BIM workflows from construction experts to make sure the software tools matched real-world field requirements.",
      ],
      technologies: ["C#", "Python", "Revit API", "BIM"],
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden py-5"
      ref={containerRef}
    >
      <div className="flex size-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-col justify-between ">
          <div className="flex pb-5">
            <Circle ref={div1Ref}>
              <IconsCompany urlImg={workDescriptions[0].urlimgCompany} />
            </Circle>
            <DetailWorkDescriptions workDes={workDescriptions[0]} />
          </div>

          <div className="flex">
            <div className="flex flex-col justify-between">
              <Circle ref={div2Ref}>
                <IconsCompany urlImg={workDescriptions[1].urlimgCompany} />
              </Circle>
              <div
                className="z-10 flex size-5 items-center justify-center rounded-full border-2 bg-white p-3 shadow-md ml-2.5"
                ref={div3Ref}
              ></div>
            </div>
            <DetailWorkDescriptions workDes={workDescriptions[1]} />
          </div>
        </div>
      </div>

      <AnimatedBeam
        duration={3}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        reverse={true} // Set to true to reverse the direction
        orientation="vertical"
      />

      <AnimatedBeam
        duration={3}
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div3Ref}
        reverse={true} // Set to true to reverse the direction
        orientation="vertical"
      />
    </div>
  );
}

const IconsCompany = ({ urlImg }: { urlImg: string }) => {
  return (
    <Avatar>
      <AvatarImage
        src={urlImg}
        alt={urlImg ? "Company Logo" : "Default Company Logo"}
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

const DetailWorkDescriptions = ({ workDes }: { workDes: WorkDescription }) => {
  return (
    <div className="ml-2 text-gray-500 font-normal">
      <div className="font-bold text-2xl uppercase">
          {workDes.company}
      </div>
      <div className="text-lg">
          {workDes.position}
      </div>
      <div className="text-gray-400 mb-2">
          {workDes.duration}
      </div>
      <ul className="list-disc pl-7">
        {workDes.description.map((desc, index) => (
          <li className="mb-2" key={index}>
              {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};
