import React from "react";
import { LOGO_URL } from "../utils/constants";
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
          <p className="mt-4 text-center text-sm">FoodWing: Where Every Meal Takes Flight</p>
          <div className="flex justify-around w-full mt-4">
            <FaFacebook className="mx-2 cursor-pointer" size={24} />
            <FaTwitter className="mx-2 cursor-pointer" size={24} />
            <FaInstagram className="mx-2 cursor-pointer" size={24} />
            <FaLinkedin className="mx-2 cursor-pointer" size={24} />
          </div>
        </div>
        <div className="flex flex-col items-center mb-8 lg:mb-0">
          <h2 className="font-bold text-3xl mb-4">Company</h2>
          <ul className="text-sm list-none list-inside">
            <li>Home</li>
            <li>About us</li>   
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-center mb-8 lg:mb-0">
          <h2 className="font-bold text-3xl mb-4">GET IN TOUCH</h2>
          <ul className="text-sm list-none list-inside">
            <li>+1-233-388-3838</li>
            <li>contact@foodWing.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full my-8 border-gray-500"/>
      <p className="text-center text-sm">© 2024 <span className="text-orange-400">FoodWing</span>. All Rights Reserved, Made by anuj</p>
    </footer>
  );
};

export default Footer;
