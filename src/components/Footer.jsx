import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
    <hr />
      <footer className="py-12 text-white">
          <div className=" flex flex-col items-center justify-center w-full container mx-auto px-4 md:px-20">

            <div className="flex gap-4">
              <FaFacebook size={24} className="text-gray-300 hover:text-emerald-300 transition-all duration-200 transform hover:-translate-y-0.5 hover:scale-110 cursor-pointer" />
              <FaTwitter size={24} className="text-gray-300 hover:text-emerald-300 transition-all duration-200 transform hover:-translate-y-0.5 hover:scale-110 cursor-pointer" />
              <FaInstagram size={24} className="text-gray-300 hover:text-emerald-300 transition-all duration-200 transform hover:-translate-y-0.5 hover:scale-110 cursor-pointer" />
              <FaLinkedinIn size={24} className="text-gray-300 hover:text-emerald-300 transition-all duration-200 transform hover:-translate-y-0.5 hover:scale-110 cursor-pointer" />
            </div>

            <div className=" items-center">
              <p className="text-sm pt-4">
                &copy; 2025 Anjali Sharma.&nbsp;&nbsp;&nbsp;&nbsp;All rights reserved.
              </p>
            </div>
          </div>
      </footer>
    </>
  );
}

export default Footer;
