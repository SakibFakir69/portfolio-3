"use client";

import React, { useState, useEffect } from "react";
import SlideInView from "./slide-in";
import DecryptingView from "./decrypting";
import { DecryptingText } from "./decrypting";
import ShimmerButton from "./button";

const GridBackground = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const x = clientX - window.innerWidth / 2;
      const y = clientY - window.innerHeight / 2;
      setMousePosition({
        x,
        y,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden transition-transform duration-300 ease-out"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        animation: "moveGrid 20s linear infinite",
        transform: `translate(${mousePosition.x / 30}px, ${
          mousePosition.y / 30
        }px)`,
      }}
    >
      {}
      <div className="absolute top-1/2 left-1/2 w-[60vmin] h-[60vmin] bg-cyan-500/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      {}
      <style>
        {`
          @keyframes moveGrid {
            0% { background-position: 0 0; }
            100% { background-position: 80px 80px; }
          }
        `}
      </style>
    </div>
  );
};
export default function GridBackgroundView() {
  return (
    <div className="relative w-full h-screen bg-slate-950">
      <GridBackground />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 w-full">
          <SlideInView></SlideInView>

          
          <div className="flex w-full justify-center gap-x-4 mt-4">
           
           <button className="md:px-16 px-10 md:py-3 py-2 rounded bg-white font-semibold hover:bg-transparent hover:text-white border transform delay-100 border-gray-300/20">Project</button>

           <button className="md:px-16 px-10 md:py-3 py-2 rounded text-white hover:bg-black font-semibold border border-amber-50/20 bg-transparent transform duration-75 delay-100">Resume</button>
        
          
          </div>
        </div>
      </div>
    </div>
  );
}
