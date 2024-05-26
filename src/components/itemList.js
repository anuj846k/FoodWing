import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { useState } from "react";
import { addItem, removeItem } from '../utils/cartSlice'; // assuming you have a removeItem action

const ItemList = ({ item }) => {
  const dispatch = useDispatch();

  // State to track the count of each item
  const [itemCounts, setItemCounts] = useState({});

  const handleAddItem = (item) => {
    const itemId = item.card.info.id;
    // Dispatch an action to add the item to the cart
    dispatch(addItem(item));
    // Update the item count state
    setItemCounts(prevCounts => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 0) + 1
    }));
  };

  const handleRemoveItem = (item) => {
    const itemId = item.card.info.id;
    // Dispatch an action to remove the item from the cart
    dispatch(removeItem(item));
    // Update the item count state
    setItemCounts(prevCounts => ({
      ...prevCounts,
      [itemId]: Math.max((prevCounts[itemId] || 0) - 1, 0) // Prevent negative count
    }));
  };

  const [expandedItem, setExpandedItem] = useState(null);

  return (
    <div className="mt-3 pl-8 pr-8 mb-10 overflow-hidden">
      <ul>
        {item &&
          item.map((item) => {
            const itemId = item.card.info.id;
            const itemCount = itemCounts[itemId] || 0;
            return (
              <li key={itemId} className="border-b">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="flex flex-col mb-4 md:mb-0">
                    <span className="md:text-lg font-semibold text-gray-800">
                      {item.card.info.name}
                    </span>
                    <span className="text-black-600 mb-2 font-semibold">
                      Rs.{" "}
                      {item.card.info.price / 100 ||
                        item.card.info.defaultPrice / 100}
                    </span>
                    <span className="text-gray-600 mr-16  w-full md:w-3/4" >
                      {item.card.info.description &&
                        (expandedItem === itemId ||
                        item.card.info.description.length <= 100) ? (
                        <>
                          {item.card.info.description}
                          {item.card.info.description.length > 100 && (
                            <span
                              className="text-green-500 cursor-pointer"
                              onClick={() => setExpandedItem(null)}
                            >
                              {" "} Less
                            </span>
                          )}
                        </>
                      ) : (
                        <>
                          {item.card?.info?.description?.substring(0, 110)}...
                          <span
                            className="text-orange-500 cursor-pointer"
                            onClick={() => setExpandedItem(itemId)}
                          >
                            {" "} More
                          </span>
                        </>
                      )}
                    </span>
                  </div>
                  <div className="flex flex-col relative mb-14">
                    <div className="w-48 h-44 mt-4 rounded-xl overflow-hidden">
                      <img
                        src={CDN_URL + item.card.info.imageId}
                        alt="Item Image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {itemCount > 0 ? (
                      <div className="flex items-center justify-center absolute ml-5  bottom-0 text-green-600 px-10 py-2 bg-white rounded-lg shadow-lg -mb-7">
                        <button onClick={() => handleRemoveItem(item)} className="font-bold text-red-600 px-2">-</button>
                        <span className="px-2">{itemCount}</span>
                        <button onClick={() => handleAddItem(item)} className="font-bold text-green-600 px-2">+</button>
                      </div>
                    ) : (
                      <button onClick={() => handleAddItem(item)} className="font-bold absolute ml-10 bottom-0 text-green-600 px-10 py-2 bg-white rounded-lg shadow-lg -mb-7 hover:bg-gray-200 hover:transform hover:scale-105 hover:shadow-md">
                        ADD
                      </button>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ItemList;