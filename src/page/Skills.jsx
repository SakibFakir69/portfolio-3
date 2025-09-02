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
    <div className={`${location === "/skill" && " py-20"} h-screen p-10`}>
      <h1 className="text-white">My skill</h1>


    <section className="grid  grid-cols-3 gap-x-10 gap-3 py-20">
      
      {
        <div className="border bg-white">
          <p className="text-center">
            <img src={langause.icon}/> {langause.title}
          </p>
          <hr/>

          {langause.skill.map((item, key) => (
            <div key={key}>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      }

      {/* front-end */}

      {
        <div className="border bg-white">
          <p className="text-center">
            {frontend.icon} {frontend.title}
          </p>

          <hr/>

          {frontend.skill.map((item, key) => (
            <div key={key}>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      }


      {/* backend */}

       {
        <div className="border bg-white">
          <p className="text-center">
            {backend.icon} {backend.title}
          </p>

          <hr/>

          {backend.skill.map((item, key) => (
            <div key={key}>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      }

      {/* tools */}

       {
        <div className="border bg-white">
          <p className="text-center">
            {tools.icon} {tools.title}
          </p>

          <hr/>

          {tools.skill.map((item, key) => (
            <div key={key}>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      }
    </section>



    </div>
  );
}

export default Skills;
