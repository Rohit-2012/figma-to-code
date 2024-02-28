import React from "react";
import { governmentSites, responsibilities, squares } from "../assets/images";
import ResponsibilityCard from "../components/ResponsibilityCard";

const SocialResponsibility = () => {
  return (
    <section>
      <div className="flex items-center justify-center gap-3 text-sm">
        <span>SAIL CORPORATE</span>
        <div className="w-[25rem] border-b border-black h-0"></div>
        <span>SOCIAL RESPONSIBILTY</span>
        <div className="w-[25rem] border-b border-black h-0"></div>
        <span>RESPONSIBILITY</span>
          </div>
          
          <div className="flex justify-between p-14 items-center">
              <div className="flex flex-col gap-10">
                  <h2 className="text-4xl font-semibold">Corporate Social Responsibility</h2>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, amet obcaecati</span>
              </div>
              <img src={squares} className="w-36"/>
          </div>

          <div className="flex gap-8 px-14">
              {
                  responsibilities.map(responsibility => (
                      <ResponsibilityCard key={responsibility.name} image={responsibility.image} name={responsibility.name}/>
                  ))
              }
          </div>
    </section>
  );
};

export default SocialResponsibility;
