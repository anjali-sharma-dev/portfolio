import React from "react";
import { FaLinkedin, FaGithub,FaDownload, FaUser } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { ReactTyped } from "react-typed";
import coding from "../assets/coding.jpeg"
function Home() {

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 sm:px-6 md:px-10 my-12 md:my-20">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 mt-10 md:mt-16 space-y-4 order-2 lg:order-1">
          <span className="text-2xl text-green-400 font-bold">Hello, I'm</span>

          <div className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400">
            <ReactTyped
              strings={["ANJALI", "SHARMA"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>

          <h2 className="text-lg sm:text-xl text-green-400 font-semibold">
            A Full Stack Developer
          </h2>

          <p className="text-sm md:text-base text-justify text-gray-300 leading-relaxed">
            I am a motivated tech enthusiast pursuing a Bachelor of Technology
            degree, with hands-on experience in full-stack development. My skills
            span across modern web technologies, databases, and practices for
            efficient application design. I have demonstrated strong problem-solving
            capabilities through competitive coding and innovative project
            contributions, including hackathon experiences and successful project
            implementations.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5">
            <a href="https://github.com/anjali-sharma-dev" target="_blank" rel="noreferrer">
              <FaGithub className="text-2xl text-green-400 hover:text-emerald-300 hover:scale-110 transition-all duration-200" />
            </a>
            <a href="https://linkedin.com/in/anjali-sharma-dev" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-2xl text-blue-400 hover:text-blue-300 hover:scale-110 transition-all duration-200" />
            </a>
            <a href="https://leetcode.com/u/anjali-sharma26" target="_blank" rel="noreferrer">
              <SiLeetcode className="text-2xl text-orange-500 hover:text-orange-300 hover:scale-110 transition-all duration-200" />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            {/* <a
              // href={handleContactClick}
              className="bg-transparent border-2 border-gray-400 px-5 py-2 rounded-full text-white hover:bg-gary-200 duration-300 flex items-center gap-2"
              
            > 
              <FaUser /> Contact Me
            </a> */}
            <a href="/Anjali_Sharma_Resume.pdf" download className="px-6 py-2 rounded-full text-white bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-300 flex items-center gap-2">
              <FaDownload /> Get Resume
            </a>
          </div>

        </div>

        {/* RIGHT SIDE - Code Editor Style Box */}
        <div className="w-full lg:w-1/2 mb-10 md:mb-0">
          <div className="relative bg-[#0e0f1b] border border-white/10 rounded-2xl p-4 sm:p-5 text-sm text-green-300 w-full max-w-xl mx-auto shadow-xl shadow-emerald-500/10">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
            <img src={coding} loading="lazy" decoding="async" className="rounded-xl object-cover w-full h-auto" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
