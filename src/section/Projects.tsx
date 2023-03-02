import React from "react";
import { projects } from "../constants/projects";

type ProjectType = {
  id: number;
  name: string;
  description: string[];
  tags: string[];
  mobileImage: string;
  laptopImage: string;
  live: string;
  code: string;
};

function Projects() {
  const Header = () => {
    return (
      <h4 className="bg-desaturated-white w-full py-12 relative uppercase tracking-widest ">
        <span className="opacity-30 font-light text-md md:text-lg">
          Projects
        </span>
      </h4>
    );
  };

  const Project = ({ data }: { data: ProjectType }) => {
    const { name, description, tags, mobileImage, laptopImage, live, code } =
      data;
    return (
      <div className="flex flex-col gap-36">
        <div className="relative bg-desaturated-white">
          <img src={laptopImage} alt="" />
          <img
            src={mobileImage}
            alt=""
            className="absolute top-1/3 -right-[50px]"
          />
        </div>
        <div className="bg-desaturated-white h-full list-none flex flex-col gap-4">
          <h3 className="text-2xl font-bold">{name}</h3>
          <ul className="flex-1 h-full ">
            {description.map((desc, i) => (
              <li key={i} className="text-md">
                {desc}
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-2 w-4/5 my-2">
            {tags.map((tag, i) => (
              <span className="px-4 p-2 border text-xs rounded-md" key={i}>
                {tag}
              </span>
            ))}
          </ul>

          <div className="flex gap-8 my-4">
            <a
              className="uppercase text-sm  tracking-widest px-6 py-2 bg-cyan text-desaturated-white"
              href={data.live}
              target="_blank"
            >
              live
            </a>
            <a
              className="uppercase text-sm tracking-widest px-6 py-2 bg-cyan text-desaturated-white"
              href={data.code}
              target="_blank"
            >
              code
            </a>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className=" max-w-7xl mx-auto projects py-48 px-8">
      <Header />

      <div className="relative flex flex-col max-md:gap-48 md:gap-24 md:grid md:grid-cols-2 md:grid-rows-2">
        {projects.map((project) => (
          <Project key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
