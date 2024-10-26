"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    menuItems: [
      {
        icon: (
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="4"
              y="4"
              width="6"
              height="6"
              rx="1"
              stroke="#33363F"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="4"
              y="14"
              width="6"
              height="6"
              rx="1"
              stroke="#33363F"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="14"
              y="14"
              width="6"
              height="6"
              rx="1"
              stroke="#33363F"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="14"
              y="4"
              width="6"
              height="6"
              rx="1"
              stroke="#33363F"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </svg>
        ),
        label: "Dashboard",
        route: "/",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="9" r="4" fill="#33363F" />
            <circle cx="17" cy="9" r="3" fill="#33363F" />
            <circle cx="7" cy="9" r="3" fill="#33363F" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.5685 18H19.895C20.4867 18 20.9403 17.4901 20.7966 16.9162C20.4284 15.4458 19.448 13 17 13C16.114 13 15.4201 13.3205 14.8781 13.7991C16.3858 14.7773 17.1654 16.4902 17.5685 18Z"
              fill="#33363F"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.12197 13.7991C8.57989 13.3205 7.88609 13 7 13C4.55208 13 3.57166 15.4458 3.20343 16.9162C3.05971 17.4901 3.51335 18 4.10498 18H6.43155C6.83464 16.4902 7.61422 14.7773 9.12197 13.7991Z"
              fill="#33363F"
            />
            <path
              d="M12 14C15.7087 14 16.6665 17.301 16.9139 19.0061C16.9932 19.5526 16.5523 20 16 20H8C7.44772 20 7.00684 19.5526 7.08614 19.0061C7.33351 17.301 8.29134 14 12 14Z"
              fill="#33363F"
            />
          </svg>
        ),
        label: "Users",
        route: "/users",
      },
      {
        icon: (
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 35 35"
            fill="none"
          >
            <path
              d="M17.5 2.91663L22.0062 12.0458L32.0833 13.5187L24.7917 20.6208L26.5125 30.6541L17.5 25.9145L8.48749 30.6541L10.2083 20.6208L2.91666 13.5187L12.9937 12.0458L17.5 2.91663Z"
              stroke=""
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ),
        label: "Farms",
        route: "/farms",
      },
      {
        icon: (
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 35 35"
            fill="none"
          >
            <path
              d="M17.5 2.91663L22.0062 12.0458L32.0833 13.5187L24.7917 20.6208L26.5125 30.6541L17.5 25.9145L8.48749 30.6541L10.2083 20.6208L2.91666 13.5187L12.9937 12.0458L17.5 2.91663Z"
              stroke=""
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ),
        label: "Produce",
        route: "/produce",
      },
      {
        icon: (
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 31 31"
            fill=""
          >
            <path
              d="M19.6282 7.6615H22.6801L22.6276 5.8025H20.0477L22.4724 0.791286L19.7292 0.561741L17.3198 2.40861L18.1232 0.320071L15.3114 0L14.3892 2.60987L12.8737 0.589221L8.70483 0.444543L11.4633 5.80331L8.97316 5.72329V7.66069H11.3728C6.25506 10.6561 2.56787 18.4857 2.56787 22.7153C2.56787 28.0175 8.35809 31 15.4997 31C22.6413 31 28.4315 28.0175 28.4315 22.7153C28.4323 18.4857 24.7459 10.6569 19.6282 7.6615ZM16.5811 25.2589V27.0945H14.8167V25.385C13.6108 25.3325 12.4405 25.0059 11.7567 24.6115L12.2966 22.5068C13.0523 22.9214 14.1152 23.2981 15.2847 23.2981C16.3104 23.2981 17.0127 22.902 17.0127 22.1835C17.0127 21.4973 16.4372 21.0649 15.1053 20.6163C13.1784 19.9689 11.865 19.0677 11.865 17.3234C11.865 15.7392 12.9812 14.4961 14.9073 14.1195V12.4092H16.6716V13.9934C17.8767 14.0484 18.6882 14.2981 19.2814 14.5867L18.7593 16.6211C18.2913 16.4238 17.4629 16.0084 16.1673 16.0084C14.997 16.0084 14.6187 16.5119 14.6187 17.0155C14.6187 17.6104 15.2491 17.9878 16.7791 18.5641C18.9202 19.3223 19.785 20.31 19.785 21.9313C19.7858 23.5309 18.651 24.8993 16.5811 25.2589Z"
              fill=""
            />
          </svg>
        ),
        label: "Orders",
        route: "/orders",
      },

      {
        icon: (
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="19"
            viewBox="0 0 26 19"
            fill="none"
          >
            <path
              d="M19.8333 16.9167C19.3692 16.9167 18.9241 16.7323 18.5959 16.4041C18.2677 16.0759 18.0833 15.6308 18.0833 15.1667C18.0833 14.7025 18.2677 14.2574 18.5959 13.9292C18.9241 13.601 19.3692 13.4167 19.8333 13.4167C20.2975 13.4167 20.7426 13.601 21.0708 13.9292C21.399 14.2574 21.5833 14.7025 21.5833 15.1667C21.5833 15.6308 21.399 16.0759 21.0708 16.4041C20.7426 16.7323 20.2975 16.9167 19.8333 16.9167ZM21.5833 6.41667L23.87 9.33333H18.6667V6.41667H21.5833ZM5.83333 16.9167C5.3692 16.9167 4.92408 16.7323 4.5959 16.4041C4.26771 16.0759 4.08333 15.6308 4.08333 15.1667C4.08333 14.7025 4.26771 14.2574 4.5959 13.9292C4.92408 13.601 5.3692 13.4167 5.83333 13.4167C6.29746 13.4167 6.74258 13.601 7.07077 13.9292C7.39896 14.2574 7.58333 14.7025 7.58333 15.1667C7.58333 15.6308 7.39896 16.0759 7.07077 16.4041C6.74258 16.7323 6.29746 16.9167 5.83333 16.9167ZM22.1667 4.66667H18.6667V0H2.33333C1.03833 0 0 1.03833 0 2.33333V15.1667H2.33333C2.33333 16.0949 2.70208 16.9852 3.35846 17.6415C4.01484 18.2979 4.90508 18.6667 5.83333 18.6667C6.76159 18.6667 7.65183 18.2979 8.30821 17.6415C8.96458 16.9852 9.33333 16.0949 9.33333 15.1667H16.3333C16.3333 16.0949 16.7021 16.9852 17.3585 17.6415C18.0148 18.2979 18.9051 18.6667 19.8333 18.6667C20.7616 18.6667 21.6518 18.2979 22.3082 17.6415C22.9646 16.9852 23.3333 16.0949 23.3333 15.1667H25.6667V9.33333L22.1667 4.66667Z"
              fill="#"
            />
          </svg>
        ),
        label: "Vehicles",
        route: "/vehicles",
      },
      {
        icon: (
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 31 31"
            fill=""
          >
            <path
              d="M19.6282 7.6615H22.6801L22.6276 5.8025H20.0477L22.4724 0.791286L19.7292 0.561741L17.3198 2.40861L18.1232 0.320071L15.3114 0L14.3892 2.60987L12.8737 0.589221L8.70483 0.444543L11.4633 5.80331L8.97316 5.72329V7.66069H11.3728C6.25506 10.6561 2.56787 18.4857 2.56787 22.7153C2.56787 28.0175 8.35809 31 15.4997 31C22.6413 31 28.4315 28.0175 28.4315 22.7153C28.4323 18.4857 24.7459 10.6569 19.6282 7.6615ZM16.5811 25.2589V27.0945H14.8167V25.385C13.6108 25.3325 12.4405 25.0059 11.7567 24.6115L12.2966 22.5068C13.0523 22.9214 14.1152 23.2981 15.2847 23.2981C16.3104 23.2981 17.0127 22.902 17.0127 22.1835C17.0127 21.4973 16.4372 21.0649 15.1053 20.6163C13.1784 19.9689 11.865 19.0677 11.865 17.3234C11.865 15.7392 12.9812 14.4961 14.9073 14.1195V12.4092H16.6716V13.9934C17.8767 14.0484 18.6882 14.2981 19.2814 14.5867L18.7593 16.6211C18.2913 16.4238 17.4629 16.0084 16.1673 16.0084C14.997 16.0084 14.6187 16.5119 14.6187 17.0155C14.6187 17.6104 15.2491 17.9878 16.7791 18.5641C18.9202 19.3223 19.785 20.31 19.785 21.9313C19.7858 23.5309 18.651 24.8993 16.5811 25.2589Z"
              fill=""
            />
          </svg>
        ),
        label: "Transactions",
        route: "/transactions",
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-stroke duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="mx-auto px-6 py-5.5 lg:py-6.5">
          <Link href="/">
            <Image
              width={60}
              height={32}
              src={"/images/logo/useri-logo.svg"}
              alt="Logo"
              priority
            />
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
            <div>
              <ul className="mb-6 flex flex-col gap-1.5">
                {menuGroups[0].menuItems.map((menuItem, menuIndex) => (
                  <SidebarItem
                    key={menuIndex}
                    item={menuItem}
                    pageName={pageName}
                    setPageName={setPageName}
                  />
                ))}
              </ul>
            </div>
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
