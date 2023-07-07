import Image from "next/image";
import React from "react";
import Profile from "../../../public/assets/home.jpg";
import Link from "next/link";
type Props = {};

const Home = ({}: Props) => {
  return (
    <>
      <section className="hone section grid gap-[30px] grid-cols-[4.32fr_7.68fr] items-center  h-[100vh] p-[40px]">
        <Image
          src={Profile}
          alt="home_images"
          className="h-[100%] object-cover rounded-[30px] shadow-[0_0_8px_hsla(0_0%_0%_0.3)]"
        />
        <div className="home__content">
          <div className="home__data max-w-[650px] mx-auto p-[15px]">
            <h1 className="home__title before:content-[''] before:absolute before:left-0 before:top-[26%] before:w-[48px] before:h-[5px] rounded-lg before:bg-first-color relative text-h1 pl-[70px]">
              <span className="block text-first-color">I am Harsh Gupta.</span>
              Web Developer
            </h1>
            <p className="hero__description leading-loose mx-32px my-16px">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              architecto sunt, dolorem, qui corrupti ut id harum laboriosam
              earum fuga, a distinctio! Ullam totam soluta velit beatae culpa
              dignissimos repudiandae magnam, blanditiis mollitia, deleniti quos
              vero voluptatibus praesentium cupiditate. Consectetur?
            </p>

            <Link href={"/about"}>
              {" "}
              MoreAbout Me <span className="button__icon">icon</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
