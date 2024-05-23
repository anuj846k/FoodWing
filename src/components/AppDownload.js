import React from "react";
import app_store from "../public/app_store.png";
import play_store from "../public/play_store.png";

const AppDownload = () => {
  return (
    <div className="m-auto mt-28 text-center items-center mb-40">
      <p className="text-5xl font-bold ">
        For better Experience Download<br />
        FoodWing App
      </p>
      <div className="flex justify-center mt-10 gap-6 ">
        <img className="hover:cursor-pointer hover:scale-[1.05] transition duration-500" src={app_store} alt="" />
        <img className="hover:cursor-pointer hover:scale-[1.05] transition duration-500" src={play_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
