"use client";
import BlurImage from "@/components/commons/image/blur-image";
import InteractiveIcon from "@/components/commons/interactive-icon/interactive-icon";
import { InteractiveHoverButton } from "@/components/commons/magicui/interactive-hover-button";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { MoveLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Project,
  ProjectDetail,
  selectProjects,
} from "../../lib/select-project";
import Link from "next/link";
const DetailProject = () => {
  const router = useRouter();
  const param = useParams();
  const [detailProject, setDetailProject] = useState<Project | null>(null);
  useEffect(() => {
    if (!param.detail) return;

    const project = selectProjects.find((p) => p.id === param.detail);
    setDetailProject(project || null);
  }, [param.detail]);
  return (
    <section className="w-full">
      {detailProject && (
        <div className="container w-full mx-auto max-w-5xl px-3 sm:px-10 mt-25 mb-10">
          <div className="flex items-center justify-between font-medium text-gray-500 dark:text-gray-200">
            <ShinyButton className="flex rounded-xl" onClick={() => router.push("/my-projects")}>
              <div className="flex items-center gap-2 ">
                <MoveLeft /> Back to project
              </div>
            </ShinyButton>
            <AnimatedShinyText className="flex items-center justify-center px-4 py-2 rounded-xl border mx-0">
              <span>{detailProject.startDate}</span>
            </AnimatedShinyText>
          </div>

          <Banner detailProject={detailProject} />
          {handleRenderContent({ detailProject })}
         
        </div>
      )}
    </section>
  );
};

export default DetailProject;

const Banner = ({ detailProject }: { detailProject: Project }) => {
  return (
    <div className="my-10">
      <BlurImage
        src={detailProject.image}
        alt={detailProject.name}
        className="h-[300px] rounded-2xl"
        height={300}
        width={400}
      />
      <div className="flex flex-col sm:flex-row justify-between gap-8 mt-4 text-gray-600 dark:text-gray-300">
        <div className="">
          <div className="text-3xl sm:text-4xl font-bold">{detailProject.name}</div>
          <div className="text-sm md:text-base mt-3.5">{detailProject.content}</div>
        </div>
        <div className="">
          <div className="flex gap-4 font-base mb-3">
            <Link href={detailProject.urlDemo || "#"} target="_blank">
              <InteractiveHoverButton
                className="shadow-md w-[120px] justify-center"
                icon={
                  <InteractiveIcon
                    iconUrl="https://cdn.lordicon.com/ubpgwkmy.json"
                    label=""
                    sizeIcon={30}
                    colors="primary:#ffffff,secondary:#ffffff"
                    animationState="in-reveal"
                    animationHover="hover-pinch"
                    classNameContainer="flex reverse items-center justify-center"
                    classNameLabel=""
                    isLoop={true}
                  />
                }
              >
                Demo
              </InteractiveHoverButton>
            </Link>
            <Link href={detailProject.urlGithub || "#"} target="_blank">
              <InteractiveHoverButton
                className="shadow-md w-[120px] justify-center"
                icon={
                  <InteractiveIcon
                    iconUrl="https://cdn.lordicon.com/jjxzcivr.json"
                    label=""
                    sizeIcon={30}
                    colors="primary:#ffffff,secondary:#ffffff"
                    animationState="loop-roll"
                    animationHover="loop-roll"
                    classNameContainer="flex reverse items-center justify-center"
                    classNameLabel=""
                    isLoop={true}
                  />
                }
              >
                Github
              </InteractiveHoverButton>
            </Link>
          </div>
          <div className="text-sm md:text-base">
            <span className="font-semibold mr-5.5">Role:</span>
            {detailProject.role}
          </div>
          <div className="mt-1 text-sm md:text-base">
            <span className="font-semibold mr-3">Client:</span>
            {detailProject.client}
          </div>
        </div>
      </div>
    </div>
  );
};

const Title = ({ projectDetail }: { projectDetail: ProjectDetail }) => {
  return (
    <div className="w-full mt-8 mb-4">
      <div className="text-xl sm:text-3xl font-semibold border-b-1 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-500 pb-2">
        {projectDetail.content}
      </div>
    </div>
  );
};

const TextContent = ({ projectDetail }: { projectDetail: ProjectDetail }) => {
  return (
    <div className="w-full my-4 text-sm md:text-base">
      <p className="text-gray-600 dark:text-gray-300">
        {projectDetail.content}
      </p>
    </div>
  );
};

const Image = ({ projectDetail }: { projectDetail: ProjectDetail }) => {
  return (
    <div className="w-full">
      <BlurImage
        src={projectDetail.content || ""}
        alt="Project Image"
        className="rounded-lg"
        height={400}
        width={400}
      />
    </div>
  );
};

const ContentList = ({ projectDetail }: { projectDetail: ProjectDetail }) => {
  return (
    <div className="w-full mt-4 text-sm md:text-base">
      <ul className="list-disc pl-6 text-gray-500 dark:text-gray-200">
        {projectDetail.contentList?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const handleRenderContent = ({ detailProject }: { detailProject: Project }) => {
  return detailProject.contentDetail?.map((content, index) => {
    switch (content.typeContent) {
      case "title":
        return <Title key={index} projectDetail={content} />;
      case "text":
        return <TextContent key={index} projectDetail={content} />;
      case "image":
        return <Image key={index} projectDetail={content} />;
      case "list":
        return <ContentList key={index} projectDetail={content} />;
      default:
        return null;
    }
  });
};
