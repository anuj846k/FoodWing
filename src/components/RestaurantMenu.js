import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { IoMdStar } from "react-icons/io";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);


  const [showIndex,setShowIndex] =useState();

  const handleSetShowIndex = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  const { name, cuisines, costForTwoMessage, sla, avgRating } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="flex relative flex-col items-center mb-40">
      <div className="rounded-2xl p-3 w-1/2  m-5">
        <div className="flex justify-between items-center border p-4 rounded-lg shadow-md">
          <div className="left">
            <h1 className="text-3xl font-bold text-black-700">{name}</h1>
            <h3 className="text-lg font-semibold flex items-center text-black-600 mt-2">
              <IoMdStar className="text-green-500" />
              <span className="text-lg font-semibold text-black ml-1">
                {avgRating} Rating
              </span>
            </h3>
            <h3 className="text-sm text-orange-500 underline mt-1">
              {cuisines.join(", ")}
            </h3>
          </div>
          <div className="right">
            <h3 className="text-lg font-semibold text-black-600">
              {costForTwoMessage}
            </h3>
            <h4 className="text-sm text-gray-500 mt-1">
              {sla.deliveryTime} minutes
            </h4>
          </div>
        </div>
      </div>
      <h2 className=" flex text-4xl font-serif font-bold items-center underline pl-2 m-5">
        <MdOutlineRestaurantMenu />
        MENU
        <MdOutlineRestaurantMenu />
      </h2>
      {categories && categories.length > 0 ? (
        categories.map((category,index) => (
          // Controlled component as parent is controlling the state
          <RestaurantCategory
            key={category?.card?.card.title}
            info={category?.card?.card}
            showItems={index===showIndex}
            setShowIndex={()=>handleSetShowIndex(index)}
          />
        ))
      ) : (
        <p className="text-gray-500 text-lg">Menu not available</p>
      )}
    </div>
  );
};
export default RestaurantMenu;
