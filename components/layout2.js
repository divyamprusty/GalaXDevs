/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function layout2() {
  return (
    <section
      className="text-gray-600 body-font overflow-hidden"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <img
              alt="blog"
              src="https://media.discordapp.net/attachments/872351236559605810/877987190997680168/DIVYAM.jpg?width=663&height=663"
              className="w-40 h-40 rounded-full flex-shrink-0 object-cover object-center"
            />
            <br />
            <p className="leading-relaxed mb-8 dark:text-gray-400 ">
              I am Divyam Prusty, a high-schooler at Delhi Public School R.K.
              Puram. I like to build different kinds of projects. I have a keen
              interest in Comp. Sc. and tech. I am willing to pursue major in
              Computer Science in my undergrad and want to become a DevOp.
            </p>
            <div className="flex dark:border-gray-800 items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
              <a
                className="text-indigo-700 inline-flex items-center dark:text-blue-700 "
                href="https://github.com/divyamprusty"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWIdth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <a className="inline-flex items-center">
              <span className="flex-grow flex flex-col">
                <span className="title-font font-medium text-gray-900 dark:text-white ">
                  DIVYAM PRUSTY
                </span>
                <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                  UI DEVELOPER
                </span>
              </span>
            </a>
          </div>
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <img
              alt="blog"
              src="https://images-ext-1.discordapp.net/external/TFUcM9sDVxkmi00__mbAsEG4h1vm02YfjMl4-YKEkYU/%3Fwidth%3D568%26height%3D610/https/media.discordapp.net/attachments/863776406537240576/868184486293147748/Garv.jpg"
              className="w-40 h-40 rounded-full flex-shrink-0 object-cover object-center"
            />
            <br />
            <p className="leading-relaxed mb-8 dark:text-gray-400 ">
              I am Garv Jain, a high schooler at DPS RK Puram. I am passionate
              about computer science and technology. I like to build projects
              using programming and I also have a keen interest in product
              design and robotics. I want to pursue majors in Computer Science
              after high school and become a software developer.
            </p>
            <div className="flex dark:border-gray-800 items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
              <a
                className="text-indigo-700 inline-flex items-center dark:text-blue-700 "
                href="https://github.com/GarvJain03"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWIdth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <a className="inline-flex items-center">
              <span className="flex-grow flex flex-col">
                <span className="title-font font-medium text-gray-900 dark:text-white ">
                  GARV JAIN
                </span>
                <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                  DESIGNER | UI DEVELOPER
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
