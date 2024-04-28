import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResinfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    // console.log(json);
    setResinfo(json.data);
  };

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};
  console.log(itemCards);

  return resInfo === null ? (
    <Shimmer /> 
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h3>{costForTwoMessage}</h3>

      <h2>Menu</h2>
      <ul>
        {itemCards &&
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs.
              {item.card.info.price / 100 ||item.card.info.defaultPrice/100}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
