import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faBolt,
  faMoneyBill,
  faWheelchair,
} from "@fortawesome/free-solid-svg-icons";

export default function layout1() {
  return (
    <div id="layout1">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-700 tracking-widest font-medium title-font mb-1">
              CUSTOMER SATISFACTION
            </h2>
            <h1 className="dark:text-white sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Our Ethos
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div
              className="p-4 md:w-1/3"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div
                className="flex rounded-lg h-full bg-gray-100 p-8 flex-col dark:bg-gray-800 dark:bg-opacity-60"
                style={{
                  filter:
                    "drop-shadow(0px 2px 2px #4338CA) drop-shadow(0px 1px 1px #4338CA) drop-shadow(0px 2px 2px #4338CA) drop-shadow(0px 2px 2px #4338CA)",
                }}
              >
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-700 text-white flex-shrink-0">
                    <FontAwesomeIcon icon={faWheelchair} />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium dark:text-white">
                    Accessible
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base dark:text-gray-400">
                    R2D2 has been developed and programmed by the top engineers
                    of the galaxy. Whether you are a elementary schooler or an
                    office worker, it can serve as your companion in every
                    aspect.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="p-4 md:w-1/3"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div
                className="flex rounded-lg h-full bg-gray-100 p-8 flex-col dark:bg-gray-800 dark:bg-opacity-60"
                style={{
                  filter:
                    "drop-shadow(0px 2px 2px #4338CA) drop-shadow(0px 1px 1px #4338CA) drop-shadow(0px 2px 2px #4338CA) drop-shadow(0px 2px 2px #4338CA)",
                }}
              >
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-700 text-white flex-shrink-0">
                    <FontAwesomeIcon icon={faBolt} />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium dark:text-white">
                    Efficient
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base dark:text-gray-400">
                    Artoo can assist you in every task possible. It is efficient
                    and will never step back from serving and always watching
                    over you.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="p-4 md:w-1/3"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div
                className="flex rounded-lg h-full bg-gray-100 p-8 flex-col dark:bg-gray-800 dark:bg-opacity-60"
                style={{
                  filter:
                    "drop-shadow(0px 2px 2px #4338CA) drop-shadow(0px 1px 1px #4338CA) drop-shadow(0px 2px 2px #4338CA) drop-shadow(0px 2px 2px #4338CA)",
                }}
              >
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-700 text-white flex-shrink-0">
                    <FontAwesomeIcon icon={faMoneyBill} />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium dark:text-white">
                    Economical
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base dark:text-gray-400">
                    Worrying whether is it affordable or not? We have got you
                    covered. R2D2 has been placed at an optimal cost while
                    delivering quality to its users. Special offers for students
                    and seniors citizens are also available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
