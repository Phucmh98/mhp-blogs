"use client";
import BlurImage from "@/components/commons/image/blur-image";
import SpotlightCard from "@/components/commons/reactbits/spotlight-card";
import { Project } from "../../lib/select-project";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";

const CollectionProject = () => {
  const queryProjects = useQuery(
    api.projectManage.projectManage.getAllProjects
  );
  const [projects, setProject] = useState<Project[]>();

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    function handleMouseEnter(e: Event) {
      cards.forEach((c) => {
        if (c !== e.currentTarget) c.classList.add("dimmed");
      });
    }

    function handleMouseLeave() {
      cards.forEach((c) => c.classList.remove("dimmed"));
    }

    cards.forEach((card) => {
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [projects]);

  useEffect(() => {
    if (queryProjects) {
      const parsedProjects = queryProjects.map((project) => {
        let parsedContent = [];

        try {
          parsedContent = JSON.parse(project.contentDetail);
        } catch  {
          console.warn("Lỗi parse JSON:", project.name);
        }

        // Ensure type is one of the allowed values or undefined
        const allowedTypes = ["web", "mobile", "desktop"];
        const mappedType = allowedTypes.includes(project.type)
          ? (project.type as "web" | "mobile" | "desktop")
          : undefined;

        return {
          ...project,
          type: mappedType,
          contentDetail: parsedContent,
        };
      });
      console.log("Parsed Projects:", parsedProjects);
      setProject(parsedProjects as Project[]);
    }
  }, [queryProjects]);
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 pb-24">
      {projects?.map((project, index) => (
        <CardProject key={index} {...project} />
      ))}

      <style jsx global>{`
        .dimmed {
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }
        .card {
          transition: opacity 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default CollectionProject;

const CardProject = (project: Project) => {
  return (
    <div className="card cursor-pointer transition-all duration-300 text-gray-500 dark:text-gray-300">
      <Link href={`/my-projects/${project.id}`}>
        <SpotlightCard
          className={`group w-full cursor-pointer rounded-2xl p-6 md:p-5 lg:p-8  ${project.backgroundColor}`}
          // className={`group w-full cursor-pointer rounded-2xl p-8 bg-orange-200`}

          spotlightColor="rgba(254, 154, 0, 0.3)"
        >
          <BlurImage
            width={500}
            height={500}
            src={project.image}
            alt={project.name}
            className="h-[270px] md:h-[210px] lg:h-[250px] border-3  border-gray-200 rounded-2xl shadow-xl/30 transition-transform duration-300 group-hover:scale-103"
          />
        </SpotlightCard>
        <div className="flex w-full justify-between items-center px-2">
          <div className="mt-2">
            <h3 className="text-2xl font-semibold">{project.name}</h3>
            <p className="mt-0.5 dark:text-gray-400">{project.description}</p>
          </div>
          <span>{project.startDate}</span>
        </div>
      </Link>
    </div>
  );
};
