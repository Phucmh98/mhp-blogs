"use client";

import Banner from "./components/banner";
import ContainerImage from "./components/container-image";

export default function About() {
  return (
    <>
      <Banner />
      <div className="container w-full h-full mx-auto max-w-5xl px-3 sm:px-10">
        <div className="w-full flex">
            <ContainerImage/>
        </div>
      </div>
    </>
  );
}
