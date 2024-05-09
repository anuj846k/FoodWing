import { useState } from "react";
import ItemList from "./itemList";
import { TiArrowSortedDown } from "react-icons/ti";

const RestaurantCategory = ({ info }) => {
  const [showitems, setShowItems] = useState(false);
  const handleChange = () => {
    setShowItems(!showitems);
  };
  return (
    <div className="w-full md:w-9/12 mx-auto p-5 m-5 rounded-lg shadow-sm">
      <div className="p-5 ">
        <div className="flex justify-between  items-center cursor-pointer" onClick={handleChange}>
          <h2 className="text-xl font-bold text-gray-800">
            {info.title} ({info.itemCards.length})
          </h2>
          <span className="text-gray-500">
            <TiArrowSortedDown className={`${showitems ? 'transform rotate-180' : ''}`} size={30} />
          </span>
        </div>
        {showitems && <ItemList item={info.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;