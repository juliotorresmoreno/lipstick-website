"use client";

import Link from "next/link";
import { Navbar as FBNavbar } from "flowbite-react";
import logoSrc from "@/assets/logo.jpeg";
import Image from "next/image";

export function NavBar() {
  return (
    <FBNavbar fluid rounded>
      <FBNavbar.Brand as={Link} href="/">
        <Image
          style={{ width: "2rem", height: "2rem" }}
          src={logoSrc}
          className="rounded-full mr-2"
          alt="Logo"
        />
        <span className="self-center whitespace-nowrap font-extrabold text-default text-lg">
          Lipsitick
        </span>
      </FBNavbar.Brand>
      <FBNavbar.Toggle />
      <FBNavbar.Collapse className="font-extrabold text-default">
        <FBNavbar.Link className="font-extrabold text-lg" href="#about">
          About
        </FBNavbar.Link>
        <FBNavbar.Link className="font-extrabold text-lg" href="#features">
          Features
        </FBNavbar.Link>
        <FBNavbar.Link className="font-extrabold text-lg" href="#pricing">
          Pricing
        </FBNavbar.Link>
        <FBNavbar.Link
          className="font-extrabold text-lg"
          href="/sign-in"
          as={Link}
        >
          Sign in
        </FBNavbar.Link>
        <FBNavbar.Link
          className="font-extrabold text-lg"
          href="/sign-up"
          as={Link}
        >
          Sign up
        </FBNavbar.Link>
      </FBNavbar.Collapse>
    </FBNavbar>
  );
}
