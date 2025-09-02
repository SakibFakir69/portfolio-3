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

      <section className="grid  md:grid-cols-3 grid-cols-1 gap-x-10 gap-3 py-20">
        {
          <div className="border bg-white">
            <p className="text-center flex justify-center items-center gap-x-3">
              <img src={langause.icon} className="size-10" />
              <p className="font-semibold text-xl"> {langause.title}</p>
            </p>

            <hr />

           <div className="flex flex-wrap justify-center gap-x-5 mt-6 p-8">
             {langause.skill.map((item, key) => (
              <div key={key} className="flex flex-row">
                <img src={item.icon}/>
                <p className="border">{item.name}</p>
              </div>
            ))}
           </div>

          </div>
        }

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
                   <img src={item.icon}/>
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
                 <img src={item.icon}/>
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
                 <img src={item.icon}/>
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
