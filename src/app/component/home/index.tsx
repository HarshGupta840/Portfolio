"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import Profile from "../../../../public/assets/harsh.jpg";
import Profilemobile from "../../../../public/assets/harsh-mobile.png";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Balancer from "react-wrap-balancer";
import Text from "../textAnimation";
import { PiCoffeeFill } from "react-icons/pi";
import { Pacific, Poppin } from "@/utils/font";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { gsap, Power3, Power4 } from "gsap";
import { CSSPlugin, ScrollTrigger } from "gsap/all";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import AOS from "aos";
import development from "../../../../public/assets/svgs/development.svg";
import seo from "../../../../public/assets/svgs/seo.svg";
import "aos/dist/aos.css";

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
  ];
  const [activeModal, setActiveModal] = useState<null | string>(null);
  const [modalData, setModalData] = useState({
    message: "",
    name: "",
  });
  let text = useRef(null);
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
  // ANIMATION FUNCTION
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* intro about me  */}
      <section className="max-w-[100vw] w-[100vw] relative overflow-x-hidden bg-black">
        <div className="fixed md:flex justify-center items-center w-[4vw] h-[100vh] hidden">
          <div className="social_info flex flex-col text-center items-center gap-[10px] ">
            <Link
              href={"https://www.linkedin.com/in/harshgupta840"}
              target="_blank"
              replace
              className="social_link   !text-[26px] flex justify-center text-first-color hover:text-white hover:bg-first-color transition-all duration-100 ease-linear  h-[45px] w-[45px]   rounded-[50%] !text-center items-center"
            >
              <FaLinkedin />
            </Link>
            <Link
              href={"https://www.github.com/harshgupta840"}
              target="_blank"
              replace
              className="social_link !text-[26px] flex justify-center text-first-color hover:text-white hover:bg-first-color transition-all duration-100 ease-linear  h-[45px] w-[45px]    rounded-[50%] !text-center items-center"
            >
              <FaGithub />
            </Link>
            <Link
              href={
                "https://instagram.com/harshgupta080?igshid=ZGUzMzM3NWJiOQ=="
              }
              target="_blank"
              replace
              className="social_link !text-[26px] flex justify-center text-first-color hover:text-white hover:bg-first-color transition-all duration-100 ease-linear h-[45px] w-[45px]   rounded-[50%] !text-center items-center"
            >
              <FaInstagram />
            </Link>
            <div className="w-[2px] h-24 bg-first-color text-center items-center"></div>
          </div>
        </div>
        <section className="hone section justify-evenly flex flex-col md:flex-row items-center w-[100vw]  relative h-[100vh] md:w-[90vw] mx-auto md:px-[15px] lg:p-[10px] xl:p-[40px]">
          {/* <div className="color_block hidden md:inline-block absolute bg-first-color w-[70%] h-[70%] "> */}

          <div className="h-[220px] mt-8 md:mt-10 md:h-[550px] md:w-[500px] flex flex-col justify-center items-center rounded-[30px] bg-transparent">
            <Image
              ref={img}
              // quality={100}
              // height={50}
              // width={50}
              src={Profile}
              alt="home_images"
              className=" md:inline-block hidden md:h-[500px] md:w-[450px] object-cover rounded-[30px] border-solid border-first-color border-[2px] shadow-[0_0_8px_hsla(0_0%_0%_0.3)] z-[1]"
            />
            <Image
              ref={img}
              // quality={100}
              // height={50}
              // width={50}
              src={Profilemobile}
              alt="home_images"
              className="h-[220px] md:hidden w-[220px] object-cover rounded-[50%] md:rounded-[30px] shadow-[0_0_8px_hsla(0_0%_0%_0.3)] z-[1]"
            />
            <div className="social_info flex gap-[20px] mt-2 md:mt-6 md:hidden">
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
          <div className="home__content flex flex-col text-center p-2 md:text-left mt-[-1rem]">
            <div className="home__data lg:max-w-[550px] xl:max-w-[650px] 2xl:max-w-[850px] lg:mx-auto   md:p-[15px]">
              <h1 className="home__title md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-[50%] md:before:w-[48px] md:before:h-[5px] rounded-lg before:bg-first-color relative sm:text[26px] md:text-[34px] lg:text-[37px] xl:text-[48px] md:pl-[65px]">
                <span
                  ref={text}
                  className="block text-first-color text-[29px] sm:text-[30px] md:text-[38px] lg:text-[38px]"
                >
                  I am Harsh Gupta.
                </span>
              </h1>
              <span className="text-white text-[29px] md:text-[38px] font-semibold mb-1 pl-[40px]">
                <Text />
              </span>
              <p
                ref={p}
                className="hero__description balance leading-loose mx-32px my-[16px]  md:mb-[40px] text-title-color text-[15px] md:text-[15px] xl:text[18px] 2xl:text-[18px]"
              >
                Experienced MERN Stack and Next.js developer with 1.5 years of
                experience. Skilled in building robust web applications,
                utilizing MongoDB, Express.js, React, and Node.js. Proficient in
                front-end development, responsive design, and API integration.
                Committed to delivering high-quality code and exceeding client
                expectations.
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
                  target="_blank"
                  ref={coffeeButton}
                >
                  <button className="text-title-color border-[1px] border-solid border-first-color w-[155px] sm:w-[190px] sm:text-[14px] md:w-[200px] lg:w-[220px] py-3  rounded-[35px] font-medium relative mb-10px bg-first-color hover:bg-transparent transition-all duration-[0.3s] ease-linear items-center text-center flex justify-center gap-2 md:text-[15px] xl:text-[16px] text-[12px] opacity-100">
                    <span>Buy Me a Coffee </span>
                    <PiCoffeeFill />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* services that i do provide  */}
      <div className=" flex flex-col gap-[7rem] mt-[8rem] mb-[9rem] mx-auto w-[90%] md:w-[80%]">
        <div className="flex flex-col-reverse gap-4 md:grid w-full mx-auto grid-col-2  lg:grid-rows-none lg:grid-cols-2 h-auto">
          <div className="flex flex-col gap-4 ">
            <h1 className="!text-[35px] text-first-color">Web Development</h1>
            <p className="text-white text-[18px]  leading-[2rem]">
              I provide exceptional web development services, crafting top-tier
              websites that shine online. With over 1.5 years of dedicated
              experience in the field, I am committed to delivering premium
              solutions to my clients at a competitive cost. My skill set
              encompasses various types of web-based software development,
              including website development, eCommerce site development,
              WordPress site development, and responsive website development.
              When you choose me, youa&apos;re choosing a dedicated professional
              who prioritizes quality and customer satisfaction above all else.
            </p>
            <ul className="text-[18px] gap-2 text-white">
              <li className="li-icon">Next js</li>
              <li className="li-icon">React js</li>
              <li className="li-icon">Node js</li>
            </ul>
          </div>
          <div className=" order-1">
            <Image className="h-[35vh]" src={development} alt="svg" />
          </div>
        </div>
        <div className="grid w-full mx-auto lg:grid-rows-none grid-rows-[30%_70%] gap-4 lg:grid-cols-2 h-auto">
          <div className="h-auto">
            <Image className="h-[35vh]" src={seo} alt="svg" />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="!text-[35px]  text-first-color">
              Website Optimization
            </h1>
            <p className="text-white text-[18px]  leading-[2rem]">
              For any website, site optimization is the most crucial component.
              Site optimization is crucial if you want to give your visitors a
              seamless and satisfying online experience. We provide professional
              site optimization, user intent, content marketing, better
              page speed, Search Engine Optimisation (SEO), and user experience.
              Your page will appear highly in search results thanks to our
              service.
            </p>
            <ul className="text-[18px] text-white">
              <li className="li-icon">Reduce load time</li>
              <li className="li-icon">Optimize image</li>
              <li className="li-icon">Rank up website</li>
            </ul>
          </div>
        </div>
      </div>
      {/* how do i work  */}
      <section className="w-full mb-[3rem] bg-black">
        <h1 className="text-center text-first-color text-[33px] p-4 mb-3 after:w-[40px] after:h-[2px] after:text-first-color">
          How Do I Work
        </h1>
        <div className="grid grid-cols-1  place-items-center md:place-items-stretch md:grid-cols-3 gap-4 md:gap-3 xl:grid-cols-5 w-[90%] pb-[4.5rem]  mx-auto">
          <div className="border-solid w-[240px] border-first-color border rounded-md p-4">
            <h1 className="text-[16px] text-first-color font-semibold mb-1 ">
              01. Understand Your Vision
            </h1>
            <div className="text-white text-[13px]">
              It all starts with a conversation between you and me. I want to
              hear about your dreams, ideas, and goals for your project. Your
              vision is my compass.
            </div>
          </div>
          <div className="border-solid w-[240px] border-first-color border rounded-md p-2">
            <h1 className="text-[16px] text-first-color font-semibold mb-1 ">
              02 Craft the Blueprint
            </h1>
            <div className="text-white text-[13px]">
              Armed with your vision, I get to work planning the perfect
              blueprint. Think of it as the roadmap for our creative and
              technical journey together—just you and me.
            </div>
          </div>
          <div className="border-solid w-[240px] border-first-color border rounded-md p-2">
            <h1 className="text-[16px] text-first-color font-semibold mb-1 ">
              03 Design Showcase
            </h1>
            <div className="text-white text-[13px]">
              Now for the exciting part! I channel my creativity to design
              multiple skins that bring your vision to life. It&aps;s like
              trying on outfits for your project—pick the one that resonates
              with you, and we&apos;ll refine it until it&apos;s perfect.
            </div>
          </div>
          <div className="border-solid w-[240px] border-first-color border rounded-md p-2">
            <h1 className="text-[16px] text-first-color font-semibold mb-1 ">
              04 Building the Magic
            </h1>
            <div className="text-white text-[13px]">
              With your design choice locked in, I roll up my sleeves and dive
              into the nuts and bolts. From crafting the frontend to the
              backend, pages, and all those special features—it&apos;s a
              one-person show dedicated to making your project stand out.
            </div>
          </div>
          <div className="border-solid w-[240px] border-first-color border rounded-md p-2">
            <h1 className="text-[16px] text-first-color font-semibold mb-1 ">
              05 Unveiling Your Creation
            </h1>
            <div className="text-white text-[13px]">
              The moment you&apos;ve been waiting for! I open the curtains and
              reveal your completed project. But it&apos;s not just a show—I
              hand you all the access you need. Take a stroll through your
              creation, kick the tires, and let me know if anything needs
              fine-tuning.
            </div>
          </div>
        </div>
      </section>
      {/* connect  */}
      <section className="md:w-[60%] w-[80%] mx-auto  mt-[9rem] pb-3 rounded-md  flex flex-col bg-first-color  gap-4">
        <h1 className="text-white text-center pt-4 md:text-[22px] text-[18px] lg:text-[28px]">
          Let&apos;s connect to start your project.
        </h1>
        <div className="w-full flex justify-center">
          <Link
            href={"/contact"}
            className="px-3 py-1 font-semibold text-center hover:scale-[1.1] transition-all duration-100 ease-linear text-white border-[2px] border-solid border-white rounded-md "
          >
            Connect
          </Link>
        </div>
      </section>
      {/* Endoresments  */}
      <section className="  mb-[10rem]">
        <h2
          className={`text-[23px] pt-[4rem] text-first-color md:text-[45px] overflow-y-hidden font-medium text-center ${Poppin.className}`}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Endorsements
        </h2>
        <div
          className="container 2xl:max-w-[1240px]  mx-auto p-4 relative"
          data-aos="zoom-in"
          data-aos-delay="10"
          data-aos-duration="1000"
        >
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 8000,
              disableOnInteraction: true,
            }}
            navigation={{
              nextEl: ".award-swiper-next",
              prevEl: ".award-swiper-prev",
            }}
            slidesPerView={1}
            spaceBetween={30}
          >
            {testimonial.map((elem: any, index: number) => {
              return (
                <>
                  <SwiperSlide key={index}>
                    <div className="bg-black border-first-color border-solid border  rounded-lg h-[280px] md:h-[350px]  overflow-hidden shadow-lg ">
                      <div className="p-6 md:flex md:flex-col md:justify-between h-full pb-4">
                        <p
                          className={`text-gray-300 text-sm md:text-lg  md:leading-[2.1rem] md:tracking-[3px] ${Poppin.className} line-clamp-6  md:line-clamp-none`}
                        >
                          {elem.message}
                        </p>
                        <button
                          className="bg-transparent border-first-color border border-solid text-first-color mt-3 px-2 py-1 rounded  cursor-pointer  md:hidden"
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
        <div className="fixed top-0 left-0 grid justify-center items-center  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full z-[10000] bg-[#00000099]">
          <div className="relative bg-black border-first-color border border-solid shadow-portfolio rounded-md balance w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative  rounded-lg shadow ">
              {/* <!-- Modal header --> */}
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold mb-1 text-first-color">
                  Endorsement
                </h3>
                <button
                  onClick={() => setActiveModal(null)}
                  className="text-white bg-transparent rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
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
              <div className="rounded-lg overflow-hidden shadow-lg skewElem">
                <div className="p-6 flex flex-col gap-7">
                  <p className="text-white text-md balance">
                    {modalData.message}
                  </p>
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
