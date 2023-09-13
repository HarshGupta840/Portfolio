import React from "react";
import HeroSection from "./component/home";
type Props = {};

const Home = ({}: Props) => {
  return (
    <>
      <section className="max-w-[100vw] overflow-x-hidden">
        <HeroSection />
      </section>
    </>
  );
};

export default Home;
