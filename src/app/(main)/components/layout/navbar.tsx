"use client";
import Image from "next/image";
import NavLink from "../common/navbar/navbar-link";
import UserLogin from "../common/navbar/user-login";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [width, setWidth] = useState(1280);
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      
      setScrollY(y);
      const newWidth = Math.max(640, 1280 - y * 5); // tốc độ giảm
      setWidth(newWidth);
    };
        window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
     style={{ maxWidth: `${width}px` }} 
    className=" w-full flex items-center justify-between sm:backdrop-blur-lg sm:border sm:rounded-3xl sm:py-1 sm:px-3 sm:shadow-md sm:border-[var(--phuc-border-navlink)] sm:bg-[var(--phuc-bg-navlink)]">
    
      <Image
        className="cursor-pointer"
        src="/image/logo_mhp.png"
        alt="logo_mhp"
        
        priority={true}
        width={42}
        height={42}
      />
      <NavLink />
      <UserLogin />
    </nav>
  );
};

export default Navbar;
