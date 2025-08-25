'use client';

import React from 'react';
export default function ShimmerButton() {
  const customCss = `
    /* This is the key to the seamless animation.
      The @property rule tells the browser that '--angle' is a custom property
      of type <angle>. This allows the browser to smoothly interpolate it
      during animations, preventing the "jump" at the end of the loop.
    */
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }

    /* The keyframe animation simply transitions the --angle property
      from its start (0deg) to its end (360deg).
    */
    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `;
  return (<div className="flex items-center justify-center font-sans">
      <style>{customCss}</style>
      <button className="relative inline-flex items-center justify-center p-[1.5px] bg-gray-700 dark:bg-black rounded-full overflow-hidden ">

        <div className="absolute inset-0 " style={{
          background: 'conic-gradient(from var(--angle), transparent 25%, #06b6d4, transparent 50%)',
          animation: 'shimmer-spin 2.5s linear infinite'
        }} />

        <span className="relative z-10 inline-flex items-center justify-center w-full h-full px-10 py-3  dark:text-white bg-black text-white dark:bg-gray-900 rounded
        
        group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors duration-300">
          Shimmer Button
        </span>

        
      </button>
    </div>
  );
}