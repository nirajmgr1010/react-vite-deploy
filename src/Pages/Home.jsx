import React from "react";
import aaa from "../assets/images/smiling-businessman.jpg";
import { Typewriter } from "react-simple-typewriter";

export const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between bg-gray-100 px-6 py-10">
      {/* Left */}
      <div className="flex-1 mb-10 lg:mb-0">
        <h1 className="text-3xl font-bold text-sky-500 mb-4">
          Hi! It's{" "}
          <span className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            KUL SHINGH RANA MAGAR
          </span>
        </h1>

        <h3 className="text-xl lg:text-2xl font-medium text-gray-500 mb-6">
          <Typewriter
            words={["Web Developer", "Wordpress Developer", "Java programmer"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1000}
          />
        </h3>

        <p className="py-4 text-gray-700 text-justify">
            I am a passionate Backend Developer who loves building secure,
          scalable and high-performance web applications. I enjoy solving
          real-world problems using modern technologies and clean code
          practices.
        </p>

        <button className="shadow-2xl bg-sky-500 px-4 py-2 rounded-md text-white mt-4">
          Hire Me!
        </button>
      </div>

      {/* Right */}
      <div className="flex-1 flex justify-center">
        <img
          src={aaa}
          alt="imgmy"
          className="shadow-2xl rounded-[5%] max-w-full h-auto"
        />
      </div>
    </div>
  );
};
