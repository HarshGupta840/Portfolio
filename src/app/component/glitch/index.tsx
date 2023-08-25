"use client";
import React, { useRef, useEffect } from "react";
import gsap, { Power4 } from "gsap";

type Props = {};

const Glitch = ({}: Props) => {
  let logo_1 = useRef(null);
  const timeline = gsap.timeline();
  useEffect(() => {
    console.log("glitch called");
    timeline
      .to(logo_1.current, {
        duration: 1,
        // scale: 19,
        transition: Power4.easeInOut,
        delay: 2,
      })
      .to(
        logo_1.current,
        {
          opacity: 0,
          transition: Power4.easeInOut,
          duration: 0.5,
        },
        "-=0.4"
      );
  });
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full bg-border-color overflow-hidden z-[10000]">
        <h1
          ref={logo_1}
          className="stroke animate-pulse text-[35px] md:text-[70px] xl:text-[100px]"
        >
          DEVELOPER HARSH
        </h1>
      </div>
    </>
  );
};

export default Glitch;
