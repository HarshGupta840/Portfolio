"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import Profile from "../../../../public/assets/harsh.jpg";
import Portfolio from "../../../../public/assets/svgs/portfolio.svg";
import developer from "../../../../public/assets/svgs/developer.svg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Balancer from "react-wrap-balancer";
import Text from "../textAnimation";
import { PiCoffeeFill } from "react-icons/pi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoRedux } from "react-icons/bi";
import { Pacific, Poppin } from "@/utils/font";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { gsap, Power3, Power4 } from "gsap";
import { CSSPlugin, ScrollTrigger } from "gsap/all";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

type Props = {};

const HeroSection = ({}: Props) => {
  const testimonial = [
    {
      message: `"I am delighted to recommend Harsh Gupta based on his outstanding internship at Texam. Throughout his tenure, Harsh proved himself to be a responsible and diligent individual. His creative approach to problem-solving brought fresh perspectives to our team, while his self-learning attitude was truly appreciable. Harsh's coding skills were exceptional, consistently delivering high-quality and efficient code. Beyond his technical abilities, Harsh's teamwork and communication made him a pleasure to work with. Without hesitation, I highly endorse Harsh Gupta for any software development role, as his talent and dedication undoubtedly guarantee a successful future career"`,
      name: `- Harsh Singhvi (Software Developer)`,
    },
    {
      message: `"I have worked personally with Harsh for 2 years simultaneously and I must really say that his work is exceptional. I have only seen his skills in the field of Web development using the MERN stack, so I can say for sure that him being a part of anyone's team in the near future is going to be a really great advantage for that team. I wish the really best for him and hope to work together again."`,
      name: `- Sarthak Gour (Graphics/UI/UX designer)`,
    },
    {
      message: `"I have worked personally with Harsh for 2 years simultaneously and I must really say that his work is exceptional. I have only seen his skills in the field of Web development using the MERN stack, so I can say for sure that him being a part of anyone's team in the near future is going to be a really great advantage for that team. I wish the really best for him and hope to work together again."`,
      name: `- Sarthak Gour (Graphics/UI/UX designer)`,
    },
    {
      message: `"I have worked personally with Harsh for 2 years simultaneously and I must really say that his work is exceptional. I have only seen his skills in the field of Web development using the MERN stack, so I can say for sure that him being a part of anyone's team in the near future is going to be a really great advantage for that team. I wish the really best for him and hope to work together again."`,
      name: `- Sarthak Gour (Graphics/UI/UX designer)`,
    },
    {
      message: `"I have worked personally with Harsh for 2 years simultaneously and I must really say that his work is exceptional. I have only seen his skills in the field of Web development using the MERN stack, so I can say for sure that him being a part of anyone's team in the near future is going to be a really great advantage for that team. I wish the really best for him and hope to work together again."`,
      name: `- Sarthak Gour (Graphics/UI/UX designer)`,
    },
    {
      message: `"I have worked personally with Harsh for 2 years simultaneously and I must really say that his work is exceptional. I have only seen his skills in the field of Web development using the MERN stack, so I can say for sure that him being a part of anyone's team in the near future is going to be a really great advantage for that team. I wish the really best for him and hope to work together again."`,
      name: `- Sarthak Gour (Graphics/UI/UX designer)`,
    },
  ];
  const [activeModal, setActiveModal] = useState<null | string>(null);
  const [modalData, setModalData] = useState({
    message: "",
    name: "",
  });
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
      <div className="fixed top-0 right-0 opacity-20 w-full h-full">
        <Image src={Portfolio} alt="svg" className="h-full w-full" />
      </div>
      <section className="max-w-[100vw] w-[100vw] relative overflow-x-hidden">
        {/* <div className="absolute top-0 right-0 opacity-20 w-full h-full">
          <Image src={developer} alt="svg" className="h-full w-full" />
        </div> */}
        {/* svgs */}
        <div className="fixed md:flex justify-center items-center w-[4vw] h-[100vh] hidden">
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
                <Link
                  href={"https://www.buymeacoffee.com/harsh840gupta"}
                  ref={coffeeButton}
                >
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
      {/* <div className="h-1 bg-first-color"></div> */}
      <section className="  mb-[10rem]">
        <h2
          className={`text-[20px] pt-[4rem] text-first-color md:text-[45px] font-medium text-center ${Poppin.className}`}
        >
          Endorsements
        </h2>
        <div className="container 2xl:max-w-[1240px]  mx-auto p-4 relative">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".award-swiper-next",
              prevEl: ".award-swiper-prev",
            }}
            slidesPerView={1}
          >
            {testimonial.map((elem: any, index: number) => {
              return (
                <>
                  <SwiperSlide key={index}>
                    <div className="bg-gray-800 rounded-lg md:h-[350px]  overflow-hidden shadow-lg ">
                      <div className="p-6 md:flex md:flex-col md:justify-between h-full pb-4">
                        <p
                          className={`text-gray-300 text-lg md:leading-[2.1rem] md:tracking-[3px] ${Poppin.className} line-clamp-5 md:line-clamp-none`}
                        >
                          {elem.message}
                        </p>
                        <button
                          className="bg-transparent border-transparent pt-5 cursor-pointer decoration-dotted decoration-underline md:hidden"
                          onClick={() => {
                            setActiveModal("elem");
                            setModalData({
                              message: elem.message,
                              name: elem.name,
                            });
                          }}
                        >
                          read more
                        </button>
                        <p className="text-gray-500 mt-8 text-left">
                          {elem.name}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
          <button className="award-swiper-prev absolute left-4 z-[1] md:z-[0] w-4 top-1/2 md:-translate-y-1/2 md:-left-6 md:rounded-full md:w-16 md:h-16 md:pl-4 md:bg-purple-off-white disabled:cursor-not-allowed">
            <svg
              width="16"
              height="29"
              viewBox="0 0 16 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4167 2.20817L2.125 14.4998L14.4167 26.7915"
                stroke="#424242"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="award-swiper-next absolute  right-4 z-[1] md:z-[0] w-4 top-1/2 md:-translate-y-1/2 md:-right-6 md:rounded-full md:w-16 md:h-16 md:pl-8 md:bg-purple-off-white disabled:cursor-not-allowed">
            <svg
              width="16"
              height="29"
              viewBox="0 0 16 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.58333 26.7918L13.875 14.5002L1.58333 2.2085"
                stroke="#424242"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {/* </div> */}
      </section>
      {/* for modals  */}
      {activeModal && (
        <div className="fixed top-0 left-0 grid justify-center items-center  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full z-[10000]">
          <div className="relative w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Endorsement
                </h3>
                <button
                  onClick={() => setActiveModal(null)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg skewElem">
                <div className="p-6 flex flex-col gap-7">
                  <p className="text-gray-300 text-lg">{modalData.message}</p>
                  <p className="text-gray-500">{modalData.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
