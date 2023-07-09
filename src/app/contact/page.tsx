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

type Props = {};

const Contact = ({}: Props) => {
  return (
    <>
      <section className="contact section container mx-auto mt-[10rem]">
        <h2 className="section__title  text-center text-h2 mb-8">
          Get In <span className="text-first-color">Touch</span>
        </h2>

        <div className="contact__container grid grid-cols-[4fr_8fr] gap-x-[18px] container ">
          <div className="contact__data">
            <h3 className="contact_title text-[28px] font-semibold mb-[1rem]">
              {" "}
              Dont be shy !
            </h3>
            <p className="contact__description text-[16px] leading-[1.6] mb-[20px]">
              Feel free to get in touch with me.I am always open to discussing
              new projects, creative ideas or oppportunities to be part of your
              visions.
            </p>
            <div className="contact__info mb-[20px] flex flex-col gap-x-[16px] text-first-color text-sm font-medium">
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
            <div className="social_info flex gap-[20px]">
              <Link
                href={"www.linkedin.com/in/harshgupta840"}
                target="_blank"
                className="social_link  !text-[26px] flex justify-center !text-first-color bg-container-color h-[45px] w-[45px] transition-all duration-[0.3s] ease-linear hover:!text-white hover:!bg-first-color rounded-[50%] !text-center items-center"
              >
                <FaLinkedin />
              </Link>
              <Link
                href={"#"}
                className="social_link !text-[26px] flex justify-center !text-first-color bg-container-color h-[45px] w-[45px] transition-all duration-[0.3s] ease-linear hover:!text-white hover:!bg-first-color rounded-[50%] !text-center items-center"
              >
                <FaGithub />
              </Link>
              <Link
                href={"#"}
                className="social_link !text-[26px] flex justify-center !text-first-color bg-container-color h-[45px] w-[45px] transition-all duration-[0.3s] ease-linear hover:!text-white hover:!bg-first-color rounded-[50%] !text-center items-center"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>

          <form action="" className="contact_form">
            <div className="form_input_group grid grid-cols-3 gap-3">
              <div className="form_input_div">
                <input
                  type="text"
                  placeholder="your name"
                  className="form__control border-solid border-container-color border-[1px]  bg-container-color text-title-color text-sm py-[12px] px-[24px] rounded-3xl transition-all duration-[0.3s] ease-linear focus:border-first-color"
                />
              </div>
              <div className="form_input_div">
                <input
                  type="text"
                  placeholder="your name"
                  className="form__control border-solid border-container-color border-[1px]  bg-container-color text-title-color text-sm py-[12px] px-[24px] rounded-3xl transition-all duration-[0.3s] ease-linear focus:border-first-color"
                />
              </div>
              <div className="form_input_div">
                <input
                  type="text"
                  placeholder="your name  "
                  className="form__control border-solid border-container-color border-[1px] bg-container-color text-title-color text-sm py-[12px] px-[24px] rounded-3xl transition-all duration-[0.3s] ease-linear focus:border-first-color"
                />
              </div>
            </div>
            <div className="form_input-div">
              <textarea
                placeholder="your message"
                className="form_control__textarea"
              ></textarea>
            </div>
            <button className="button inline-block text-title-color border-[1px] border-solid border-first-color p-[15px_70px_15px_35px] rounded-[35px] font-medium relative mb-10px">
              Send Message{" "}
              <span className="button_icon bg-first-color !text-white absolute right-0 w-[55px] rounded-[50%] top-[0px] bottom-[0px] text-center text-lg flex justify-center items-center">
                <FiSend />
              </span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
