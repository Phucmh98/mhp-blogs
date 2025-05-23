"use client";
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
import { InteractiveIcon } from "../../../../../components/commons/interactive-icon/interactive-icon";
import clsx from "clsx";
import { useEffect, useState } from "react";
const NavLink = ({ isBottom = false }: { isBottom?: boolean }) => {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return;

  const navLinks = [
    {
      name: "Home",
      icon: <House strokeWidth={1.5} className="size-5" />,
      href: "/",
      group: "left",

      urlIcon: "https://cdn.lordicon.com/jeuxydnh.json",
      iconState: "in-reveal",
      iconHover: "hover-3d-roll",
    },
    {
      name: "About",
      icon: <UserCircle2 strokeWidth={1.5} className="size-5 mr-2" />,
      href: "/about",
      group: "center",
      urlIcon: "https://cdn.lordicon.com/kdduutaw.json",
      iconState: "in-reveal",
      iconHover: "hover-looking-around",
    },
    {
      name: "Blog",
      icon: <BookMarked strokeWidth={1.5} className="size-5 mr-2" />,
      href: "/blog",
      group: "center",
      urlIcon: "https://cdn.lordicon.com/xmaezqzk.json",
      iconState: "in-reveal",
      iconHover: "hover-flutter",
    },
    {
      name: "Project",
      icon: <FolderSymlink strokeWidth={1.5} className="size-5 mr-2" />,
      href: "/project",
      group: "center",
      urlIcon: "https://cdn.lordicon.com/tsrgicte.json",
      iconState: "in-reveal",
      iconHover: "morph-open",
    },
    {
      name: "Community",
      icon: <Users strokeWidth={1.5} className="size-5 mr-2" />,
      href: "/community",
      group: "center",
      urlIcon: "https://cdn.lordicon.com/vqhlecvy.json",
      iconState: "in-reveal",
      iconHover: "hover-pinch",
    },
  ];

  return (
    <div
      className={clsx("flex items-center  gap-1", {
        "max-sm:hidden": !isBottom,
      })}
    >
      {navLinks.map((link, index) => {
        const nextGroup = navLinks[index + 1]?.group;
        const isActive = pathname === link.href;

        return (
          <div key={index} className="flex items-center">
            <Link
              href={link.href}
              className={`flex items-center cursor-pointer text-sm py-1.5 px-1.5 border border-transparent rounded-xl transition-all duration-200
                ${
                  isActive
                    ? "bg-[#95959530] !border-[#9595954D]"
                    : "hover:border hover:border-[#9595954D] hover:bg-[#9595951A]"
                }`}
            >
              {/* {link.icon} */}

              <InteractiveIcon
                key={resolvedTheme}
                iconUrl={link.urlIcon}
                animationState={link.iconState}
                animationHover={link.iconHover}
                sizeIcon={24}
                label={!isBottom && index == 0 ? "" : link.name}
                colors={`${
                  resolvedTheme === "dark"
                    ? "primary:#ff9d00,secondary:#ff9d00"
                    : "primary:#ff6900,secondary:#ff6900"
                }`}
                classNameContainer={clsx("flex items-center cursor-pointer", {
                  "text-neutral-200": resolvedTheme === "dark",
                  "text-neutral-700": resolvedTheme === "light",
                  "flex-col ": isBottom,
                })}
                classNameLabel={clsx({
                  "ml-2": link.name !== "" && !isBottom && index !== 0,
                  "max-[500px]:hidden": isBottom,
                })}
              />
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
          <InteractiveIcon
            key={resolvedTheme}
            iconUrl="https://cdn.lordicon.com/yodwgokk.json"
            animationState="in-reveal"
            animationHover="hover-pinch"
            sizeIcon={24}
            label={!isBottom ? "" : "Dark"}
            colors={`${
              resolvedTheme === "dark"
                ? "primary:#ff9d00,secondary:#ff9d00"
                : "primary:#ff6900,secondary:#ff6900"
            }`}
            classNameContainer={clsx("flex items-center cursor-pointer", {
              "flex-col": isBottom,
            })}
            classNameLabel={clsx({
              "max-[500px]:hidden": isBottom,
            })}
          />
        ) : (
          <InteractiveIcon
            key={resolvedTheme}
            iconUrl="https://cdn.lordicon.com/iwjzoila.json"
            animationState="in-reveal"
            animationHover="hover-pinch"
            sizeIcon={24}
            label={!isBottom ? "" : "Light"}
            colors={`${
              resolvedTheme === "dark"
                ? "primary:#ff9d00,secondary:#ff9d00"
                : "primary:#ff6900,secondary:#ff6900"
            }`}
            classNameContainer={clsx("flex items-center cursor-pointer", {
              "flex-col": isBottom,
            })}
            classNameLabel={clsx({
              "max-[500px]:hidden": isBottom,
            })}
          />
        )}
      </button>
    </div>
  );
};

export default NavLink;
