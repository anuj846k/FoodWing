import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { GiNinjaHeroicStance } from "react-icons/gi";


import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start">
        <div className="flex flex-col items-center mb-8 lg:mb-0">
          <img
            className="w-24 h-24 rounded-full border-4 border-orange-500 hover:scale-110 transform transition duration-300"
            src={LOGO_URL}
            alt="Logo"
          />
          <p className="mt-4 text-center text-sm lg:text-base">FoodWing: Where Every Meal Takes Flight</p>
          <div className="flex justify-around w-full mt-4">
            <FaFacebook className="mx-2 cursor-pointer" size={24} />
            <FaTwitter className="mx-2 cursor-pointer" size={24} />
            <FaInstagram className="mx-2 cursor-pointer" size={24} />
            <FaLinkedin className="mx-2 cursor-pointer" size={24} />
          </div>
        </div>
        <div className="flex flex-col items-center mb-8 lg:mb-0">
          <h2 className="font-bold text-xl lg:text-3xl mb-4">Company</h2>
          <ul className="text-sm lg:text-base list-none list-inside text-center lg:text-left">
            <li className="mb-2 lg:mb-0">Home</li>
            <li className="mb-2 lg:mb-0">About Us</li>
            <li className="mb-2 lg:mb-0">grocery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-center mb-8 lg:mb-0">
          <h2 className="font-bold text-xl lg:text-3xl mb-4">Get in Touch</h2>
          <ul className="text-sm lg:text-base list-none list-inside text-center lg:text-left">
            <li className="mb-2 lg:mb-0">+1-233-388-3838</li>
            <li>contact@foodWing.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full my-8 border-gray-500" />
      <p className="text-center text-sm lg:text-base">© 2024 <span className="text-orange-400">FoodWing</span>. All Rights Reserved </p>
      <p className="text-center font-bold">~ Made by anuj846k <GiNinjaHeroicStance size={35} className="inline-block text-white -500 ml-1"/></p>
    </footer>
  );
};

export default Footer;
