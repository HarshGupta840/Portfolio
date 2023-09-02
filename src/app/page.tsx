import React from "react";
import styles from "./styles.module.css";
import HeroSection from "./home/page";
import About from "./about/page";
import Portfolio from "./portfolio/page";
import Contact from "./contact/page";
import Glitch from "./component/glitch";

type Props = {};

const Home = ({}: Props) => {
  return (
    <>
      <HeroSection />
      {/* <About /> */}
      {/* <Portfolio /> */}
      <Contact />
      {/* <Glitch /> */}
    </>
  );
};

export default Home;
