"use client";

import Link from "next/link";
import { Navbar as FBNavbar } from "flowbite-react";
import Image from "next/image";
import { connect } from "react-redux";
import { RootState } from "@/lib/reducers";
import { Config } from "@/types/models";

interface _AppNavBarProps extends Config {}

function _AppNavBar(props: _AppNavBarProps) {
  return (
    <FBNavbar fluid rounded>
      <FBNavbar.Brand as={Link} href="/app">
        <img
          style={{ width: "2rem", height: "2rem" }}
          src={`${props.baseUrl}/logo.jpeg`}
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

const mapToProps = (state: RootState) => state.app;

export const AppNavBar: React.FC = connect(mapToProps)(_AppNavBar);
