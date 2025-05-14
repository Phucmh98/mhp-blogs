import { Separator } from "@/components/ui/separator";
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
import { useEffect } from "react";

const NavLink = () => {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  const navLinks = [
    {
      name: "Home",
      icon: <House strokeWidth={1.5} className="size-5" />,
      href: "/",
      group: "left",
    },
    {
      name: "About",
      icon: <UserCircle2 strokeWidth={1.5} className="size-5 mr-2" />,
      href: "/about",
      group: "center",
    },
    {
      name: "Blog",
      icon: <BookMarked strokeWidth={1.5} className="size-5 mr-2" />,
      href: "/blog",
      group: "center",
    },
    {
      name: "Project",
      icon: <FolderSymlink strokeWidth={1.5} className="size-5 mr-2" />,
      href: "/project",
      group: "center",
    },
    {
      name: "Community",
      icon: <Users strokeWidth={1.5} className="size-5 mr-2" />,
      href: "/community",
      group: "center",
    },
  ];

  return (
    <div
      className={`flex items-center backdrop-blur-lg  gap-1 border rounded-2xl py-1 px-2 shadow-[0px_2px_4px_rgba(0,0,0,0.12),0px_8px_12px_rgba(0,0,0,0.08),0px_8px_16px_rgba(0,0,0,0.08)] 
        border-[var(--phuc-border-navlink)] bg-[var(--phuc-bg-navlink)]           
      }`}
    >
      {navLinks.map((link, index) => {
        const nextGroup = navLinks[index + 1]?.group;
        const isActive = pathname === link.href;

        return (
          <div key={index} className="flex items-center">
            <Link
              href={link.href}
              className={`flex items-center cursor-pointer text-sm py-1.5 px-3 border border-transparent rounded-xl transition-all duration-200
                ${
                  isActive
                    ? "bg-[#95959530] !border-[#9595954D]"
                    : "hover:border hover:border-[#9595954D] hover:bg-[#9595951A]"
                }`}
            >
              {link.icon}
              {link.group === "center" && (
                <span className="ml-1">{link.name}</span>
              )}
            </Link>

            {nextGroup && nextGroup !== link.group && (
              <Separator
                orientation="vertical"
                
                className={`!h-6 ml-1 !bg-[var(--phuc-separator)]`}
              />
            )}
          </div>
        );
      })}

      {/* Separator cho dark mode */}
      <Separator
        orientation="vertical"
        className={`!h-6 !bg-[var(--phuc-separator)]`}
      />

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        className="flex items-center cursor-pointer text-sm py-1 px-3 border border-transparent rounded-xl transition-all duration-200 hover:border hover:border-[#9595954D] hover:bg-[#9595951A]"
      >
        {resolvedTheme === "dark" ? (
          <Moon strokeWidth={1.5} className="size-5" />
        ) : (
          <Sun strokeWidth={1.5} className="size-5" />
        )}
      </button>
    </div>
  );
};

export default NavLink;
