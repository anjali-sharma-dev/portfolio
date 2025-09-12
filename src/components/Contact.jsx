import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  return (
    <>
    <hr />
      <div
        name="Contact"
        className="w-full container mx-auto px-4 sm:px-6 md:px-20 my-12 md:my-16"
      >
        <h1 className="text-3xl font-bold text-center text-white mb-5">Get In Touch</h1>
    

        <div className="flex flex-col items-center justify-center ">
          <form
            className="border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md w-full max-w-xl px-6 sm:px-8 py-6 rounded-2xl shadow-2xl shadow-emerald-500/10"
          >
          

            {/* Name */}
            <div className="flex flex-col mb-4">
              <label className="bloc text-white">Full Name</label>
              <input
                className="rounded-lg border border-white/20 bg-transparent py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col mb-4">
              <label className="block text-white">Email Address</label>
              <input
    
                className="rounded-lg border border-white/20 bg-transparent py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
                placeholder="Enter your email"
              />
             
            </div>

            {/* Message */}
            <div className="flex flex-col mb-4">
              <label className="block text-white">Message</label>
              <textarea
                rows={4}
                className="rounded-lg border border-white/20 bg-transparent py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
                placeholder="Enter your message"
              />
              
            </div>

            <button
              type="submit"
              className="px-6 py-2 rounded-full text-white bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-300 flex items-center gap-2"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
