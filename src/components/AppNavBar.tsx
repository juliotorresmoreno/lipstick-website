"use client";

import Link from "next/link";
import { Navbar as FBNavbar } from "flowbite-react";
import logoSrc from "@/assets/logo.jpeg";
import Image from "next/image";

export function AppNavBar() {
  return (
    <FBNavbar fluid rounded>
      <FBNavbar.Brand as={Link} href="/app">
        <img
          style={{ width: "2rem", height: "2rem" }}
          src={"/logo.jpeg"}
          className="rounded-full mr-2"
          alt="Logo"
        />
        <span className="self-center whitespace-nowrap font-extrabold text-default text-lg">
          Lipsitick
        </span>
      </FBNavbar.Brand>
      <FBNavbar.Toggle />
      <FBNavbar.Collapse className="font-extrabold text-default">
        <FBNavbar.Link
          className="font-extrabold text-lg"
          href="/logout"
          as={Link}
        >
          Log out
        </FBNavbar.Link>
      </FBNavbar.Collapse>
    </FBNavbar>
  );
}
