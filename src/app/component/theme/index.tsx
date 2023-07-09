"use client";
import React, { useState, useEffect } from "react";
import { themes } from "@/utils/data";
import { FaCog } from "react-icons/fa";
import Image from "next/image";

type Props = {};

const Theme = ({}: Props) => {
  const [toggler, setToggler] = useState(false);
  const [color, SetColor] = useState("hsl(271, 76%, 53%)");
  useEffect(() => {
    document.documentElement.style.setProperty(`--first-color`, color);
  }, [color]);
  return (
    <>
      <div>
        <div
          className={`tyle__switcher text-[hsl(0_0_40%)] fixed left-0 top-[10%] ${
            toggler ? `translate-x-[0]` : `translate-x-[-100%]`
          } transition-all duration-[0.3s] ease-linear translate-x-[-100%] bg-white w-[220px] p-[15px] z-[10] shadow-[0_0%_80%_hsl(0_0_80%)] rounded-[0_5-x_5px_0]`}
        >
          <div
            onClick={() => setToggler(!toggler)}
            className={`stylle__switcher__toggler transition-all duration-[0.3s] ease-linear rounded-[0_5px_5px_0] fixed  h-[50px] w-[50px] text-lg cursor-pointer flex justify-center bg-white items-center shadow-[0_0_2px_hsl(0_0%_80%)] ${
              toggler ? `left-[-100%]` : `left-[100%]`
            } top-0`}
          >
            <FaCog />
          </div>
          <h3 className="style__switcher--title text-sm font-semibold border-b-[1px] border-b-solid border-b-[hsl(0_0_87%] mb-[15px] pb-[5px]">
            Change Theme
          </h3>
          <div className="style_switcher__item grid grid-cols-5 gap-x-1 gap-y-2">
            {themes.map((item: any, index: number) => {
              //   return <Themeitem {...item} key={index} />;
              return (
                <Image
                  src={item.img}
                  alt="image"
                  className="theme_image cursor-pointer"
                  key={index}
                  onClick={() => SetColor(item.color)}
                />
              );
            })}
          </div>
          <div
            onClick={() => setToggler(!toggler)}
            className="style_switcher_close cursor-pointer text-[30px] absolute top-[0] right-[15px]"
          >
            &times;
          </div>
        </div>
      </div>
    </>
  );
};

export default Theme;
