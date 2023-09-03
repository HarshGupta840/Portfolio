"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
type Props = {};

const Text = ({}: Props) => {
  return (
    <>
      <TypeAnimation
        sequence={[
          1000,
          // Same substring at the start will only be typed out once, initially
          "Web Developer",
          // 3000, // wait 1s before replacing "Mice" with "Hamsters"
          // "MERN Stack Developer",
          3000,
          "Front-end Developer",
          3000,
          "Full Stack Developer",
          3000,
          "Freelancer",
          3000,
        ]}
        wrapper="span"
        speed={50}
        style={{ display: "inline-block" }}
        repeat={Infinity}
      />
    </>
  );
};

export default Text;
