import { MagicCard } from "@/components/magicui/magic-card";
import { skillData } from "@/utils/skillData";
import React from "react";
import { useLocation } from "react-router";
import { ShineBorder } from "@/components/magicui/shine-border";
import GlowCard from "@/components/ui/spotlight-card";
function Skills() {
  const location = useLocation().pathname;

  const data = skillData;

  const langause = skillData[0];

  const frontend = skillData[1];
  const backend = skillData[2];
  const tools = skillData[3];

  return (
    <div className={`${location === "/skill" && " py-20"} min-h-screen p-10`}>
      <h1 className="text-white">My skill</h1>
    


      <section className="grid  md:grid-cols-3 grid-cols-1 gap-x-10 gap-3 py-20 bg-transparent">

        <GlowCard>
          <div
          className="  bg-black h-full w-full 
           rounded-lg p-4 flex flex-col items-center gap-y-4"
        >
           
          {/* Header */}
          <div className="flex items-center   ">
            <img
              src={langause.icon}
              className="w-10 h-10"
              alt="Language Icon"
            />
            <span className="font-semibold text-xl  text-white">
              {langause.title}
            </span>
          </div>
          <hr className="opacity-50" />
          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-5 mt-4">
            {langause.skill.map((item, key) => (
              <div
                key={key}
                className="flex items-center gap-x-2 border border-gray-300 rounded px-3 py-1"
              >
                <img src={item.icon} className="w-6 h-6" alt={item.name} />
                <span className="text-sm font-medium text-white">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        </GlowCard>

        {/* front-end */}

        {
         <GlowCard>
           <div className=" bg-black p-1">

            <p className="text-center flex justify-center items-center gap-x-3 mt-4">
              <img src={frontend.icon} className="size-10" />
              <p className="font-semibold text-xl text-white">
                {frontend.title}
              </p>
            </p>

            <hr className="opacity-50 text-white mt-1" />

            <div className="flex flex-wrap justify-center gap-x-5 mt-6 p-8">
              {frontend.skill.map((item, key) => (
                <div key={key} className="border">
                  <img src={item.icon} />
                  <p className="text-white">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
         </GlowCard>
        }

        {/* backend */}

        {
         <GlowCard>
           <div className=" bg-black w-full">

            <p className="text-center flex justify-center items-center gap-x-3 mt-4">
              <img src={backend.icon} className="size-10" />
              <p className="font-semibold text-xl text-white">
                {" "}
                {backend.title}
              </p>
            </p>

            <hr className="opacity-50" />

            <div className="flex flex-wrap justify-center gap-x-5 mt-6 p-8">
              {backend.skill.map((item, key) => (
                <div key={key}>
                  <img src={item.icon} />
                  <p className="border text-white">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
         </GlowCard>
        }

        {/* tools */}

        {
         <GlowCard>
           <div className=" bg-black w-full ">

            <p className="text-center flex justify-center items-center gap-x-3 mt-4">
              <img src={tools.icon} className="size-10" />
              <p className="font-semibold text-xl text-white"> {tools.title}</p>
            </p>

            <hr className="opacity-50" />

            <div className="flex flex-wrap justify-center gap-x-5 mt-6 p-8">
              {tools.skill.map((item, key) => (
                <div key={key}>
                  <img src={item.icon} />
                  <p className="border text-white">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
         </GlowCard>
        }
      </section>
    </div>
  );
}

export default Skills;
