"use client";
import React, { useEffect, useState } from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoRedux } from "react-icons/bi";
import harsh from "../../../public/assets/Harshthemebg.jpeg";
import { Pacific, Poppin } from "@/utils/font";
import next from "../../../public/assets/nextjs-icon.svg";
import node from "../../../public/assets/nodejs-logo-FBE122E377-seeklogo.com.png";
import express from "../../../public/assets/express.svg";
import Image from "next/image";
import Timeline from "../component/timeline";
import gsap, { Power4 } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { CSSPlugin, ScrollTrigger } from "gsap/all";
import Link from "next/link";

type Props = {};
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

const About = ({}: Props) => {
  const [activeModal, setActiveModal] = useState<null | string>(null);
  const [modalData, setModalData] = useState({
    message: "",
    name: "",
  });
  useEffect(() => {
    if (activeModal !== null) document.body.style.overflow = "hidden";
    else
      setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 500);
  }, [activeModal]);
  gsap.registerPlugin(CSSPlugin, ScrollTrigger);
  let t1 = gsap.timeline();
  let t2 = gsap.timeline();

  let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-15, 15); // don't let the skew go beyond 20 degrees.

  useEffect(() => {
    t1.from(".skill", {
      scrollTrigger: {
        scrub: 1,
        start: "clamp(top 90%)",
        end: "clamp(top 70%)",
        trigger: ".skill",
      },
      opacity: 0,
      ease: "none",
      duration: 3,
    }).from(".skill", {
      scrollTrigger: {
        scrub: 1,
        start: "clamp(top 90%)",
        end: "clamp(top 70%)",
        trigger: ".skill",
      },
      scale: 0.6,
      ease: "none",
      duration: 3,
    });

    t1.from(".education", {
      opacity: 0,
      ease: Power4.easeIn,
      duration: 3,
    });
    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });
    gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
  });
  return (
    <>
      {/* about me section some description and profile pic  */}
      <section className="container mb-[4rem] 2xl:max-w-[1250px] mx-auto">
        <h1 className="text-title-color text-[25px] md:text-[45px] lg:text-h1 font-bold mt-[2rem] mb-[2rem] text-center">
          About <span className="text-first-color">Me</span>
        </h1>
        <div className="grid grid-rows-1 lg:grid-cols-[4fr_8fr] gap-1 p-2">
          <div className="flex flex-col items-center mt-[4.5rem]">
            <Image
              src={harsh}
              alt="image"
              className="rounded-[50%] object-contain object-top h-[250px] w-[250px]"
            />
            <div className="social_info flex gap-[20px] mt-6">
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
            <Link
              href={
                "https://drive.google.com/file/d/1mqOlLkM9KLP1HXdSw3yDiRe8IQpVBKtN/view?usp=sharing"
              }
              target="_resume"
              className="rounded border-[2px] border-solid hover:text-first-color transition-all duration-150 ease-linear border-first-color mt-8 px-4 py-2 text-white"
            >
              View Resume
            </Link>
          </div>
          <div className="flex flex-col gap-2 items-center pl-[10px]">
            <h2 className="md:text-[24px] text-[20px] lg:text-[30px] font-medium text-first-color mb-6 text-center">
              Welcome to my portfolio
            </h2>
            <p className="text-title-color text-[18px] font-normal leading-[2rem] tracking-[2px ] text-left pl:[15px] md:pl-0 lg:text-left ">
              {/* <Balancer> */}
              {`I'm Harsh Gupta, a dedicated and enthusiastic MERN Stack developer with a strong passion for web development and creating innovative solutions. With over 1+ year of professional experience, I have honed my skills in building robust and scalable applications using MongoDB, Express.js, React.js,Next.js and Node.js. Additionally, I have expertise in Next.js, a powerful framework for server-rendered React applications.`}

              <br />
              {` What drives me is the thrill of tackling new and challenging projects. I love pushing the boundaries of what can be achieved with technology and exploring emerging trends in the industry. Keeping up with the latest advancements and constantly expanding my knowledge are priorities for me, as I believe in staying at the forefront of the ever-evolving tech.`}
              <br />
              {`Feel free to explore my portfolio to see some of the projects I have worked on. If you have an exciting project or collaboration opportunity, I would love to hear from you! Let's connect and work together to bring your ideas to life. Thank you for visiting my portfolio, and I look forward to the chance to work with you.
                `}
              {/* </Balancer> */}
            </p>
            <div className="education text-left items-start w-full">
              <h2 className="text-[30px] font-bold text-first-color mb-6 my-4">
                Education
              </h2>
              <ul className="list-none">
                <li className="p-[4px] flex gap-2 text-title-color text-[16px]">
                  <span className="flex justify-center text-[26px]">
                    <FaGraduationCap />
                  </span>
                  <div>
                    <p className="text-title-color">{`B.Tech (CSE),2025`}</p>
                    <p className="text-[14px] text-[rgba(255,255,255,.6)]">
                      Samrat Ashok Technical Institute,Vidisha
                    </p>
                  </div>
                </li>
                <li className="p-[4px] flex gap-2 text-title-color text-[18px]">
                  <span className="flex justify-center text-[26px]">
                    <FaGraduationCap />
                  </span>
                  <div>
                    <p className="text-title-color">{`Class 12th PCM (85%),2021`}</p>
                    <p className="text-[14px] text-[rgba(255,255,255,.6)]">
                      Sacred Heart School
                    </p>
                  </div>
                </li>
                <li className="p-[4px] flex gap-2 text-title-color text-[18px]">
                  <span className="flex justify-center text-[26px]">
                    <FaGraduationCap />
                  </span>
                  <div>
                    <p className="text-title-color">{`Class 10th (86%),2021`}</p>
                    <p className="text-[14px] text-[rgba(255,255,255,.6)]">
                      Sacred Heart School
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* skills  */}
      <section className="skill w-full min-h-[160px] h-auto bg-border-color pb-[5rem] ">
        <h2
          className={` pt-[2rem] text-first-color text-[50px] font-medium text-center ${Poppin.className}`}
        >
          Skills
        </h2>
        <div className="grid gap-4 grid-cols-[135px_135px] text-center lg:grid-cols-[135px_135px_135px_135px] gap-y-[3rem] justify-evenly items-center md:grid-cols-[135px_135px_125px] container mx-auto mt-[4rem]">
          <div className="flex flex-col gap-y-3 w-[120px] md:w-[160px]">
            <div className="flex justify-center items-center h-[120px] text-center w-[120px] md:h-[160px] md:w-[160px]  rounded shadow-[0_0_10px_10px_#E4552D]">
              <span className="text-[#E4552D] h-[120px] w-[120px] flex  justify-center items-center">
                <BiLogoHtml5 className="md:h-[120px] md:w-[120px] h-[100px] w-[100px]" />
              </span>
            </div>
            <span className={`${Pacific.className} text-[24px] text-[#E4552D]`}>
              html
            </span>
          </div>
          <div className="flex flex-col gap-y-3 w-[120px] md:w-[160px]">
            <div className="flex mx-auto justify-center items-center h-[120px] text-center w-[120px] md:h-[160px] md:w-[160px]  rounded shadow-[0_0_10px_10px_#2767B2]">
              <span className="text-[#2767B2] h-[120px] w-[120px] flex  justify-center items-center">
                <BiLogoCss3 className="md:h-[120px] md:w-[120px] h-[100px] w-[100px]" />
              </span>
            </div>
            <span className={`${Pacific.className} text-[24px] text-[#2767B2]`}>
              css
            </span>
          </div>
          <div className="flex flex-col gap-y-3 w-[120px] md:w-[160px]">
            <div className="flex justify-center items-center h-[120px] text-center w-[120px] md:h-[160px] md:w-[160px]  rounded shadow-[0_0_10px_10px_#DBBB34]">
              <span className="text-[#DBBB34] h-[120px] w-[120px] flex  justify-center items-center">
                <BiLogoJavascript className="md:h-[120px] md:w-[120px] h-[100px] w-[100px]" />
              </span>
            </div>
            <span className={`${Pacific.className} text-[24px] text-[#DBBB34]`}>
              javascript
            </span>
          </div>
          <div className="flex flex-col gap-y-3 w-[120px] md:w-[160px]">
            <div className="flex justify-center items-center h-[120px] text-center w-[120px] md:h-[160px] md:w-[160px]  rounded shadow-[0_0_10px_10px_#7A4DBD]">
              <span className="text-[#7A4DBD] h-[120px] w-[120px] flex  justify-center items-center">
                <BiLogoRedux className="md:h-[120px] md:w-[120px] h-[100px] w-[100px]" />
              </span>
            </div>
            <span className={`${Pacific.className} text-[24px] text-[#7A4DBD]`}>
              redux
            </span>
          </div>
          <div className="flex flex-col gap-y-3 w-[120px] md:w-[160px]">
            <div className="flex justify-center items-center h-[120px] text-center w-[120px] md:h-[160px] md:w-[160px]  rounded shadow-[0_0_10px_10px_#66DBFB]">
              <span className="text-[#66DBFB] h-[120px] w-[120px] flex  justify-center items-center">
                <BiLogoReact className="md:h-[120px] md:w-[120px] h-[100px] w-[100px]" />
              </span>
            </div>
            <span className={`${Pacific.className} text-[24px] text-[#66DBFB]`}>
              react.js
            </span>
          </div>
          <div className="flex flex-col gap-y-3 w-[120px] md:w-[160px]">
            <div className="flex justify-center  items-center h-[120px] w-[120px] md:h-[160px] md:w-[160px]  rounded shadow-[0_0_10px_10px_#000]">
              <Image
                alt="icons"
                height={120}
                width={120}
                src={next}
                className="object-contain object-top mix-blend-color-burn md:h-[120px] md:w-[120px] h-[100px] w-[100px]"
              />
            </div>
            <span className={`${Pacific.className} text-[24px] text-[#000]`}>
              next.js
            </span>
          </div>
          <div className="flex flex-col gap-y-3 w-[120px] md:w-[160px]">
            <div className="flex justify-center items-center h-[120px] w-[120px] md:h-[160px] md:w-[160px] rounded shadow-[0_0_10px_10px_#000]">
              <Image
                alt="icons"
                height={120}
                width={120}
                src={express}
                className="object-contain object-top md:h-[120px] md:w-[120px] h-[100px] w-[100px]"
              />
            </div>
            <span className={`${Pacific.className} text-[24px] text-[#000]`}>
              express
            </span>
          </div>
          <div className="flex flex-col gap-y-3 w-[120px] md:w-[160px]">
            <div className="flex justify-center items-center h-[120px] w-[120px] md:h-[160px] md:w-[160px] shadow-[0_0_10px_10px_rgb(85,159,68)]">
              <Image
                alt="icons"
                height={120}
                width={120}
                src={node}
                className="md:h-[120px] md:w-[120px] h-[100px] w-[100px]"
              />
            </div>
            <span
              className={`${Pacific.className} text-[24px] text-[rgb(85,159,68)]`}
            >
              nodejs
            </span>
          </div>
        </div>
      </section>
      {/* my work experiences */}
      <section className="container mx-auto">
        <h2
          className={`text-[20px] pt-[4rem] text-first-color md:text-[45px] font-medium text-center ${Poppin.className}`}
        >
          Work Experience
        </h2>
        <div className="mt-[3rem]">
          <Timeline />
        </div>
      </section>
      {/* testimonials section  */}
      <section className=" bg-border-color mb-20 pb-9">
        <h2
          className={`text-[20px] pt-[4rem] text-first-color md:text-[45px] font-medium text-center ${Poppin.className}`}
        >
          Testimonials
        </h2>
        <div className="container mx-auto p-4 relative">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".award-swiper-next",
              prevEl: ".award-swiper-prev",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              888: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
          >
            {testimonial.map((elem: any, index: number) => {
              return (
                <>
                  <SwiperSlide key={index}>
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg skewElem">
                      <div className="p-6">
                        <p className="text-gray-300 text-lg line-clamp-[7]">
                          {elem.message}
                        </p>
                        <button
                          className="bg-transparent border-none cursor-pointer decoration-dotted decoration-underline"
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
                        <p className="text-gray-500">{elem.name}</p>
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
                  Testimonial
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

export default About;
