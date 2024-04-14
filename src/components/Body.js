import RestarurantComponent from "./RestaurantCompo";
import reslist from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  //Local state variables -super powerful Variables

  const [listofres,setListofRes]=useState(reslist);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList=listofres.filter((res) => res.info.avgRating > 4.5);
            setListofRes(filteredList);
          }}
        >

          Top-Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofres.map((restaurant) => (
          <RestarurantComponent key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
