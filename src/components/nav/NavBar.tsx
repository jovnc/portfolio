"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row items-center gap-5 justify-between">
      <div className="flex flex-row items-center gap-5">
        <Link
          href="/"
          className={`${
            pathname === "/" ? "text-primary font-bold" : "text-foreground"
          } transition-colors hover:text-foreground hover:font-bold`}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={`${
            pathname === "/projects"
              ? "text-primary font-bold"
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
    </nav>
  );
}

export default NavBar;
