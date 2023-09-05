"use client";
import React, { useRef, useEffect } from "react";
import portfolio from "../../../public/assets/svgs/portfolio-section.svg";
import project1 from "../../../public/assets/projects/project1.png";
import project2 from "../../../public/assets/projects/project2.png";
import project3 from "../../../public/assets/projects/project3.png";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import Image from "next/image";
import { gsap, Power3, Power4 } from "gsap";
import { CSSPlugin, ScrollTrigger } from "gsap/all";

type Props = {};

const projects = [
  {
    img: project1,
    name: "Portfolio website",
    desc: "My portfolio website, showcasing my journey and skills!",
  },
  {
    img: project2,
    name: "School Website",
    desc: "This freelance project involved a collaborative team of three, where I contributed as a full-stack developer.",
  },
  {
    img: project3,
    name: "E-cell website",
    desc: "I co-developed our Entrepreneurship Cell Club website, showcasing teamwork and user-friendly design.",
  },
];

const Portfolio = ({}: Props) => {
  gsap.registerPlugin(CSSPlugin);
  let proHead = useRef(null);
  let ref = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        delay: 1,
        opacity: 1.5,
        stagger: 0.75,
      }
    );
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="fixed top-0 right-0 opacity-20 w-full h-full">
        <Image src={portfolio} alt="svg" className="h-full w-full" />
      </div>
      <section className="relative ">
        <h1 className="text-first-color text-[25px] md:text-[45px] lg:text-h1 font-bold mt-[6rem] mb-[2rem] text-center">
          Portfolio
        </h1>
        <div
          ref={proHead}
          className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 p-4 md:p-0 gap-10 md:gap-6 xl:gap-6 :px-1 md:px-5 items-start mt-2 md:mt-[10rem] mb-[4rem] h-auto"
        >
          {projects.map((elem: any, index: number) => {
            return (
              <div
                className="box-shadow flex justify-center items-center"
                key={index}
                ref={(element) => {
                  ref.current[index] = element;
                }}
              >
                <Block data={elem} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

const Block = ({ data }: { data: any }) => {
  return (
    <div className="border-[2px]  relative border-solid box-shadow border-first-color md:my-4 group  rounded-md  bg-black/70 hover:bg-black transition-all ease-linear duration-200  cursor-pointer h-[360px]   my-4 md:h-[360px]  lg:w-[490px] lg:h-[] xl:w-[400px] xl:h-[358px]  2xl:w-[550px] 2xl:h-[370px] mx-auto">
      <Image
        src={data?.img}
        alt={data?.img}
        className="rounded-lg p-0.5 h-[200px] mb-4 w-full object-cover object-center group-hover:blur-sm transition-all ease-linear duration-200 "
      />
      <div className="px-2.5 pt-0.5 relative">
        <h1 className="xl:text-2xl md:text-xl text-base mb-2 font-bold ">
          {data?.name}
        </h1>
        <p className="font-semibold opacity-90 text-white">{data?.title}</p>
        <p className="text-white text-[14px] md:text-[15px] lg:text-[16px]">
          {data.desc}
        </p>
        <div className="flex items-center mt-1.5 flex-wrap mr-12"></div>
      </div>
      <div className="flex justify-end mb-2 absolute bottom-2 right-2">
        <div>
          {data ? (
            <button className="box-shadow px-2 py-1.5 rounded-md mx-2 ">
              <AiFillGithub size={30} color="white" />
            </button>
          ) : null}
          {data ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(data?.url);
              }}
              className=" px-2 py-1.5 rounded-md mx-2 "
            >
              <AiOutlineLink size={30} color="white" />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
