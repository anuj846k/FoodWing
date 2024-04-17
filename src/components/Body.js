import RestarurantComponent from "./RestaurantCompo";
// import reslist from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local state variables -super powerful Variables

  const [listofres, setListofRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);

    //Optional chaining
    setListofRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional rendering ->rendering based on some condition


  return (listofres.length===0? (<Shimmer/>): (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofres.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setListofRes(filteredList);
          }}

        >
          Top-Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        <div className="res-container">
          {listofres.map((restaurant) => (
            <RestarurantComponent
              key={restaurant.info.id}
              resData={restaurant}
            />
          ))}
        </div>
      </div>
    </div>
  ));
};

export default Body;
