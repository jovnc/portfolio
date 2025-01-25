"use client";
import { Package2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ModeToggle } from "../dark-mode/dark-mode-toggle";

function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = document.getElementById(targetId!);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex flex-row items-center gap-5 justify-between">
      <div className="flex flex-row items-center gap-5">
        <Link
          href="#"
          className={`${
            pathname === "/"
              ? "text-primaryfont-bold underline"
              : "text-foreground"
          } transition-colors hover:text-foreground`}
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Jovan</span>
        </Link>
        <Link
          href="/"
          className={`${
            pathname === "/"
              ? "text-primary font-bold underline"
              : "text-foreground"
          } transition-colors hover:text-foreground hover:font-bold`}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={`${
            pathname === "/projects"
              ? "text-primary font-bold underline"
              : "text-foreground"
          } transition-colors hover:text-foreground hover:font-bold`}
        >
          Projects
        </Link>
        {/* <Link
          href="/work"
          className={`${
            pathname === "/work"
              ? "text-primary font-bold underline"
              : "text-foreground"
          } transition-colors hover:text-foreground hover:font-bold`}
        >
          Work
        </Link> */}
        {/* {isHome && (
          <a
            href="#contact"
            onClick={handleScroll}
            className={`text-foreground transition-colors hover:text-foreground hover:font-bold`}
          >
            Contact
          </a>
        )} */}
      </div>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default NavBar;
