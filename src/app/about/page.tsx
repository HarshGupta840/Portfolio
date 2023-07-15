import React from "react";
import styles from "./styles.module.css";
import { Balancer } from "react-wrap-balancer";
import { FaGraduationCap } from "react-icons/fa";
import { BiLogoReact } from "react-icons/bi";
import { Poppin } from "@/utils/font";
import next from "../../../public/assets/nextjs-icon.svg";
import node from "../../../public/assets/nodejs-logo-FBE122E377-seeklogo.com.png";
import express from "../../../public/assets/express.svg";
import Image from "next/image";
import Timeline from "../component/timeline";

type Props = {};

const About = ({}: Props) => {
  return (
    <>
      <h1 className="text-title-color text-[20px] md:text-[45px] lg:text-h1 font-bold mt-[6rem] mb-[2rem] text-center">
        About <span className="text-first-color">Me</span>
      </h1>
      <section className="container mb-[4rem]">
        <div className="grid grid-rows-1 lg:grid-cols-[4fr_8fr] gap-1 p-2">
          <div></div>
          <div className="flex flex-col gap-2">
            <h2 className="md:text-[24px] text-[20px] lg:text-[30px] font-medium text-first-color mb-6 text-center">
              Welcome to my portfolio
            </h2>
            <p className="text-title-color text-[18px] font-normal leading-7 text-center md:text-left line-clamp-[20] md:line-clamp-none">
              <Balancer>
                {`I'm Harsh Gupta, a dedicated and enthusiastic MERN Stack developer with a strong passion for web development and creating innovative solutions. With over one year of professional experience, I have honed my skills in building robust and scalable applications using MongoDB, Express.js, React.js,Next.js and Node.js. Additionally, I have expertise in Next.js, a powerful framework for server-rendered React applications.`}
                <br />
                {`During my journey as a developer, I have had the opportunity to work on various projects as a freelancer. These experiences have not only allowed me to apply my technical skills but have also provided me with valuable insights into client requirements and project management. The positive reviews and feedback I have received from clients have motivated me to continually enhance my abilities and deliver exceptional results.`}
                <br />
                {` Alongside my web development expertise, I am currently pursuing a Bachelor's degree in Computer Science, specializing in software development. I am in my third year of studies, which has equipped me with a strong foundation in computer science principles and problem-solving techniques. I am also proficient in programming languages such as C and C++, further expanding my versatility as a developer.`}
                <br />
                {` What drives me is the thrill of tackling new and challenging projects. I love pushing the boundaries of what can be achieved with technology and exploring emerging trends in the industry. Keeping up with the latest advancements and constantly expanding my knowledge are priorities for me, as I believe in staying at the forefront of the ever-evolving tech.`}
                <br />
                {`Feel free to explore my portfolio to see some of the projects I have worked on. If you have an exciting project or collaboration opportunity, I would love to hear from you! Let's connect and work together to bring your ideas to life. Thank you for visiting my portfolio, and I look forward to the chance to work with you.
                `}
              </Balancer>
            </p>
            <div>
              <h2 className="text-[30px] font-bold text-first-color mb-6 my-4">
                Education
              </h2>
              <ul className="list-none">
                <li className="p-[4px] flex gap-2 text-title-color text-[18px]">
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
      <section className="w-full min-h-[160px] h-auto bg-border-color pb-[5rem]">
        <h2
          className={` pt-[2rem] text-first-color text-[50px] font-medium text-center ${Poppin.className}`}
        >
          Skills
        </h2>
        <div className="flex justify-between items-center flex-col md:flex-row container mx-auto mt-[4rem] gap-[3rem] md:gap-0">
          <div className="flex justify-center items-center h-[135px] w-[135px] md:h-[160px] md:w-[160px] animate-bounce  rounded shadow-[0_0_10px_13px_#66DBFB]">
            <span className="text-[#66DBFB] h-[120px] w-[120px] flex justify-center items-center">
              <BiLogoReact className="h-[120px] w-[120px]" />
            </span>
          </div>
          <div className="flex justify-center items-center h-[135px] w-[135px] md:h-[160px] md:w-[160px] animate-bounce rounded shadow-[0_0_10px_13px_#000]">
            <Image
              alt="icons"
              height={120}
              width={120}
              src={next}
              className="object-contain object-top mix-blend-color-burn"
            />
          </div>
          <div className="flex justify-center items-center h-[135px] w-[135px] md:h-[160px] md:w-[160px] animate-bounce rounded shadow-[0_0_10px_13px_#000]">
            <Image
              alt="icons"
              height={120}
              width={120}
              src={express}
              className="object-contain object-top"
            />
          </div>
          <div className="flex justify-center items-center h-[135px] w-[135px] md:h-[160px] animate-bounce md:w-[160px] shadow-[0_0_10px_13px_rgb(85,159,68)]">
            <Image alt="icons" height={120} width={120} src={node} />
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <h2
          className={` pt-[4rem] text-first-color text-[50px] font-medium text-center ${Poppin.className}`}
        >
          What Other Says About ME
        </h2>
        <div className="mt-[3rem]">
          <Timeline />
        </div>
      </section>
    </>
  );
};

export default About;
