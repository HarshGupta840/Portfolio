import Image from "next/image";
import React from "react";
import Profile from "../../../public/assets/home.jpg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Balancer from "react-wrap-balancer";
import Text from "../component/textAnimation";
type Props = {};

const Home = ({}: Props) => {
  return (
    <>
      <section className="hone relative section grid gap-[20px] grid-cols-[1fr] md:grid-cols-[4.32fr_7.68fr] items-center  h-[100vh] md:px-[15px] lg:p-[10px] xl:p-[40px] overflow-hidden ">
        <Image
          quality={100}
          src={Profile}
          alt="home_images"
          className="h-[80%] object-contain rounded-[30px] shadow-[0_0_8px_hsla(0_0%_0%_0.3)] z-[1] hidden md:inline-block"
        />
        <div className="home__content flex flex-col text-center md:text-left">
          <div className="home__data lg:max-w-[550px] xl:max-w-[650px] 2xl:max-w-[720px] lg:mx-auto  p-[15px]">
            <h1 className="home__title md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-[26%] md:before:w-[48px] md:before:h-[5px] rounded-lg before:bg-first-color relative sm:text[26px] md:text-[34px] lg:text-[37px] xl:text-[48px] md:pl-[65px]">
              <span className="block text-first-color text-[25px] sm:text-[30px] md:text-[40px] lg:text-[46px] 2xl:text-h1">
                I am Harsh Gupta.
              </span>
              <Text />
            </h1>
            <p className="hero__description leading-loose mx-32px my-[16px] mb-[40px] text-[13px] md:text-[15px] xl:text[19px] 2xl:text-[22px]">
              <Balancer>
                Experienced MERN Stack and Next.js developer with 1 years of
                experience. Skilled in building robust web applications,
                utilizing MongoDB, Express.js, React, and Node.js. Proficient in
                front-end development, responsive design, and API integration.
                Committed to delivering high-quality code and exceeding client
                expectations.
              </Balancer>
            </p>

            <Link
              href={"/about"}
              className="inline-block text-title-color border-[1px] border-solid border-first-color p-[15px_70px_15px_35px] rounded-[35px] font-medium relative mb-10px"
            >
              {" "}
              More About Me{" "}
              <span className="button__icon bg-first-color !text-white absolute right-0 w-[55px] rounded-[50%] top-[0px] bottom-[0px] text-center text-lg flex justify-center items-center">
                <FaArrowRight className="" />
              </span>
            </Link>
          </div>
        </div>
        <div className="color_block hidden md:inline-block absolute bg-first-color w-[100%] h-[100%] left-[-80%]"></div>
      </section>
    </>
  );
};

export default Home;
