"use client";
import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { Balancer } from "react-wrap-balancer";
import { FaGraduationCap } from "react-icons/fa";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoRedux } from "react-icons/bi";
import { Pacific, Poppin } from "@/utils/font";
import next from "../../../public/assets/nextjs-icon.svg";
import node from "../../../public/assets/nodejs-logo-FBE122E377-seeklogo.com.png";
import express from "../../../public/assets/express.svg";
import Image from "next/image";
import Timeline from "../component/timeline";
import gsap, { Power4 } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CSSPlugin, ScrollTrigger } from "gsap/all";

type Props = {};

const About = ({}: Props) => {
  gsap.registerPlugin(CSSPlugin, ScrollTrigger);
  let t1 = gsap.timeline();

  let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

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
    })
      .from(".skill", {
        scrollTrigger: {
          scrub: 1,
          start: "clamp(top 90%)",
          end: "clamp(top 70%)",
          trigger: ".skill",
        },
        scale: 0.6,
        ease: "none",
        duration: 3,
      })
      .from(".education", {
        scrollTrigger: {
          scrub: 1,
          start: "clamp(top 80%)",
          end: "clamp(top 50%)",
          trigger: ".education",
        },
        opacity: 0,
        ease: "none",
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
      <section className="container mb-[4rem] 2xl:max-w-[1250px] mx-auto">
        <h1 className="text-title-color text-[25px] md:text-[45px] lg:text-h1 font-bold mt-[2rem] mb-[2rem] text-center">
          About <span className="text-first-color">Me</span>
        </h1>
        <div className="grid grid-rows-1 lg:grid-cols-[4fr_8fr] gap-1 p-2">
          <div></div>
          <div className="flex flex-col gap-2 items-center pl-[10px]">
            <h2 className="md:text-[24px] text-[20px] lg:text-[30px] font-medium text-first-color mb-6 text-center">
              Welcome to my portfolio
            </h2>
            <p className="text-title-color text-[16px] font-normal leading-7 text-left pl:[15px] md:pl-0 lg:text-left ">
              {/* <Balancer> */}
              {`I'm Harsh Gupta, a dedicated and enthusiastic MERN Stack developer with a strong passion for web development and creating innovative solutions. With over one year of professional experience, I have honed my skills in building robust and scalable applications using MongoDB, Express.js, React.js,Next.js and Node.js. Additionally, I have expertise in Next.js, a powerful framework for server-rendered React applications.`}
              <br />
              <span className="hidden md:block">
                {`During my journey as a developer, I have had the opportunity to work on various projects as a freelancer. These experiences have not only allowed me to apply my technical skills but have also provided me with valuable insights into client requirements and project management. The positive reviews and feedback I have received from clients have motivated me to continually enhance my abilities and deliver exceptional results.`}
              </span>
              {` Alongside my web development expertise, I am currently pursuing a Bachelor's degree in Computer Science, specializing in software development. I am in my third year of studies, which has equipped me with a strong foundation in computer science principles and problem-solving techniques. I am also proficient in programming languages such as C and C++, further expanding my versatility as a developer.`}
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
      <section className=" bg-border-color">
        <h2
          className={`text-[20px] pt-[4rem] text-first-color md:text-[45px] font-medium text-center ${Poppin.className}`}
        >
          Testimonial
        </h2>
        <h3 className="text-center text-title-color font-light text-[22px]">
          What Other Says About Me
        </h3>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Testimonial 1 --> */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg skewElem">
              <div className="p-6">
                <p className="text-gray-300 text-lg mb-4">
                  {`"I have worked personally with Harsh for 2 years simultaneously and I must really say that his work is exceptional. I have only seen his skills in the field of Web development using the MERN stack, so I can say for sure that him being a part of anyone's team in the near future is going to be a really great advantage for that team. I wish the really best for him and hope to work together again."`}
                </p>
                <p className="text-gray-500">- John Doe</p>
              </div>
            </div>

            {/* <!-- Testimonial 2 --> */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg skewElem">
              <div className="p-6">
                <p className="text-gray-300 text-lg mb-4">
                  {`"I have worked personally with Harsh for 2 years simultaneously and I must really say that his work is exceptional. I have only seen his skills in the field of Web development using the MERN stack, so I can say for sure that him being a part of anyone's team in the near future is going to be a really great advantage for that team. I wish the really best for him and hope to work together again."`}
                </p>
                <p className="text-gray-500">
                  {" "}
                  {`- Sarthak Gour (Graphics/UI/UX designer)`}
                </p>
              </div>
            </div>

            {/* <!-- Testimonial 3 --> */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg skewElem">
              <div className="p-6">
                <p className="text-gray-300 text-lg mb-4">
                  {`"I have worked personally with Harsh for 2 years simultaneously and I must really say that his work is exceptional. I have only seen his skills in the field of Web development using the MERN stack, so I can say for sure that him being a part of anyone's team in the near future is going to be a really great advantage for that team. I wish the really best for him and hope to work together again."`}
                </p>
                <p className="text-gray-500">- Mark Johnson</p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    </>
  );
};

export default About;
