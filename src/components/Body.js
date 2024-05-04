import RestaurantComponent from "./RestaurantCompo";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchData from "../utils/useFetchData";
import Skeleton from "react-loading-skeleton";

const Body = () => {
  //Local state variables -super powerful Variables

  const [search, setSearch] = useState("");
  const {listofres,filteredRestaurant,setFilteredRestaurant}=useFetchData();
 

//This is a custom hook that is imported 
  const onlineStatus=useOnlineStatus();


  if(onlineStatus===false) return(
    <h1>Looks like You are Offline ❗❗Please check your internet connection🛜</h1>
  )
  

  //conditional rendering ->rendering based on some condition

  return listofres.length === 0 ? (
    <Shimmer/>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="Search">
          <input
            type="text"
            className="search-box"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log(search);
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
          className="filter-btn"
          onClick={() => {
            const filteredList = listofres.filter(
              (restaurant) => restaurant?.info?.avgRating > 4.2
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top-Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        <div className="res-container">
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant?.info?.id}
            >
              <RestaurantComponent resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;