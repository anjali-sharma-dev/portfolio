import React from "react";
import { FaLinkedin, FaGithub,FaDownload, FaUser } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { ReactTyped } from "react-typed";
import mern_img from "../assets/Mern.jpg"
function Home() {

  return (
    <div className="relative max-w-screen-2xl container mx-auto px-4 sm:px-6 md:px-10 my-12 md:my-20">
      <div className="pointer-events-none absolute -top-20 -right-10 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-green-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-gradient-to-tr from-green-500/15 via-emerald-500/15 to-cyan-500/15 blur-3xl" />

      <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 mt-10 md:mt-16 space-y-5 order-2 lg:order-1">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-sm font-medium text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            Hello, I'm
          </span>

          <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 tracking-tight">
            <ReactTyped
              strings={["ANJALI", "SHARMA"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>

          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-emerald-300/90">
            A Full Stack Developer
          </h2>

          <p className="text-sm md:text-base text-justify text-gray-300/90 leading-relaxed">
            I am a motivated tech enthusiast pursuing a Bachelor of Technology
            degree, with hands-on experience in full-stack development. My skills
            span across modern web technologies, databases, and practices for
            efficient application design. I have demonstrated strong problem-solving
            capabilities through competitive coding and innovative project
            contributions, including hackathon experiences and successful project
            implementations.
          </p>

          <div className="flex gap-4">
            <a aria-label="GitHub" href="https://github.com/anjali-sharma-dev" target="_blank" rel="noreferrer" className="group rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur hover:border-emerald-400/40 hover:bg-emerald-400/10 transition">
              <FaGithub className="text-2xl text-emerald-300 group-hover:text-emerald-200 transition" />
            </a>
            <a aria-label="LinkedIn" href="https://linkedin.com/in/anjali-sharma-dev" target="_blank" rel="noreferrer" className="group rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur hover:border-sky-400/40 hover:bg-sky-400/10 transition">
              <FaLinkedin className="text-2xl text-sky-300 group-hover:text-sky-200 transition" />
            </a>
            <a aria-label="LeetCode" href="https://leetcode.com/u/anjali-sharma26" target="_blank" rel="noreferrer" className="group rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur hover:border-orange-400/40 hover:bg-orange-400/10 transition">
              <SiLeetcode className="text-2xl text-orange-400 group-hover:text-orange-300 transition" />
            </a>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <a href="/Anjali_Sharma_Resume.pdf" download className="px-6 py-2 rounded-full text-white bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-500 hover:shadow-[0_0_28px_rgba(16,185,129,0.55)] hover:translate-y-[-1px] active:translate-y-0 transition-all duration-300 flex items-center gap-2">
              <FaDownload /> Get Resume
            </a>
          </div>

        </div>

   <div className="relative order-1 lg:order-2 w-full lg:w-1/2 flex justify-center items-center">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-emerald-500/25 via-cyan-500/20 to-green-500/25 blur-2xl" />
        <img
          src={mern_img}
          alt="MERN Stack"
          loading="lazy"
          className="w-64 sm:w-72 md:w-80 lg:w-[26rem] aspect-square rounded-full object-cover ring-2 ring-white/20 shadow-[0_10px_50px_rgba(16,185,129,0.25)] hover:shadow-[0_14px_60px_rgba(16,185,129,0.35)] transition-shadow duration-300"
        />
      </div>
    </div>


      </div>
    </div>
  );
}

export default Home;
