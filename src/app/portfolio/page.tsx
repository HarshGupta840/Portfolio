import React from "react";
import portfolio from "../../../public/assets/svgs/portfolio-section.svg";
import Image from "next/image";

type Props = {};

const Portfolio = ({}: Props) => {
  return (
    <>
      <div className="absolute top-0 right-0 opacity-20 w-full h-full">
        <Image src={portfolio} alt="svg" className="h-full w-full" />
      </div>
      <section className="relative"></section>
    </>
  );
};

export default Portfolio;
