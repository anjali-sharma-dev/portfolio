import React from "react";
import { FaGithub } from "react-icons/fa";

const Card = ({ children }) => (
  <div className="group relative overflow-hidden rounded-2xl p-[1px] transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20">
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-emerald-500/40 via-transparent to-cyan-500/40 blur-2xl" />
    <div className="relative bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 backdrop-blur-md transform transition-transform duration-300 group-hover:-translate-y-1">
      {children}
    </div>
  </div>
);

const CardContent = ({ children }) => <div>{children}</div>;

const projects = [
  {
    title: "Direct Market Access for Farmers",
    tech: "MERN Stack",
    description:
      "A full-stack platform where farmers can list crops, buy/sell equipment, and make payments.",
    features: [
      "Farmer registration and login",
      "Crop and equipment management",
      "Secure payment integration",
    ],
    github: "#",
  },
  {
    title: "DSA Tracker Web App",
    tech: "React, Node.js, MongoDB, JWT",
    description:
      "Track your DSA progress with daily questions, topic-wise lists, and a profile dashboard.",
    features: [
      "Login/signup",
      "Topic-wise questions",
      "Solved/unsolved tracking",
    ],
    github: "#",
  },
  {
    title: "Personal Portfolio Website",
    tech: "React, TailwindCSS, Vite",
    description:
      "My professional portfolio showcasing skills, education, and projects.",
    features: [
      "Responsive design",
      "CV download & contact section",
      "Dark/light theme",
    ],
    github: "#",
  },
  {
    title: "Employee Expense Tracker",
    tech: "MERN Stack",
    description:
      "Track and manage employee expenses with filters and analytics.",
    features: ["Add/view/edit expenses", "Filter by date", "Simple dashboard"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <>
      <hr />
      <div className="px-6 my-8 bg-transparent text-white">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          My Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardContent>
                <h2 className="text-xl font-semibold mb-2 text-green-400 group-hover:text-emerald-300 transition-colors duration-300">{project.title}</h2>
                <p className="text-sm text-gray-300 mb-2">
                  Tech Stack: {project.tech}
                </p>
                <p className="mb-3 text-gray-400">{project.description}</p>
                <ul className="list-disc list-inside text-sm text-gray-400 mb-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="transition-all duration-200 group-hover:translate-x-1">{feature}</li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-400 hover:text-emerald-300 hover:underline transition-colors"
                  >
                    <FaGithub /> Github
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
