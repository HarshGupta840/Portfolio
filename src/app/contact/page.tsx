"use client";
import Link from "next/link";
import React from "react";
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
  return (
    <>
      <section className="contact section 2xl:max-w-[1250px] container mx-auto md:mt-[6rem] lg:mt-[8rem] mb-[6rem] px-6 sm:px-0">
        <h2 className="section__title  text-center text-h2 mb-8">
          Get In <span className="text-first-color">Touch</span>
        </h2>

        <div className="contact__container grid sm:grid-rows-[1fr_1fr] lg:grid-rows-none lg:grid-cols-[5fr_7fr] gap-y-[60px] lg:gap-x-[18px] container ">
          <div className="contact__data">
            <h3 className="contact_title text-[28px] font-semibold mb-[1rem] text-center sm:text-left">
              {" "}
              Dont be shy !
            </h3>
            <p className="contact__description text-title-color text-[16px] leading-[1.6] mb-[10px]">
              <Balancer />
              Feel free to get in touch with me.I am always open to discussing
              new projects, creative ideas or oppportunities to be part of your
              visions.
            </p>
            <div className="contact__info flex flex-col gap-x-[16px] text-first-color text-sm font-medium">
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
            <div>
              <Link
                className="font-medium text-[18px]"
                href={"https://calendly.com/harshgupta840g/introductory-call"}
                target="_blank"
                replace
              >
                <p className="border-[1px] text-title-color rounded-xl  hover:bg-transparent placeholder:transition-all duration-200 ease-linear border-solid border-first-color bg-first-color px-4 py-3 w-auto inline-block">
                  Lets have a meet {">>"}
                </p>
              </Link>
            </div>
            <div className="social_info flex gap-[20px] mt-4">
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

          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="contact_form"
          >
            <div className="form_input_group grid grid-rows-1 sm:grid-cols-3 place-items-center gap-3">
              <div className="form_input_div w-[100%] sm:w-auto">
                <input
                  type="text"
                  placeholder="Your name"
                  className="form__control border-solid border-container-color border-[1px]  bg-container-color text-title-color text-sm py-[12px] px-[24px] rounded-3xl w-[100%] transition-all duration-[0.3s] ease-linear focus:border-first-color"
                />
              </div>
              <div className="form_input_div w-[100%] sm:w-auto">
                <input
                  type="text"
                  placeholder="Your email"
                  className="form__control w-[100%] border-solid border-container-color border-[1px]  bg-container-color text-title-color text-sm py-[12px] px-[24px] rounded-3xl transition-all duration-[0.3s] ease-linear focus:border-first-color"
                />
              </div>
              <div className="form_input_div w-[100%] sm:w-auto">
                <input
                  type="text"
                  placeholder="Your Contact "
                  className="form__control w-[100%] border-solid border-container-color border-[1px] bg-container-color text-title-color text-sm py-[12px] px-[24px] rounded-3xl transition-all duration-[0.3s] ease-linear focus:border-first-color"
                />
              </div>
            </div>
            <div className="form_input-div my-[3rem]">
              <textarea
                placeholder="Your message"
                className="form_control__textarea border-solid border-container-color border-[1px]  bg-container-color text-title-color text-sm py-[12px] px-[24px] rounded-3xl transition-all duration-[0.3s] ease-linear focus:border-first-color w-[100%] min-h-[220px] max-h-[220px]"
              ></textarea>
            </div>
            <div className="flex justify-center sm:justify-start">
              <button className="button inline-block text-title-color border-[1px] border-solid border-first-color p-[15px_70px_15px_35px] rounded-[35px] font-medium relative mb-10px">
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
