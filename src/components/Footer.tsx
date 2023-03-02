import React from "react";
import { GitHub } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { ChevronRight } from "@mui/icons-material";
function Footer() {
  const Header = () => {
    return (
      <h4 className="w-full relative uppercase tracking-widest ">
        <span className="opacity-30 font-light text-md md:text-lg">
          Contact Me
        </span>
      </h4>
    );
  };

  const GithubLink = () => {
    return (
      <a
        href="https://github.com/am1553"
        className="flex gap-4 justify-between max-w-xs"
        target={"_blank"}
      >
        <GitHub />
        <span className="justify-start flex-1">Github</span>
        <ChevronRight />
      </a>
    );
  };
  const LinkedInLink = () => {
    return (
      <a
        href="https://www.linkedin.com/in/am161/"
        target={"_blank"}
        className="flex gap-4 justify-between max-w-xs"
      >
        <LinkedIn />
        <span className="justify-start flex-1">LinkedIn</span>
        <ChevronRight />
      </a>
    );
  };

  const DownloadCV = () => {
    return (
      <a
        href="/Aryan-Mehta-CV.pdf"
        download={true}
        className="h-12 w-full flex items-center justify-center max-w-xs bg-cyan uppercase tracking-widest rounded-lg px-4"
      >
        Download cv
      </a>
    );
  };

  return (
    <footer className="w-full mx-auto py-48 px-8 bg-desaturated-black text-desaturated-white relative">
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="py-24 flex flex-col gap-12 ">
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
            <ul className="text-white text-md uppercase font-light opacity-80 flex flex-col gap-10 justify-center lg:flex-row lg:items-center lg:justify-evenly lg:flex-1">
              <GithubLink />
              <LinkedInLink />
            </ul>
            <DownloadCV />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
