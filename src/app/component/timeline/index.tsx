"use client";
import React, { useEffect } from "react";
import { gsap, Power3, Power4 } from "gsap";
import { CSSPlugin, ScrollTrigger } from "gsap/all";
import Link from "next/link";
import oll from "../../../../public/assets/oll logo.jpeg";
import Image from "next/image";

type Props = {};

const Timeline = ({}: Props) => {
  gsap.registerPlugin(CSSPlugin, ScrollTrigger);
  let t1 = gsap.timeline();
  useEffect(() => {
    t1.from(".leftBox1", {
      scrollTrigger: {
        scrub: 1,
        start: "clamp(top 80%)",
        end: "clamp(top 60%)",
        trigger: ".leftBox1",
      },
      opacity: 0,
      zIndex: 0,
      ease: "none",
      duration: 3,
    })
      .from(".rightBox1", {
        scrollTrigger: {
          scrub: 1,
          start: "clamp(top 80%)",
          end: "clamp(top 60%)",
          trigger: ".rightBox1",
        },
        opacity: 0,
        zIndex: 0,
        ease: "none",
        duration: 3,
      })
      .from(".leftBox2", {
        scrollTrigger: {
          scrub: 1,
          start: "clamp(top 80%)",
          end: "clamp(top 60%)",
          trigger: ".leftBox2",
        },
        opacity: 0,
        zIndex: 0,
        ease: "none",
        duration: 3,
      })
      .from(".rightBox2", {
        scrollTrigger: {
          scrub: 1,
          start: "clamp(top 80%)",
          end: "clamp(top 60%)",
          trigger: ".rightBox2",
        },
        opacity: 0,
        zIndex: 0,
        ease: "none",
        duration: 3,
      })
      .from(".height", {
        scrollTrigger: {
          scrub: 1,
          start: "clamp(top 80%)",
          end: "clamp(bottom top)",
          trigger: ".height",
        },
        height: "0px",
        ease: "none",
        duration: 3,
      });
  });
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-xl mx-auto"></div>
      <div className="flex flex-col justify-center ">
        <div className="w-full px-4 mx-auto lg:max-w-5xl ">
          <div className="relative">
            <div className="height absolute hidden w-1 h-full transform -translate-x-1/2 bg-[#c9e2f5] dark:bg-gray-700 lg:block left-1/2"></div>
            <div className="space-y-2 lg:space-y-4">
              <div className="leftBox1">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-start w-full mx-auto">
                    <div className="w-full lg:w-1/2 lg:pr-8">
                      <div className="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
                        <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4">
                          <div className="hidden h-10 origin-bottom-left transform -rotate-45 bg-white shadow lg:block dark:bg-gray-900"></div>
                        </div>
                        <div className=" relative z-20 ">
                          {/* content */}
                          <div className=" flex flex-col flex-wrap px-8">
                            <h2 className="mt-2">
                              MERN Stack Developer at{" "}
                              <span className="text-first-color">OLL</span>
                            </h2>
                            <h3 className="text-first-color">
                              Dec 2022 to April 2023
                            </h3>
                            <p className="text-title-color my-3">
                              During this internship, I had the opportunity to
                              work as a MERN Stack and in-house developer,
                              contributing to the development and enhancement of
                              various projects. As a MERN Stack developer, I
                              utilized my skills in MongoDB, Express.js, React,
                              and Node.js to create robust and efficient web
                              applications.
                            </p>
                            <Link
                              href={
                                "https://drive.google.com/file/d/1apvl1r6vhgKTqdqLkZMY5rGaJ2cbNXXv/view?usp=drivesdk"
                              }
                              target="_blank"
                              className="text-first-color cursor-pointer border-dotted mb-2 underline"
                            >
                              View Certiticate
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-blue-500 rounded-full dark:bg-gray-700 left-1/2 lg:translate-y-[4px]">
                    <span className="text-gray-100 dark:text-gray-400">
                      <Image
                        src={oll}
                        alt="logo"
                        height={20}
                        width={20}
                        className="mix-blend-color-burn"
                      />
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Right section --> */}
              <div className="rightBox1">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-end w-full mx-auto">
                    <div className="w-full lg:w-1/2 lg:pl-8">
                      <div className="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
                        <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                          <div className="hidden h-10 origin-top-right transform -rotate-45 bg-white dark:bg-gray-900 lg:block drop-shadow-lg"></div>
                        </div>
                        <div className="relative z-20 ">
                          <div className=" flex flex-col flex-wrap px-8">
                            <h2 className="mt-2">
                              Full Stack Developer at{" "}
                              <span className="text-first-color">TEXAM</span>
                            </h2>
                            <h3 className="text-first-color">
                              Sep 2022 to Jan 2023
                            </h3>
                            <p className="text-title-color my-3">
                              During this internship, I had the privilege of
                              working as a MERN Stack developer, where I gained
                              hands-on experience in building modern web
                              applications using MongoDB, Express.js, React, and
                              Node.js.
                            </p>
                            <Link
                              href={
                                "https://drive.google.com/file/d/1akr_FgYk51en2Dhl85UyTmRebXV5L6UR/view?usp=drivesdk"
                              }
                              target="_blank"
                              className="text-first-color cursor-pointer border-dotted mb-2 underline"
                            >
                              View Certiticate
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-blue-500 rounded-full dark:bg-gray-700 left-1/2 lg:translate-y-[3px]">
                    <span className="text-gray-100 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-4 h-4 bi bi-globe"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Left section --> */}
              {/* <div className="leftBox2">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-start w-full mx-auto">
                    <div className="w-full lg:w-1/2 lg:pr-8">
                      <div className="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
                        <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4">
                          <div className="hidden h-10 origin-bottom-left transform -rotate-45 bg-white shadow lg:block dark:bg-gray-900"></div>
                        </div>
                        <div className="relative z-20 ">
                          <div className="flex flex-wrap items-center">
                            <div className="p-4 md:w-1/4 ">
                              <span className="text-lg text-gray-700 dark:text-gray-400">
                                March
                              </span>
                              <p className="text-2xl font-bold text-gray-700 dark:text-gray-400 text-bold">
                                11
                              </p>
                              <span className="text-lg text-gray-700 dark:text-gray-400">
                                2021
                              </span>
                            </div>
                            <div className="flex-1 p-4 pr-4 border-l border-gray-300 dark:border-gray-700">
                              <p className="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">
                                Made 100+ Themes
                              </p>
                              <p className="text-gray-700 dark:text-gray-500">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. veniam libero facilis minus
                                reprehenderit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-blue-500 rounded-full dark:bg-gray-700 left-1/2 lg:translate-y-[2px]">
                    <span className="text-gray-100 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-4 h-4 bi bi-code-slash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div> */}
              {/* <!-- Right section --> */}
              {/* <div className="rightBox2">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-end w-full mx-auto">
                    <div className="w-full lg:w-1/2 lg:pl-8">
                      <div className="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
                        <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                          <div className="hidden h-10 origin-top-right transform -rotate-45 bg-white dark:bg-gray-900 lg:block drop-shadow-lg"></div>
                        </div>
                        <div className="relative z-20 ">
                          <div className="flex flex-wrap items-center">
                            <div className="p-4 md:w-1/4 ">
                              <span className="text-lg text-gray-700 dark:text-gray-400">
                                April
                              </span>
                              <p className="text-2xl font-bold text-gray-700 dark:text-gray-400 text-bold">
                                21
                              </p>
                              <span className="text-lg text-gray-700 dark:text-gray-400">
                                2022
                              </span>
                            </div>
                            <div className="flex-1 p-4 pr-4 border-l border-gray-300 dark:border-gray-700">
                              <p className="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">
                                Launch Project
                              </p>
                              <p className="text-gray-700 dark:text-gray-500">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. veniam libero facilis minus
                                reprehenderit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-blue-500 rounded-full dark:bg-gray-700 left-1/2 lg:translate-y-[1px]">
                    <span className="text-gray-100 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-4 h-4 bi bi-clock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

// "use client";
// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// type Props = {};

// const Timeline = ({}: Props) => {
//   return (
//     <>
//       ...
//       <VerticalTimeline>
//         <VerticalTimelineElement
//           className="vertical-timeline-element--work"
//           contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//           contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
//           date="2011 - present"
//           iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//           // icon={<WorkIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">Creative Director</h3>
//           <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
//           <p>
//             Creative Direction, User Experience, Visual Design, Project
//             Management, Team Leading
//           </p>
//         </VerticalTimelineElement>
//         <VerticalTimelineElement
//           className="vertical-timeline-element--work"
//           date="2010 - 2011"
//           iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//           // icon={<WorkIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">Art Director</h3>
//           <h4 className="vertical-timeline-element-subtitle">
//             San Francisco, CA
//           </h4>
//           <p>
//             Creative Direction, User Experience, Visual Design, SEO, Online
//             Marketing
//           </p>
//         </VerticalTimelineElement>
//         <VerticalTimelineElement
//           className="vertical-timeline-element--work"
//           date="2008 - 2010"
//           iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//           // icon={<WorkIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">Web Designer</h3>
//           <h4 className="vertical-timeline-element-subtitle">
//             Los Angeles, CA
//           </h4>
//           <p>User Experience, Visual Design</p>
//         </VerticalTimelineElement>
//         <VerticalTimelineElement
//           className="vertical-timeline-element--work"
//           date="2006 - 2008"
//           iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//           // icon={<WorkIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">Web Designer</h3>
//           <h4 className="vertical-timeline-element-subtitle">
//             San Francisco, CA
//           </h4>
//           <p>User Experience, Visual Design</p>
//         </VerticalTimelineElement>
//         <VerticalTimelineElement
//           className="vertical-timeline-element--education"
//           date="April 2013"
//           iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
//           // icon={<SchoolIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">
//             Content Marketing for Web, Mobile and Social Media
//           </h3>
//           <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
//           <p>Strategy, Social Media</p>
//         </VerticalTimelineElement>
//         <VerticalTimelineElement
//           className="vertical-timeline-element--education"
//           date="November 2012"
//           iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
//           // icon={<SchoolIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">
//             Agile Development Scrum Master
//           </h3>
//           <h4 className="vertical-timeline-element-subtitle">Certification</h4>
//           <p>Creative Direction, User Experience, Visual Design</p>
//         </VerticalTimelineElement>
//         <VerticalTimelineElement
//           className="vertical-timeline-element--education"
//           date="2002 - 2006"
//           iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
//           // icon={<SchoolIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">
//             Bachelor of Science in Interactive Digital Media Visual Imaging
//           </h3>
//           <h4 className="vertical-timeline-element-subtitle">
//             Bachelor Degree
//           </h4>
//           <p>Creative Direction, Visual Design</p>
//         </VerticalTimelineElement>
//         <VerticalTimelineElement
//           iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
//           // icon={<StarIcon />}
//         />
//       </VerticalTimeline>
//     </>
//   );
// };

// export default Timeline;
