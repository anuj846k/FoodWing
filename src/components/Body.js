import { useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchData from "../utils/useFetchData";
import RestaurantCard from "./RestaurantCompo";
import Footer from "./Footer";

const Body = () => {
  const [search, setSearch] = useState("");
  const { listofres, filteredRestaurant, setFilteredRestaurant } = useFetchData();
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1 className="text-red-500 text-center mt-8">
        Looks like You are Offline ❗❗Please check your internet connection🛜
      </h1>
    );
  }

  return listofres.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col items-center m-4">
      <div className="flex items-center justify-end w-full mb-6">
        <div className="Search md:flex mr-2 hidden ">
          <input
            type="text"
            className="border border-orange-500 px-4 py-2 rounded-md focus:outline-none focus:border-orange-500"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded-md ml-2"
            onClick={() => {
              const filteredRestaurant = listofres.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn px-4 py-2 bg-yellow-400 text-white rounded-md"
          onClick={() => {
            const filteredList = listofres.filter(
              (restaurant) => restaurant?.info?.avgRating > 4.4||
                              restaurant.info?.avgRating > 4.1   
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top-Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
