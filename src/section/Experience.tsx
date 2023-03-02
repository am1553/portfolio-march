import React from "react";
import { experience } from "../constants/experience";

type CompanyExperiencePropTypes = {
  id: number;
  company_name: string;
  from: string;
  to: string;
  responsibility: string[];
};
function Experience() {
  const Header = () => {
    return (
      <h4 className="w-full relative uppercase tracking-widest ">
        <span className="opacity-30 font-light text-md md:text-lg">
          Experience
        </span>
      </h4>
    );
  };

  const CompanyExperience = ({
    data,
  }: {
    data: CompanyExperiencePropTypes;
  }) => {
    return (
      <div className="flex flex-col gap-2 max-w-md">
        <div className=""></div>
        <h1 className="font-bold text-2xl">{data.company_name}</h1>
        <span className="text-sm uppercase tracking-widest opacity-50">
          {data.from} - {data.to}
        </span>
        <p>
          {data.responsibility.map((resp, i) => (
            <p key={i}>{resp}</p>
          ))}
        </p>
      </div>
    );
  };

  return (
    <div className="w-full relative mx-auto py-48 px-8 bg-box-shadow-cyan text-desaturated-white">
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="py-24 flex flex-col gap-12 lg:flex-row">
          {experience.map((exp) => (
            <CompanyExperience key={exp.id} data={exp} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
