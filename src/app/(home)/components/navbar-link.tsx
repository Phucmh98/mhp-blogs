"use client";

import { Separator } from "@/components/ui/separator";
import { set } from "date-fns";
import {
  House,
  BookMarked,
  UserCircle2,
  FolderSymlink,
  Users,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const navLinks = [
    {
      name: "Home",
      icon: <House className="size-5" />,
      href: "/",
      group: "left",
    },
    {
      name: "About",
      icon: <UserCircle2 className="size-5 mr-2" />,
      href: "/about",
      group: "center",
    },
    {
      name: "Blog",
      icon: <BookMarked className="size-5 mr-2" />,
      href: "/blog",
      group: "center",
    },
    {
      name: "Project",
      icon: <FolderSymlink className="size-5 mr-2" />,
      href: "/project",
      group: "center",
    },
    {
      name: "Community",
      icon: <Users className="size-5 mr-2" />,
      href: "/community",
      group: "center",
    },
  ];

  return (
    <div className="flex items-center gap-1 border-[#E0E0E0] rounded-2xl py-1 px-2 shadow-[0px_2px_4px_rgba(0,0,0,0.12),0px_8px_12px_rgba(0,0,0,0.08),0px_8px_16px_rgba(0,0,0,0.08)]">
      {navLinks.map((link, index) => {
        const nextGroup = navLinks[index + 1]?.group;
        const isActive = pathname === link.href;

        return (
          <div key={index} className="flex items-center">
            <Link
              href={link.href}
              className={`flex items-center cursor-pointer text-sm py-1 px-3 border border-transparent rounded-xl transition-all duration-200
                ${
                  isActive
                    ? "bg-[#9595954D]"
                    : "hover:border hover:border-[#9595954D] hover:bg-[#9595951A]"
                }`}
            >
              {link.icon}
              {link.group === "center" && (
                <span className="ml-1">{link.name}</span>
              )}
            </Link>

            {nextGroup && nextGroup !== link.group && (
              <Separator orientation="vertical" className="!h-6 mx-1" />
            )}
          </div>
        );
      })}

      {/* Separator cho dark mode */}
      <Separator orientation="vertical" className="!h-6 mx-1" />

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
        className="flex items-center cursor-pointer text-sm py-1 px-3 border border-transparent rounded-xl transition-all duration-200 hover:border hover:border-[#9595954D] hover:bg-[#9595951A]"
      >
        {theme === "dark" ? (
          <Sun className="size-5" />
        ) : (
          <Moon className="size-5" />
        )}
      </button>
    </div>
  );
};

export default NavLink;
