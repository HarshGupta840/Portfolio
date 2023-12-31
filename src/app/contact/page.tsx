"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { Balancer } from "react-wrap-balancer";

type Props = {};

const Contact = ({}: Props) => {
  // ANIMATION FUNCTION
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="contact section 2xl:max-w-[1250px] md:h-[80vh] container mx-auto md:mt-[6rem] lg:mt-[8rem] mb-[6rem] px-6 sm:px-0">
        <h2
          data-aos="zoom-out"
          data-aos-duration="1000"
          aos-delay="1000"
          className="section__title  text-center text-h2 mb-8"
        >
          Get In <span className="text-first-color">Touch</span>
        </h2>

        <div className="contact__container grid sm:grid-rows-[1fr_1fr] lg:grid-rows-none lg:grid-cols-[5fr_7fr] gap-y-[60px] lg:gap-x-[18px] container ">
          <div className="contact__data">
            <h3
              data-aos="zoom-in"
              data-aos-delay="30"
              data-aos-duration="1000"
              className="contact_title overflow-y-hidden text-[28px] font-semibold mb-[1rem] text-center sm:text-left"
            >
              {" "}
              Dont be shy !
            </h3>
            <p
              data-aos="zoom-in"
              data-aos-delay="40"
              data-aos-duration="1000"
              className="contact__description overflow-y-hidden text-title-color text-[16px] leading-[1.6] mb-[10px]"
            >
              <Balancer />
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or oppportunities to be part of your
              visions.
            </p>
            <div
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="contact__info overflow-y-hidden flex flex-col gap-x-[16px] text-first-color text-sm font-medium"
            >
              <div className="info__item mb-[20px] flex !items-center gap-x-[16px]">
                <FaEnvelopeOpen className="info_icon text-first-color text-[30px]" />
                <div>
                  <span className="info__title text-[16px]">Mail me</span>
                  <h4 className="info_decs font-medium text-[18px]">
                    harsh840gupta@gmail.com
                  </h4>
                </div>
              </div>
              <div className="info__item mb-[20px] flex items-center gap-x-[16px]">
                <FaPhoneSquareAlt className="info_icon !text-first-color !text-[30px]" />
                <div>
                  <span className="info__title text-[16px]">Call me</span>
                  <h4 className="info_decs font-medium text-[18px]">
                    +91 8103732300
                  </h4>
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-out"
              data-aos-delay="60"
              data-aos-duration="1000"
              className="z-10 overflow-y-hidden"
            >
              <Link
                className="font-medium text-[18px] z-10"
                href={"https://calendly.com/harshgupta840g/introductory-call"}
                target="_blank"
                replace
              >
                <p className="border-[1px] active:scale-[0.9] transition-all  z-10 text-title-color rounded-xl  hover:bg-transparent placeholder:transition-all duration-200 ease-linear border-solid border-first-color bg-first-color px-4 py-3 w-auto inline-block">
                  Lets have a meet {">>"}
                </p>
              </Link>
            </div>
            <div
              data-aos="zoom-in-out"
              data-aos-delay="70"
              data-aos-duration="1000"
              className="social_info flex gap-[20px] mt-4 overflow-y-hidden"
            >
              <Link
                href={"https://www.linkedin.com/in/harshgupta840"}
                target="_blank"
                replace
                className="social_link z-10 !text-[26px] flex justify-center !text-first-color bg-container-color h-[45px] w-[45px] transition-all duration-[0.3s] ease-linear hover:!text-white hover:!bg-first-color rounded-[50%] !text-center items-center"
              >
                <FaLinkedin />
              </Link>
              <Link
                href={"https://www.github.com/harshgupta840"}
                target="_blank"
                replace
                className="social_link z-10 !text-[26px] flex justify-center !text-first-color bg-container-color h-[45px] w-[45px] transition-all duration-[0.3s] ease-linear hover:!text-white hover:!bg-first-color rounded-[50%] !text-center items-center"
              >
                <FaGithub />
              </Link>
              <Link
                href={
                  "https://instagram.com/harshgupta080?igshid=ZGUzMzM3NWJiOQ=="
                }
                target="_blank"
                replace
                className="social_link z-10 !text-[26px] flex justify-center !text-first-color bg-container-color h-[45px] w-[45px] transition-all duration-[0.3s] ease-linear hover:!text-white hover:!bg-first-color rounded-[50%] !text-center items-center"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>

          <form
            action={"https://formspree.io/f/xyyqvlvk"}
            method="POST"
            className="contact_form"
          >
            <div className="form_input_group grid grid-rows-1 sm:grid-cols-3 place-items-center z-50 gap-3">
              <div
                data-aos="zoom-in"
                data-aos-delay="20"
                data-aos-duration="1000"
                className="form_input_div w-[100%] sm:w-auto z-10 overflow-y-hidden"
              >
                <input
                  name="name"
                  required
                  type="text"
                  autoComplete="off"
                  placeholder="Your name"
                  className="form__control border-solid  border-container-color border-[1px]  bg-container-color text-title-color text-sm py-[12px] px-[24px] rounded-3xl w-[100%] transition-all duration-[0.3s] ease-linear focus:border-first-color"
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="30"
                data-aos-duration="1000"
                className="form_input_div w-[100%] overflow-y-hidden sm:w-auto z-10"
              >
                <input
                  type="email"
                  required
                  autoComplete="off"
                  name="email"
                  placeholder="Your email"
                  className="form__control w-[100%] border-solid border-container-color border-[1px]  bg-container-color text-title-color text-sm py-[12px] px-[24px] rounded-3xl transition-all duration-[0.3s] ease-linear focus:border-first-color"
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="40"
                data-aos-duration="1000"
                className="form_input_div w-[100%] overflow-y-hidden sm:w-auto z-10"
              >
                <input
                  type="number"
                  required
                  name="contact"
                  placeholder="Your Contact "
                  className="form__control w-[100%] z-10 border-solid border-container-color border-[1px] bg-container-color text-title-color text-sm py-[12px] px-[24px] rounded-3xl transition-all duration-[0.3s] ease-linear focus:border-first-color"
                />
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="form_input-div my-[3rem] overflow-y-hidden"
            >
              <textarea
                placeholder="Your message"
                autoComplete="off"
                className="form_control__textarea z-[1000] opacity-100 border-solid border-container-color border-[1px]  bg-container-color text-title-color text-sm py-[12px] px-[24px] rounded-3xl transition-all duration-[0.3s] ease-linear focus:border-first-color w-[100%] min-h-[220px] max-h-[220px]"
              ></textarea>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="70"
              data-aos-duration="1000"
              className="flex justify-center sm:justify-start overflow-y-hidden"
            >
              <button
                type="submit"
                value="send"
                className="button active:scale-[0.9] transition-all duration-100 ease-linear inline-block text-title-color mb-1 border-[1px] border-solid border-first-color p-[15px_70px_15px_35px] rounded-[35px] font-medium relative mb-10px"
              >
                Send Message{" "}
                <span className="button_icon bg-first-color !text-white absolute right-0 w-[55px] rounded-[50%] top-[0px] bottom-[0px] text-center text-lg flex justify-center items-center">
                  <FiSend />
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
