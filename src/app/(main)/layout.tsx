"use client";

import NavLink from "./components/common/navbar/navbar-link";
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full">
      {/* Navbar Web */}
      <div className="fixed w-full flex justify-center top-0 left-1/2 -translate-x-1/2 p-4 z-50 bg-[linear-gradient(0deg,transparent_0%,transparent_60%,var(--color-background)_100%)] transform">
        <Navbar />
      </div>
      {/*Navbar Mobile */}
        <div className="sm:hidden backdrop-blur-xl fixed w-full flex justify-center bottom-0 left-1/2 -translate-x-1/2 p-2 z-50 transform rounded-t-3xl  border-t shadow-lg">
        
        <NavLink isBottom={true} />
      </div>
      <div className=" w-full">{children}</div>
      {/* Footer */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}
