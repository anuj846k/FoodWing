import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { IoMdStar } from "react-icons/io";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo=useRestaurantMenu(resId);
  const [expandedItem, setExpandedItem] = useState(null);

  const { name, cuisines, costForTwoMessage, sla, avgRating } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="flex relative flex-col items-center">
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
      <div className="mt-3 w-3/5 pl-8 pr-8 mb-10 items-center border rounded-lg shadow-lg">
        <ul>
          {itemCards &&
            itemCards.map((item) => (
              <li key={item.card.info.id} className="border-b py-3">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-gray-800">
                      {item.card.info.name}
                    </span>
                    <span className="text-black-600 mb-2 font-semibold">
                      Rs.{" "}
                      {item.card.info.price / 100 ||
                        item.card.info.defaultPrice / 100}
                    </span>
                    <span className="text-gray-600 mr-16">
                      {expandedItem === item.card.info.id ? (
                        <>
                          {item.card.info.description}
                          <span
                            className="text-orange-500 cursor-pointer"
                            onClick={() => setExpandedItem(null)}
                          >
                            {" "}
                            Less
                          </span>
                        </>
                      ) :  item.card.info.description && item.card.info.description.length > 10? (
                        <>
                          {item.card.info.description.substring(0,100)}...
                          <span
                            className="text-orange-500 cursor-pointer "
                            onClick={() => setExpandedItem(item.card.info.id)}
                          >
                            {" "}
                            More
                          </span>
                        </>
                      ) : (
                        item.card.info.description
                      )}
                    </span>
                  </div>
                 <div className="flex flex-col">
                 <img
                    src={CDN_URL + item.card.info.imageId}
                    alt="Item Image"
                    className="w-44 h-32 mt-4 object-cover rounded-xl"
                  />
                  <button className="font-bold text-green-600 px-3 py-2 bg-white rounded-lg shadow-lg mb-4 mt-4 hover:bg-gray-200 hover:transform hover:scale-105 hover:shadow-md">ADD</button>
                 </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
