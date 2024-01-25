"use client";

import { Sidebar } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiBuoy } from "react-icons/bi";
import {
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

export interface AppSidebarProps {}

export function AppSidebar(props: AppSidebarProps) {
  const path = usePathname();

  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <li>
            <Link
              href="/app/products"
              className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100 group"
            >
              <HiShoppingBag size="1.5rem" />
              <span className="ms-3">Products</span>
            </Link>
          </li>
          <li>
            <Link
              href="/app/inbox"
              className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100 group"
            >
              <HiInbox size="1.5rem" />
              <span className="ms-3">Inbox</span>
            </Link>
          </li>
          <li>
            <Link
              href="/app/users"
              className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100 group"
            >
              <HiUser size="1.5rem" />
              <span className="ms-3 text-md">Users</span>
            </Link>
          </li>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <li>
            <Link
              href="/app/upgrade"
              className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100 group"
            >
              <HiChartPie size="1.5rem" />
              <span className="ms-3 text-md">Upgrade to Pro</span>
            </Link>
          </li>
          <li>
            <Link
              href="/documentation"
              className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100 group"
            >
              <HiViewBoards size="1.5rem" />
              <span className="ms-3 text-md">Documentation</span>
            </Link>
          </li>
          <li>
            <Link
              href="/app/help"
              className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100 group"
            >
              <BiBuoy size="1.5rem" />
              <span className="ms-3 text-md">Help</span>
            </Link>
          </li>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
