import React from "react";
import app_store from "../public/app_store.png";
import play_store from "../public/play_store.png";

const AppDownload = () => {
  return (
    <div className="m-auto mt-16 text-center items-center mb-20 px-4 md:px-8 lg:px-16">
      <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
        For a better Experience, Download<br />
        FoodWing App
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 md:mt-10 gap-4 md:gap-6">
        <img
          className="hover:cursor-pointer hover:scale-105 transition duration-500 w-40 md:w-48 lg:w-56"
          src={app_store}
          alt="App Store"
        />
        <img
          className="hover:cursor-pointer hover:scale-105 transition duration-500 w-40 md:w-48 lg:w-56"
          src={play_store}
          alt="Play Store"
        />
      </div>
    </div>
  );
};

export default AppDownload;
