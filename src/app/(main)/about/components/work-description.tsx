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
        "Created a feature that connects 3D models with Excel, allowing real-time data updates and interaction between the model and spreadsheet.",
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
                <IconsCompany urlImg={workDescriptions[0].urlimgCompany} />
              </Circle>
              <div className="z-10 flex size-5 items-center justify-center rounded-full border-2 bg-white p-3 shadow-md ml-2.5" ref={div3Ref}>
                {/* <Icons.user /> */}
              </div>
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
      <p className="font-bold text-2xl uppercase">{workDes.company}</p>
      <p className="text-lg">{workDes.position}</p>
      <p className="text-gray-400 mb-2">{workDes.duration}</p>
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

const Icons = {
  openai: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};
