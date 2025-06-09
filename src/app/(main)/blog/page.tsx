"use client";

import Banner from "./components/banner";
import { Card, CardContent } from "@/components/ui/card";
import BlurImage from "@/components/commons/image/blur-image";
import { MagicCard } from "@/components/commons/magicui/magic-card";
import { useUser } from "@clerk/nextjs";
import { blogs, DetailBlog } from "../lib/blogs";
import Link from "next/link";

export default function Blog() {
  return (
    <section className="w-full">
      <Banner />
      <div className="container w-full mx-auto max-w-5xl px-3 sm:px-10 text-gray-600 mt-10">
        <h1 className="text-2xl sm:text-4xl font-bold  dark:text-gray-200">
          Little things I&apos;ve realized.
        </h1>
        <p className="mt-3 text-sm sm:text-base dark:text-gray-300">
          I&apos;m excited to share my insights, showcase the projects I&apos;ve
          worked on, and talk about the lessons I&apos;ve picked up along the
          way. These are things I&apos;ve learned and figured out through my own
          journey of self-learning and working on real projects.
        </p>
        <div className="w-full my-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <CardBlog key={blog.id} blog={blog} />
          ))}

          
        </div>
      </div>
    </section>
  );
}

const CardBlog = ({ blog }: { blog: DetailBlog }) => {
  return (
    <Card className="p-0 border-none cursor-pointer hover:scale-102 transition-transform duration-300 ease-in-out ">
      <MagicCard gradientColor={"#D9D9D955"} className="p-0">
        <Link href={`/blog/${blog.id}`}>
          <CardContent className="p-[1px]">
            <BlurImage
              src={blog.image || "https://picsum.photos/400/200"}
              alt={blog.id}
              className="h-[200px] rounded-t-xl object-cover"
              height={200}
              width={400}
            />
            <div className="m-4 text-gray-600">
              <h2 className="text-lg sm:text-xl font-semibold dark:text-gray-200">
                {blog.title}
              </h2>
              <p className="text-sm sm:text-base dark:text-gray-300 mt-2">
                {blog.description}
              </p>
            </div>
          </CardContent>
        </Link>
      </MagicCard>
    </Card>
  );
};
