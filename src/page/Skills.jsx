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
      
    


      <section className="grid  md:grid-cols-3 grid-cols-1 gap-x-10 gap-3 py-20 bg-transparent">

        <GlowCard>
          <div
          className="  h-full w-full 
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
                className="flex flex-row items-center gap-x-2 border border-teal-300/30 rounded px-3 py-1 hover:border-teal-200 transition duration-150 delay-100"
              >
                <img src={item.icon} className="md:w-10 w-8 md:h-10 h-8" alt={item.name} />
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
           <div className="  p-1">

            <p className="text-center flex justify-center items-center gap-x-3 mt-4">
              <img src={frontend.icon} className="size-10" />
              <p className="font-semibold text-xl text-white">
                {frontend.title}
              </p>
            </p>

            

            <div className=" gap-x-5 mt-6 grid grid-cols-3 justify-center items-center  px-10 gap-y-6">
              {frontend.skill.map((item, key) => (
                <div key={key} className="border border-teal-300/10 hover:border-teal-50 flex flex-col justify-center items-center p-2 rounded transition duration-200 delay-75   ">
                  <img src={item.icon} className="md:w-10 w-8 md:h-10 h-8" />
                  <spand className="text-white block">{item.name}</spand>
                </div>
              ))}
            </div>
          </div>
         </GlowCard>
        }

        {/* backend */}

        {
         <GlowCard>
           <div className="  w-full">

            <p className="text-center flex justify-center items-center gap-x-3 mt-4">
              <img src={backend.icon} className="size-10" />
              <p className="font-semibold text-xl text-white">
                {" "}
                {backend.title}
              </p>
            </p>

           

            <div className=" gap-x-5 mt-6 grid grid-cols-3 justify-center items-center  px-10 gap-y-6">
              {backend.skill.map((item, key) => (
                <div key={key} className="border border-teal-300/10 hover:border-teal-50 flex flex-col justify-center items-center p-2 rounded transition duration-200 delay-75   ">
                  <img src={item.icon}  className="md:w-10 md:h-10 w-8 h-8"/>
                  <p className=" text-white">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
         </GlowCard>
        }

        {/* tools */}

        {
         <GlowCard>
           <div className=" w-full ">

            <p className="text-center flex justify-center items-center gap-x-3 mt-4">
              <img src={tools.icon} className="size-10" />
              <p className="font-semibold text-xl text-white"> {tools.title}</p>
            </p>

           

            <div className=" gap-x-5 mt-6 grid grid-cols-3 justify-center items-center  px-10 gap-y-6">
              {tools.skill.map((item, key) => (
                <div key={key} className="border border-teal-300/10 hover:border-teal-50 flex flex-col justify-center items-center p-2 rounded transition duration-200 delay-75   ">
                  <img src={item.icon}  className="w-8 h-8 md:w-10 md:h-10"/>
                  <p className=" text-white">{item.name}</p>
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
