"use client";
import React, { useState } from "react";
import { links } from "@/utils/data";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
type Props = {};

const Navbar = ({}: Props) => {
  const [showToggle, setShowToggle] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      <nav className="nav lg:fixed inset-block lg:right-[30px] lg:flex lg:items-center">
        <div
          className={`bg-container-color fixed inset-block ${
            showToggle ? `left-[-100%]` : `left-0`
          } w-[100%] py-[60px] px-[30px]  transition-all ease-in-out duration-200 unset  nav_menu `}
        >
          <ul className="nav_list">
            {links.map((elem: any, index: number) => {
              return (
                <li key={index} className="nav_item lg:my-[20px]">
                  <Link
                    onClick={() => setShowToggle(!showToggle)}
                    href={elem.path}
                    className={`flex items-center gap-x-[24px] border-b-[1px] border-b-border-color py-[14px] text-title-color text-[24px] ${
                      elem.path === pathname
                        ? `lg:!text-white !text-first-color lg:bg-first-color`
                        : `lg:bg-container-color`
                    } lg:p-0 lg:border-b-0  lg:w-[50px] lg:h-[50px] lg:rounded-[50%] lg:relative group nav_link`}
                  >
                    {elem.icon}{" "}
                    <h3
                      className={`font-medium ${
                        elem.path === pathname
                          ? `!text-first-color lg:!text-white`
                          : ``
                      } lg:absolute lg:top-0 lg:right-[14px]  lg:px-[30px] lg:bg-first-color lg:h-[100%] rounded-[30px_0_0_30px] lg:py-[14px]
                       lg:text-base lg:text-white  lg:z-[-1] transition-all duration-[0.3s] ease-linear lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:right-[25px]`}
                    >
                      {elem.name}
                    </h3>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          className="fixed w-[40px] top-[30px] right-[30px] h-[40px]  rounded bg-container-color mb-[5px] py-[12px] px-[10px] cursor-pointer lg:hidden nav__togg"
          onClick={() => setShowToggle(!showToggle)}
        >
          <span
            className={`block w-[20px] h-[2px] rounded-sm bg-title-color mb-[5px] ${
              showToggle ? "" : `rotate-45 translate-x-[4px] translate-y-[6px]`
            } transition-all ease-in-out duration-200`}
          ></span>
          <span
            className={`block w-[20px] h-[2px] rounded-sm bg-title-color mb-[5px] ${
              showToggle ? `` : `hidden`
            }`}
          ></span>
          <span
            className={`block w-[20px] h-[2px] rounded-sm bg-title-color mb-[5px] ${
              showToggle
                ? ``
                : `rotate-[-45deg] translate-x-[3px] translate-y-[0px]`
            } transition-all ease-in-out duration-200`}
          ></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
