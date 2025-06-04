"use client";

import Banner from "./components/banner";

export default function Blog() {
  return (
    <section className="w-full">
      <Banner />
      <div className="container w-full mx-auto max-w-5xl px-3 sm:px-10">
        <h1 className="text-4xl font-bold">Little things I’ve realized.</h1>
        <p className="mt-3">
          I'm excited to share my insights, showcase the projects I've worked
          on, and talk about the lessons I've picked up along the way. These are
          things I've learned and figured out through my own journey of
          self-learning and working on real projects.
        </p>
      </div>
    </section>
  );
}
