'use client';
import BlurImage from "@/components/commons/image/blur-image";
import SpotlightCard from "@/components/commons/reactbits/spotlight-card";
import { Project, selectProjects } from "../../lib/select-project";
import { useEffect } from "react";

const CollectionProject = () => {

  useEffect(() => {
    const cards = document.querySelectorAll('.card');

    function handleMouseEnter(e: Event) {
      cards.forEach(c => {
        if (c !== e.currentTarget) c.classList.add('dimmed');
      });
    }

    function handleMouseLeave() {
      cards.forEach(c => c.classList.remove('dimmed'));
    }

    cards.forEach(card => {
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 pb-24">
      {selectProjects.map((project, index) => (
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
      <SpotlightCard
        className={`group w-full cursor-pointer rounded-2xl p-6 md:p-5 lg:p-8 ${project.backgroundColor}`}
        // className={`group w-full cursor-pointer rounded-2xl p-8 bg-orange-200`}

        spotlightColor="rgba(254, 154, 0, 0.3)"
      >
        <BlurImage
          width={1280}
          height={832}
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
    </div>
  );
};
