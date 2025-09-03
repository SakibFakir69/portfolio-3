import { MagicCard } from "@/components/magicui/magic-card";
import { skillData } from "@/utils/skillData";
import React from "react";
import { useLocation } from "react-router";

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

        <MagicCard
         
          gradientColor="#FF6B6B"
          gradientSize={200}
        >
          <div className="  bg-black h-full w-full min-h-[250px]
           rounded-lg p-4 flex flex-col items-center gap-y-4">

            {/* Header */}
            <div className="flex items-center gap-x-3 h-full ">
              <img
                src={langause.icon}
                className="w-10 h-10"
                alt="Language Icon"
              />
              <span className="font-semibold text-xl border">{langause.title}</span>

            </div>

            <hr className="w-full border-gray-300" />

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-5 mt-4">
              {langause.skill.map((item, key) => (
                <div
                  key={key}
                  className="flex items-center gap-x-2 border border-gray-300 rounded px-3 py-1"
                >
                  <img src={item.icon} className="w-6 h-6" alt={item.name} />
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </MagicCard>

        {/* front-end */}

        {
          <div className="border bg-white">
            <p className="text-center flex justify-center items-center gap-x-3">
              <img src={frontend.icon} className="size-10" />
              <p className="font-semibold text-xl">{frontend.title}</p>
            </p>

            <hr />

            <div className="flex flex-wrap justify-center gap-x-5 mt-6 p-8">
              {frontend.skill.map((item, key) => (
                <div key={key} className="border">
                  <img src={item.icon} />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        }

        {/* backend */}

        {
          <div className="border bg-white">
            <p className="text-center flex justify-center items-center gap-x-3">
              <img src={backend.icon} className="size-10" />
              <p className="font-semibold text-xl"> {backend.title}</p>
            </p>

            <hr />

            <div className="flex flex-wrap justify-center gap-x-5 mt-6 p-8">
              {backend.skill.map((item, key) => (
                <div key={key}>
                  <img src={item.icon} />
                  <p className="border">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        }

        {/* tools */}

        {
          <div className="border bg-white">
            <p className="text-center flex justify-center items-center gap-x-3">
              <img src={tools.icon} className="size-10" />
              <p className="font-semibold text-xl"> {tools.title}</p>
            </p>

            <hr />

            <div className="flex flex-wrap justify-center gap-x-5 mt-6 p-8">
              {tools.skill.map((item, key) => (
                <div key={key}>
                  <img src={item.icon} />
                  <p className="border">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        }
      </section>
    </div>
  );
}

export default Skills;
