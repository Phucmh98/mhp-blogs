"use client";
import React from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";
const ContactSection = () => {
  return (
    <section
      id="contact"
      className="container h-[600px] mx-auto max-w-5xl sticky"
    >
      <Link href={"#contact"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl font-semibold",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          LET&apos;S WORK <br />
          TOGETHER
        </h2>
      </Link>
    </section>
  );
};
export default ContactSection;
