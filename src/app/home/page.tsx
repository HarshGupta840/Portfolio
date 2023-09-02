"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import Profile from "../../../public/assets/harsh.jpg";
import svgs from "../../../public/assets/svgs/freekancersvg.svg";
import reactsvgs from "../../../public/assets/svgs/reactsvg.svg";
import nextsvgs from "../../../public/assets/svgs/nextsvg.svg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Balancer from "react-wrap-balancer";
import Text from "../component/textAnimation";
import { PiCoffeeFill } from "react-icons/pi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoRedux } from "react-icons/bi";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { gsap, Power3, Power4 } from "gsap";
import { CSSPlugin, ScrollTrigger } from "gsap/all";

type Props = {};

const HeroSection = ({}: Props) => {
  let text = useRef(null);
  let div = useRef(null);
  let img = useRef(null);
  let p = useRef(null);
  let aboutButton = useRef(null);
  let coffeeButton = useRef(null);
  gsap.registerPlugin(CSSPlugin, ScrollTrigger);
  let tl = gsap.timeline();
  useEffect(() => {
    tl.from(img.current, {
      scale: 4,
      duration: 0.8,
      transition: Power4.easeIn,
    })
      .from(text.current, {
        opacity: 0,
        duration: 0.8,
        transition: Power3.easeInOut,
      })
      .from(p.current, {
        opacity: 0,
        duration: 0.8,
        transition: Power3.easeInOut,
      })
      .from(aboutButton.current, {
        duration: 0.8,
        opacity: 0,
        transition: Power3.easeInOut,
      })
      .from(coffeeButton.current, {
        duration: 0.8,
        opacity: 0,
        transition: Power3.easeInOut,
      });
  }, []);
  return (
    <>
      <section className="w-[100vw] bg-border-color relative">
        {/* svgs */}
        <div className="absolute md:flex justify-center items-center w-[4vw] h-[100vh] hidden">
          <div className="social_info flex flex-col text-center items-center gap-[10px] ">
            <Link
              href={"https://www.linkedin.com/in/harshgupta840"}
              target="_blank"
              replace
              className="social_link  !text-[26px] flex justify-center !text-first-color  h-[45px] w-[45px] !text-white  rounded-[50%] !text-center items-center"
            >
              <FaLinkedin />
            </Link>
            <Link
              href={"https://www.github.com/harshgupta840"}
              target="_blank"
              replace
              className="social_link !text-[26px] flex justify-center !text-first-color  h-[45px] w-[45px]  !text-white  rounded-[50%] !text-center items-center"
            >
              <FaGithub />
            </Link>
            <Link
              href={
                "https://instagram.com/harshgupta080?igshid=ZGUzMzM3NWJiOQ=="
              }
              target="_blank"
              replace
              className="social_link !text-[26px] flex justify-center !text-first-color  h-[45px] w-[45px] !text-white  rounded-[50%] !text-center items-center"
            >
              <FaInstagram />
            </Link>
            <div className="w-[2px] h-24 bg-white text-center items-center"></div>
          </div>
        </div>

        <svg
          // width="300"
          // height="300"
          data-name="corner-bottom-right"
          xmlns="http://www.w3.org/2000/svg"
          data-inlinesvg=".inlineSvgFile-5"
          className="absolute 2xl:bottom-[100px] 2xl:right-[130px] xl:bottom-[90px] xl:right-[86px]  invisible md:visible w-[300px] h-[300px]"
        >
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0" className="gradient1"></stop>
              <stop offset=".5" className="gradient2"></stop>
              <stop offset="1" className="gradient1"></stop>
            </linearGradient>
          </defs>
          <path
            className="fill-first-color"
            d="M292 300H0l20-20h255a5 5 0 0 0 5-5V20l20-20v292a8 8 0 0 1-8 8Z"
          ></path>
        </svg>
        <section className="hone section justify-evenly flex flex-col md:flex-row items-center w-[100vw]  relative h-[100vh] md:w-[90vw] mx-auto md:px-[15px] lg:p-[10px] xl:p-[40px]">
          {/* <div className="color_block hidden md:inline-block absolute bg-first-color w-[70%] h-[70%] "> */}
          <div className="h-[220px] mt-8 md:mt-10 md:h-[550px] md:w-[500px] flex flex-col justify-center items-center rounded-[30px] bg-transparent md:bg-first-color">
            <Image
              ref={img}
              // quality={100}
              // height={50}
              // width={50}
              src={Profile}
              alt="home_images"
              className="h-[220px] w-[220px] md:h-[500px] md:w-[450px] object-cover rounded-[50%] md:rounded-[30px] shadow-[0_0_8px_hsla(0_0%_0%_0.3)] z-[1]"
            />
            <div className="social_info flex gap-[20px] mt-6 md:hidden">
              <Link
                href={"https://www.linkedin.com/in/harshgupta840"}
                target="_blank"
                replace
                className="social_link  !text-[26px] flex justify-center !text-first-color bg-container-color h-[45px] w-[45px] transition-all duration-[0.3s] ease-linear hover:!text-white hover:!bg-first-color rounded-[50%] !text-center items-center"
              >
                <FaLinkedin />
              </Link>
              <Link
                href={"https://www.github.com/harshgupta840"}
                target="_blank"
                replace
                className="social_link !text-[26px] flex justify-center !text-first-color bg-container-color h-[45px] w-[45px] transition-all duration-[0.3s] ease-linear hover:!text-white hover:!bg-first-color rounded-[50%] !text-center items-center"
              >
                <FaGithub />
              </Link>
              <Link
                href={
                  "https://instagram.com/harshgupta080?igshid=ZGUzMzM3NWJiOQ=="
                }
                target="_blank"
                replace
                className="social_link !text-[26px] flex justify-center !text-first-color bg-container-color h-[45px] w-[45px] transition-all duration-[0.3s] ease-linear hover:!text-white hover:!bg-first-color rounded-[50%] !text-center items-center"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
          {/* </div> */}
          <div className="home__content flex flex-col text-center md:text-left mt-[-1rem]">
            <div className="home__data lg:max-w-[550px] xl:max-w-[650px] 2xl:max-w-[850px] lg:mx-auto   md:p-[15px]">
              <h1 className="home__title md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-[26%] md:before:w-[48px] md:before:h-[5px] rounded-lg before:bg-first-color relative sm:text[26px] md:text-[34px] lg:text-[37px] xl:text-[48px] md:pl-[65px]">
                <span
                  ref={text}
                  className="block text-first-color text-[29px] sm:text-[30px] md:text-[40px] lg:text-[46px] 2xl:text-h1"
                >
                  I am Harsh Gupta.
                </span>
                <Text />
              </h1>
              <p
                ref={p}
                className="hero__description leading-loose mx-32px my-[16px]  md:mb-[40px] text-title-color text-[15px] md:text-[15px] xl:text[19px] 2xl:text-[22px]"
              >
                <Balancer>
                  Experienced MERN Stack and Next.js developer with 1 years of
                  experience. Skilled in building robust web applications,
                  utilizing MongoDB, Express.js, React, and Node.js. Proficient
                  in front-end development, responsive design, and API
                  integration. Committed to delivering high-quality code and
                  exceeding client expectations.
                </Balancer>
              </p>
              <div className="flex justify-between sm:justify-evenly md:justify-between flex-row items-center">
                <Link
                  ref={aboutButton}
                  href={"/about"}
                  className="inline-block text-title-color border-[1px] border-solid border-first-color p-[12px_62px_12px_23px] sm:p-[11px_66px_12px_30px] md:p-[12px_66px_14px_32px] lg:p-[14px_67px_14px_33px] xl:p-[15px_70px_15px_35px] rounded-[35px] font-medium relative mb-10px  sm:text-[14px] md:text-[15px] xl:text-[16px] text-[11px]"
                >
                  More About Me
                  <span className="button__icon bg-first-color !text-white absolute right-0 w-[44px] md:w-[48px] sm:w-[55px] rounded-[50%] top-[0px] bottom-[0px] text-center text-lg flex justify-center items-center">
                    <FaArrowRight className="" />
                  </span>
                </Link>
                <Link href={"#"} ref={coffeeButton}>
                  <button className="text-title-color border-[1px] border-solid border-first-color w-[155px] sm:w-[190px] sm:text-[14px] md:w-[200px] lg:w-[220px] py-3  rounded-[35px] font-medium relative mb-10px bg-first-color hover:bg-transparent transition-all duration-[0.3s] ease-linear items-center text-center flex justify-center gap-2 md:text-[15px] xl:text-[16px] text-[12px] opacity-[1]">
                    <span>Buy Me a Coffee </span>
                    <PiCoffeeFill />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* <section className="mt-16 container mx-auto ">
        <div className=" flex flex-col md:flex-row justify-around mb-[10rem]">
          <div className="lefts w-[40%] border-first-color border-[2px] rounded-[3px] flex justify-center items-center">
            <Image
              src={svgs}
              alt="freelancer"
              className="w-[500px] h-[350px]"
            />
          </div>
          <div className="details w-[40%] flex flex-col justify-center">
            <h1 className="text-first-color text-[40px]">Freelancer</h1>
            <p className="text-title-color text-[19px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              assumenda cumque a. Atque fuga, aspernatur ab, nihil ipsa enim
              similique amet iusto nostrum quidem explicabo, laboriosam sapiente
              dolorum voluptatibus pariatur.Z
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around mb-[10rem]">
          <div className="w-[40%] flex flex-col justify-center">
            <h1 className="text-first-color text-[40px]">React js</h1>
            <p className="text-title-color text-[19px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              assumenda cumque a. Atque fuga, aspernatur ab, nihil ipsa enim
              similique amet iusto nostrum quidem explicabo, laboriosam sapiente
              dolorum voluptatibus pariatur.Z
            </p>
          </div>
          <div className=" w-[40%] border-first-color border-[2px] rounded-[3px] flex justify-center items-center">
            <Image
              src={reactsvgs}
              alt="react developer"
              className="w-[500px] h-[350px] p-5"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around mb-[10rem]">
          <div className="w-[40%] border-first-color border-[2px] rounded-[3px] flex justify-center items-center">
            <Image
              src={nextsvgs}
              alt="freelancer"
              className="w-[500px] h-[350px]"
            />
          </div>
          <div className="w-[40%] flex flex-col justify-center">
            <h1 className="text-first-color text-[40px]">Next js</h1>
            <p className="text-title-color text-[19px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              assumenda cumque a. Atque fuga, aspernatur ab, nihil ipsa enim
              similique amet iusto nostrum quidem explicabo, laboriosam sapiente
              dolorum voluptatibus pariatur.Z
            </p>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default HeroSection;
