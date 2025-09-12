import React from "react";

function Education() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-20 my-16">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Education
      </h1>

      <div className="space-y-8">
        {/* B.Tech */}
        <div className="group relative overflow-hidden rounded-2xl p-[1px]">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-emerald-500/40 via-transparent to-cyan-500/40 blur-2xl" />
          <div className="relative bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 backdrop-blur-md transform transition-transform duration-300 group-hover:-translate-y-1">
            <h2 className="text-2xl font-semibold text-white">B.Tech (Computer Science)</h2>
            <p className="text-gray-300 mt-2">Dr. A.P.J. Abdul Kalam Technical University (AKTU)</p>
            <p className="text-gray-300">Year: 2022 – 2026</p>
            <p className="text-gray-300">CGPA: 7 (Till 6th Semester)</p>
          </div>
        </div>

        {/* Intermediate */}
        <div className="group relative overflow-hidden rounded-2xl p-[1px]">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-emerald-500/40 via-transparent to-cyan-500/40 blur-2xl" />
          <div className="relative bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 backdrop-blur-md transform transition-transform duration-300 group-hover:-translate-y-1">
            <h2 className="text-2xl font-semibold text-white">Intermediate (12th)</h2>
            <p className="text-gray-300 mt-2">CBSE</p>
            <p className="text-gray-300">Year: 2022</p>
            <p className="text-gray-300">Percentage: 70%</p>
          </div>
        </div>

        {/* High School */}
        <div className="group relative overflow-hidden rounded-2xl p-[1px]">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-emerald-500/40 via-transparent to-cyan-500/40 blur-2xl" />
          <div className="relative bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 backdrop-blur-md transform transition-transform duration-300 group-hover:-translate-y-1">
            <h2 className="text-2xl font-semibold text-gray-300">High School (10th)</h2>
            <p className="text-gray-300 mt-2">CBSE</p>
            <p className="text-gray-300">Year: 2020</p>
            <p className="text-gray-300">Percentage: 84%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
