import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full h-screen ">
      <div className="top-[70px] sticky">
        <Link href={"#skills"}>
        
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl font-semibold",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 "
              )}
            >
              SKILLS
            </h2>
        </Link>
        <p className="mx-auto mt-2 line-clamp-4 max-w-3xl font-normal text-base text-center text-gray-600 dark:text-gray-300">
          (hint: press a key)
        </p>
      </div>
    </section>
  );
};

export default SkillsSection;
