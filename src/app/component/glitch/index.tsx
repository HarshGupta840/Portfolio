"use client";
import React, { useRef, useEffect } from "react";
import gsap, { Power4 } from "gsap";

type Props = {};

const Glitch = ({}: Props) => {
  let logo_1 = useRef(null);
  const timeline = gsap.timeline();
  useEffect(() => {
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
      <div className="flex justify-center items-center h-screen w-full bg-border-color overflow-hidden">
        <h1 ref={logo_1} className="stroke animate-pulse">
          DEVELOPER HARSH
        </h1>
      </div>
    </>
  );
};

export default Glitch;
