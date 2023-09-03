"use client";
import React from "react";
import styles from "./styles.module.css";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

type Props = {};

const Footer = ({}: Props) => {
  const BackToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <section className="h-[300px]  bg-body-color  grid grid-rows-[10fr_2fr] border-t-[2px] border-solid border-first-color ">
        <section className="container mx-auto flex justify-between items-center">
          <div className="flex items-center justify-center gap-1 w-[80%] mx-auto  md:m-[40px_auto] ">
            <Link
              href={"https://www.github.com/harshgupta840"}
              target="_github"
              className="w-[80px] h-[80px]  md:w-[160px] z-10 hover:text-first-color transition-all  ease-linear xl:w-[200px] md:h-auto flex justify-center items-center text-[#585858]"
            >
              <FaGithub className="w-[50px] md:w-[50px] lg:w-[70px] h-auto" />
            </Link>
            <div className="invisible md:visible w-[2px]  h-[53px] bg-[#f6f6f61a] rotate-[20deg] "></div>
            <Link
              href={"https://www.linkedin.com/in/harshgupta840"}
              target="_Linkedin"
              className="w-[80px] h-[80px] md:w-[160px] z-10 hover:text-first-color transition-all  ease-linear xl:w-[200px] md:h-auto flex justify-center items-center text-[#585858]"
            >
              <FaLinkedin className="w-[50px] md:w-[50px] lg:w-[70px] h-auto" />
            </Link>
            <div className="invisible md:visible w-[2px] h-[53px] bg-[#f6f6f61a] rotate-[20deg] "></div>
            <Link
              href={
                "https://instagram.com/harshgupta080?igshid=ZGUzMzM3NWJiOQ=="
              }
              target="_insta"
              className="w-[80px] h-[80px] md:w-[160px] z-10 hover:text-first-color transition-all  ease-linear xl:w-[200px] md:h-auto flex justify-center items-center text-[#585858]"
            >
              <FaInstagram className="w-[50px] md:w-[50px] lg:w-[70px] h-auto" />
            </Link>
            <div className="invisible md:visible w-[2px] h-[53px] bg-[#f6f6f61a] rotate-[20deg] "></div>
            <Link
              href={"https://twitter.com/Harsh840Gupta"}
              target="_witter"
              className="w-[80px] z-10 h-[80px] md:w-[160px] hover:text-first-color transition-all  ease-linear xl:w-[200px] md:h-auto flex justify-center items-center text-[#585858]"
            >
              <FaTwitter className="w-[50px] md:w-[50px] lg:w-[70px] h-auto" />
            </Link>
          </div>
        </section>
        <section className="container mx-auto flex gap-10 md:gap-0 flex-col-reverse md:flex-row justify-between items-cente pb-[4rem] md:pb-2r">
          <div className="">
            <p className="text-white text-[14px] md:font-[16px] text-center">
              2023. Harsh Gupta. All Rights Reserved.
            </p>
          </div>
          <div className="flex gap-12 justify-evenly items-center">
            <button
              onClick={BackToTop}
              className="bg-transparent text-white text-[14px] md:font-[16px] z-10 hover:text-first-color transition-all ease-in-out"
            >
              Back to top
            </button>
            <button className="bg-transparent text-white text-[14px] z-10 md:font-[16px] hover:text-first-color transition-all ease-in-out">
              projects
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Footer;
