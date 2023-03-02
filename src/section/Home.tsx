import React from "react";
import HomeHeroImage from "../assets/home-hero.svg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
function Home() {
  return (
    <div className="home">
      <div className="bg-desaturated-black w-full text-desaturated-white px-8 flex justify-center flex-col items-start max-sm:gap-24 py-48 sm:grid sm:grid-cols-2 3xl:grid-cols-[60%_40%] sm:grid-rows-1 home_container">
        <img
          src={HomeHeroImage}
          alt=""
          className="w-full max-w-4xl sm:col-start-2 justify-self-start"
        />

        <div className="flex flex-col gap-4 sm:col-start-1 sm:row-start-1 max-w-4xl md:self-center lg:gap-8 justify-self-end">
          <h1 className="text-4xl font-semibold md:text-5xl 2xl:text-7xl 4xl:text-8xl">
            Transforming designs into web applications.
          </h1>
          <p className="text-lg opacity-80 md:text-xl lg:text-2xl xl:text-4xl">
            Proficient in building{" "}
            <span className="text-cyan">React TypeScript </span>
            web applications using clean reusable code and modern best
            practices.
          </p>
          <a
            href="/Aryan-Mehta-CV.pdf"
            download={true}
            className="h-10 px-6 font-light gap-8 w-fit bg-cyan uppercase text-sm tracking-widest rounded-lg flex items-center justify-between my-4"
          >
            download cv
            <ChevronRightIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
