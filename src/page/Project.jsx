import React from "react";
import { projectData } from "@/utils/projectData";
function Project() {
  return (
    <div className="min-h-screen ">
      <section className="py-30 px-10   ">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 ">
          {projectData.map((project) => (

          <div key={project.id} className=" rounded border mt-3 p-2">
            <img src={project.photo} className="h-auto  w-full object-cover  "/>
            <p className="text-blue-500 md:text-2xl text-xl font-semibold">{project.title} </p>
            <p className="text-white">{project.description.slice(0,100)}....</p>

             <div  className=" text-white flex flex-wrap  gap-x-3 gap-y-3 p-3">

            {
              project?.techStacK.map((stack,key)=>(
              
                  <span key={key} className="text-white border p-2 rounded">{stack}</span>
              
              ))
            }
            </div>
            <button className="text-black h-10 w-40 rounded bg-white ">Read More</button>
          </div>
        ))}
        </div>

      </section>
    </div>
  );
}

export default Project;
