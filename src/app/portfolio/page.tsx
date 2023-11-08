"use client";
import React, { useRef, useEffect, useState } from "react";
import portfolio from "../../../public/assets/svgs/portfolio-section.svg";
import project1 from "../../../public/assets/projects/project1.png";
import project2 from "../../../public/assets/projects/project2.png";
import project3 from "../../../public/assets/projects/project3.png";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import Image, { StaticImageData } from "next/image";
import { gsap, Power3, Power4 } from "gsap";
import { CSSPlugin, ScrollTrigger } from "gsap/all";
import { Interface } from "readline";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {};
interface Project {
  name: string;
  short_desc: string;
  desc: string;
  link: string;
  github: string | null;
  technology: string[];
  img: StaticImport;
}
const projects: Project[] = [
  {
    img: project1,
    name: "Portfolio website",
    short_desc: "My portfolio website, showcasing my journey and skills!",
    desc: "This is my personal portfolio to showcase my skills and overall journey. As a Full Stack Developer, I employed Next.js for fast loading, TypeScript for code quality, Tailwind CSS for responsive design, and Git for efficient code management. This project showcases my skills and creativity in web development, offering visitors an engaging and user-friendly experience.",
    link: "",
    github: "https://github.com/HarshGupta840/Portfolio",
    technology: ["Next.js", "Tailwind CSS", "Github", "TypeScript", "gsap"],
  },
  {
    img: project2,
    name: "School Website",
    short_desc:
      "As a Front-end Developer on this project, contributing to develop the project's user interface.",
    desc: `As a Front-end Developer for a school website project, I played a pivotal role in crafting an intuitive and responsive user interface. My responsibilities included ensuring data security, optimizing performance, implementing SEO best practices, and keeping the website up-to-date with educational trends. I utilized Next.js for speed and seamless user experiences, TypeScript for code quality, Tailwind CSS for efficient design, and Git for effective collaboration.`,
    link: "https://pioneerpublicschooldewas.org/",
    github: null,
    technology: ["Next.js", "Tailwind CSS", "Github", "TypeScript"],
  },
  {
    img: project3,
    name: "E-cell website",
    short_desc:
      "I co-developed our Entrepreneurship Cell Club website, showcasing teamwork and user-friendly design.",
    desc: `As a Full Stack Developer, I spearheaded the development of the College Entrepreneurship Club Website, crafting both the front-end user interface and backend for a seamless user experience. My responsibilities included data security, performance optimization, SEO implementation, and continuous updates to align with educational trends. I harnessed Next.js for fast loading, TypeScript for code quality, Tailwind CSS for responsive design, gsap for animation and Git for streamlined code management and collaboration.`,
    link: "https://e-cell-sati-git-admin-harshgupta840.vercel.app/",
    github: null,
    technology: [
      "Next.js",
      "Tailwind CSS",
      "Github",
      "TypeScript",
      "gsap",
      "spline",
    ],
  },
];

const Portfolio = ({}: Props) => {
  const [activeModal, setActiveModal] = useState<null | string>(null);
  const [modalData, setModalData] = useState<null | Project>();
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
      <section className="relative ">
        <h1 className="text-first-color text-[25px] md:text-[45px] lg:text-h1 font-bold mt-[6rem] mb-[2rem] text-center">
          Portfolio
        </h1>
        <div
          ref={proHead}
          className="grid grid-cols-1 parent transition-all duration-100  ease-linear  md:grid-cols-2 xl:grid-cols-3 p-4 md:p-0 gap-10 md:gap-6 xl:gap-6 :px-1 md:px-5 items-start mt-2  mb-[4rem] h-auto"
        >
          {projects.map((elem: any, index: number) => {
            return (
              <div
                className=" flex justify-center items-center"
                onClick={() => {
                  setModalData(elem);
                  setActiveModal("open");
                }}
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
      {activeModal && (
        <div className="fixed top-0 left-0 flex justify-center items-center h-full w-full p-4 overflow-x-hidden overflow-y-hidden  z-[1000000] bg-[#00000099]">
          <div className="relative bg-black border-first-color border border-solid shadow-portfolio p-2 rounded-lg w-[95%] md:w-[650px] min-h-[650px] h-auto">
            {/* <!-- Modal content --> */}
            <div className="relative ">
              {/* <!-- Modal header --> */}
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-first-color">
                  Portfolio
                </h3>
                <button
                  onClick={() => setActiveModal(null)}
                  className="text-white bg-transparent rounded-[50%] hover:bg-[#7525bf1b] r text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                  data-modal-hide="defaultModal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-3 flex flex-col gap-3">
                <Image
                  src={modalData?.img as StaticImport}
                  alt={"image"}
                  height={250}
                  width={500}
                  quality={100}
                  className="rounded-lg  p-0.5 h-[220px] mb-4 w-full object-fill object-center  "
                />
                <div className="flex flex-col gap-1">
                  <p className="text-gray-400 text-[20px]">Description</p>
                  <p className="text-white">{modalData?.desc}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-gray-400 text-[20px]">Technology Used</p>
                  <div className="grid grid-cols-2">
                    {modalData?.technology.map(
                      (elem: string, index: number) => {
                        return (
                          <p className="text-white" key={index}>
                            {`${index + 1}. ${elem}`}
                          </p>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Block = ({ data }: { data: any }) => {
  return (
    <div className="border-[2px] card  relative border-solid box-shadow border-first-color md:my-4   rounded-md  bg-black/70   cursor-pointer h-[360px]   my-4 md:h-[360px]  lg:w-[490px] lg:h-[] xl:w-[400px] xl:h-[358px]  2xl:w-[550px] 2xl:h-[370px] mx-auto">
      <Image
        src={data?.img}
        alt={data?.img}
        className="rounded-lg  p-0.5 h-[200px] mb-4 w-full object-fill object-center  "
      />
      <div className="px-2.5 pt-0.5 relative">
        <h1 className="xl:text-2xl md:text-xl text-base mb-2 font-bold ">
          {data?.name}
        </h1>
        <p className="font-semibold opacity-90 text-white">{data?.title}</p>
        <p className="text-white text-[14px] md:text-[15px] lg:text-[16px]">
          {data.short_desc}
        </p>
        <div className="flex items-center mt-1.5 flex-wrap mr-12"></div>
      </div>
      <div className="flex justify-end mb-2 absolute bottom-2 right-2">
        <div>
          {data.github ? (
            <button className="box-shadow px-2 py-1.5 rounded-md mx-2 ">
              <AiFillGithub size={30} color="white" />
            </button>
          ) : null}
          {data ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(data?.link);
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
