"use client";

import Banner from "./components/banner";
import ContainerImage from "./components/container-image";
import ContainerInfomation from "./components/container-infomation";
import InfoPage from "./components/info-about-page";
import MyStory from "./components/my-story";
import Studies from "./components/studies";
import TechStack from "./components/tech-stack";

export default function About() {
  return (
    <>
      <Banner />
      <div className="container w-full h-full mx-auto max-w-5xl px-3 sm:px-10">
        <div className=" w-full flex max-md:flex-col">
            <ContainerImage/>
            <ContainerInfomation/>
        </div>
         <TechStack/>
         <Studies/>
         <MyStory/>
         <InfoPage/>
      </div>
     
    </>
  );
}
