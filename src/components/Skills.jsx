import React from "react";
function Skills() {
 
  return (
    <>
    <hr />
    <div
      name="Skills"
      className="w-full container mx-auto px-4 md:px-20 my-8 "
    >
        <h1 className="text-3xl font-bold text-white text-center mb-8">My Skills</h1>

       
       
         <div className="flex flex-col gap-7">    
               <div className="group relative overflow-hidden rounded-2xl p-[1px]">
                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-emerald-500/40 via-transparent to-cyan-500/40 blur-2xl" />
                 <div className="relative flex w-full flex-col justify-center  text-gray-300 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl shadow-2xl shadow-emerald-500/10 p-6 transform transition-transform duration-300 group-hover:-translate-y-1 ">
                    <h2 className="text-xl font-semibold text-green-400 mb-2">Programming Languages</h2>
                  <ul className="list-disc ">
                  <li>C++</li>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>Java</li>
                  </ul>
                 </div>
               </div>

               <div className="group relative overflow-hidden rounded-2xl p-[1px]">
                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-emerald-500/40 via-transparent to-cyan-500/40 blur-2xl" />
                 <div className="relative flex w-full flex-col justify-center  text-gray-300 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl shadow-2xl shadow-emerald-500/10 p-6 backdrop-blur-sm transform transition-transform duration-300 group-hover:-translate-y-1">
                    <h2 className="text-xl font-semibold text-green-400 mb-2">Wev Development</h2>
                  <ul className="list-disc ">
                    <li>HTML5</li>
                    <li>CSS & Tailwind</li>
                  <li>React.js</li>
                  <li>Node.js & Express.js</li>
                  <li>javaScript & TypeScript</li>
                  <li>MongoDB & SQL</li>
                  <li>RESTful APIs</li>
                  <li>Responsive Design</li>
                  <li>Git, GitHub</li>
                  <li>VS Code ,Postman</li>
                  </ul>
                 </div>
               </div>
         
         </div>
      </div>
    </>
  );
}

export default Skills;
