"use client";

import Banner from "./components/banner";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import BlurImage from "@/components/commons/image/blur-image";
import { MagicCard } from "@/components/commons/magicui/magic-card";

export default function Blog() {
  return (
    <section className="w-full">
      <Banner />
      <div className="container w-full mx-auto max-w-5xl px-3 sm:px-10 text-gray-600 mt-10">
        <h1 className="text-2xl sm:text-4xl font-bold  dark:text-gray-200">Little things I’ve realized.</h1>
        <p className="mt-3 text-sm sm:text-base dark:text-gray-300">
          I'm excited to share my insights, showcase the projects I've worked
          on, and talk about the lessons I've picked up along the way. These are
          things I've learned and figured out through my own journey of
          self-learning and working on real projects.
        </p>
        <div className="w-full my-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <CardBlog />
          <CardBlog />
        </div>
      </div>
    </section>
  );
}

const CardBlog = () => {
  return (
    <Card className="p-0 border-none cursor-pointer hover:scale-102 transition-transform duration-300 ease-in-out ">
      <MagicCard gradientColor={"#D9D9D955"} className="p-0">
        <CardContent className="p-[1px]">
          <BlurImage
            src="https://picsum.photos/200/300"
            alt="Blog Image"
            className="h-[200px] rounded-t-xl object-cover"
            height={200}
            width={400}
          />
          <div className="m-4 text-gray-600">
            <h2 className="text-lg sm:text-xl font-semibold dark:text-gray-200">Understanding React Hooks</h2>
            <p className="text-sm sm:text-base dark:text-gray-300 mt-2">
              A deep dive into the power of React Hooks and how they can simplify
              your component logic.
            </p>
          </div>
        </CardContent>
      </MagicCard>
    </Card>
  );
};
