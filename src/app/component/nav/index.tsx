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
      <nav className="nav z-[1] w-[100vw] lg:w-auto bottom-[20px] fixed inset-block lg:right-[5px] xl:right-[30px] flex justify-center  lg:flex-col lg:items-center">
        <div>
          <div className="nav_list flex lg:flex-col">
            {links.map((elem: any, index: number) => {
              return (
                <div
                  key={index}
                  className="nav_item mx-[20px] lg:px-0 lg:my-[20px] "
                >
                  <Link
                    onClick={() => setShowToggle(!showToggle)}
                    href={elem.path}
                    className={`flex items-center gap-x-[24px] border-b-[1px] border-b-border-color py-[14px] text-title-color text-[24px] ${
                      elem.path === pathname
                        ? `!text-white !text-first-color bg-first-color`
                        : `bg-container-color`
                    } p-0 border-b-0  w-[50px] h-[50px] rounded-[50%] relative group nav_link`}
                  >
                    {elem.icon}{" "}
                    <h3
                      className={`font-medium ${
                        elem.path === pathname
                          ? `!text-first-color !text-white`
                          : ``
                      } absolute top-0 right-[14px]  px-[30px] bg-first-color h-[100%] rounded-[30px_0_0_30px] py-[14px]
                       text-base text-white hidden lg:inline-block lg:invisible lg:group-hover:visible z-[-1] transition-all duration-[0.3s] ease-linear opacity-0 group-hover:opacity-100 group-hover:right-[25px]`}
                    >
                      {elem.name}
                    </h3>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
