import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import { CDN_URL } from "../utils/constants";


const RestaurantMenu = () => {
  const [resInfo, setResinfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResinfo(json.data);
    console.log(json);
  };

  const { name, cuisines, costForTwoMessage, sla, avgRating } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu-container">
      <div className="menu-home">
        <div className="left">
          <h1 className="restaurant-name">{name}</h1>
          <h3>{avgRating} ratings</h3>
          <h3 className="cuisine-info">{cuisines.join(", ")}</h3>
        </div>
        <div className="right">
          <h3 className="cuisine-info">{costForTwoMessage}</h3>
          <h4 className="delivery-time">{sla.deliveryTime} minutes</h4>
        </div>
      </div>
      <h2 className="menu-heading">Menu</h2>
      <div className="menu-item-list-container">
    <ul className="menu-item-list">
        {itemCards &&
            itemCards.map((item) => (
                <li className="menu-item" key={item.card.info.id}>
                    <div className="menu-item-details">
                        <div className="menu-item-name-and-price">
                            <span className="menu-item-name">{item.card.info.name}</span>
                            <span className="menu-item-price">- Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                        </div>
                        <span className ="item-description">{item.card.info.description}</span>
                    </div>
                    <img src={CDN_URL+item.card.info.imageId} alt="Image"/>
                </li>
            ))}
    </ul>
</div>

    </div>
  );
};

export default RestaurantMenu;
