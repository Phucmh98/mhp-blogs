"use client";
import Image from "next/image";
import NavLink from "./navbar-link";
import UserLogin from "./user-login";

const Navbar = () => {
  return (
    <nav className="w-full h-full flex items-center justify-between">
      <Image
        className="cursor-pointer"
        src="/image/logo_mhp.png"
        alt="logo_mhp"
        priority={true}
        width={48}
        height={48}
        
      />
      <NavLink />
      <UserLogin/>
    </nav>
  );
};

export default Navbar;
