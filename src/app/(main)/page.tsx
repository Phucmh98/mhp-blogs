"use client";

import AnimatedBackground from "@/components/commons/background/animated-background";
import HeroSection from "./components/layoutv2/hero";
import SkillsSection from "./components/layoutv2/skills";
import ContactSection from "./components/layoutv2/contact";
import ProjectsSection from "./components/layoutv2/projects";
import AboutSection from "./components/layoutv2/about";
import Particles from "@/components/commons/reactbits/particles";
// const InteractiveIcon = dynamic(
//   () => import("../../components/commons/interactive-icon/interactive-icon"),
//   { ssr: false }
// );

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={["#d4d4d4", "#d4d4d4"]}
          particleCount={100}
          particleSpread={12}
          speed={0.1}
          particleBaseSize={150}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
          className="bg-transparent w-full h-screen"
        />
      </div>
      <div className="top-0 z-0 fixed w-full h-screen ">
        <AnimatedBackground />
      </div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </section>
  );
}

// export default function Home() {
//   return (
//     <section className="container w-full mx-auto max-w-5xl px-3 sm:px-10 ">
//       <Banner />
//       <AnimatedContent>
//         <About />
//       </AnimatedContent>
//       <AnimatedContent>
//         <StackGallery autoplay={true} pauseOnHover={true} data={technologies} />

//         <div className="flex items-center justify-center my-5">
//           <Link href="/about">
//           <InteractiveIcon
//             iconUrl="https://cdn.lordicon.com/fiytezjs.json"
//             label="Know me better"
//             sizeIcon={32}
//             colors="primary:#ffffff,secondary:#ffffff"
//             animationState="in-reveal"
//             animationHover="hover-launch"
//             classNameContainer="pl-3.5 pr-1.5 py-1.5 text-white flex items-center shadow-md cursor-pointer flex-row-reverse bg-amber-500 rounded-full hover:bg-amber-600 transition-all duration-300 "
//             classNameLabel="p-0"
//           />
//           </Link>
//         </div>
//       </AnimatedContent>
//       <AnimatedContent>
//         <SelectProject />
//       </AnimatedContent>
//     </section>
//   );
// }
