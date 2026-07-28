"use client";

import React from "react";

export default function USFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={`rounded-[3px] overflow-hidden shrink-0 shadow-2xs ${className}`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#bd3d44" d="M0 0h640v480H0z" />
        <path
          fill="#fff"
          d="M0 36.9h640v36.9H0zm0 73.8h640v36.9H0zm0 73.9h640v36.9H0zm0 73.8h640v36.9H0zm0 73.9h640v36.9H0zm0 73.8h640v36.9H0z"
        />
        <path fill="#192f5d" d="M0 0h280v258.5H0z" />
        <g fill="#fff">
          <g id="s18">
            <g id="s9">
              <g id="s5">
                <polygon id="s" points="20,13.8 22.4,21.3 16.1,16.7 23.9,16.7 17.6,21.3" />
                <use href="#s" x="40" />
                <use href="#s" x="80" />
                <use href="#s" x="120" />
                <use href="#s" x="160" />
              </g>
              <use href="#s" x="200" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
