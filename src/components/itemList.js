import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { useState } from "react";
import {addItem} from '../utils/cartSlice'

const ItemList = ({ item }) => {
  
  const dispatch=useDispatch();


  const handleAdditem = (item) => {

    //Dispatch an action
    dispatch(addItem(item));
    
    
  }

  
  const [expandedItem, setExpandedItem] = useState(null);
  
  return (
    <div className="mt-3 pl-8 pr-8 mb-10 overflow-hidden">
      <ul>
        {item &&
          item.map((item) => (
            <li key={item.card.info.id} className="border-b">
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
                    {item.card.info.description &&
                      (expandedItem === item.card.info.id ||
                      item.card.info.description.length <= 100) ? (
                      <>
                        {item.card.info.description}
                        {item.card.info.description.length > 100 && (
                          <span
                            className="text-green-500 cursor-pointer"
                            onClick={() => setExpandedItem(null)}
                          >
                            {" "}
                            Less
                          </span>
                        )}
                      </>
                    ) : (
                      <>
                        {item.card?.info?.description?.substring(0, 110)}...
                        <span
                          className="text-orange-500 cursor-pointer"
                          onClick={() => setExpandedItem(item.card.info.id)}
                        >
                          {" "}
                          More
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

                  <button onClick={()=>handleAdditem(item)} className="font-bold absolute ml-10 bottom-0 text-green-600 px-10 py-2 bg-white rounded-lg shadow-lg -mb-7 hover:bg-gray-200 hover:transform hover:scale-105 hover:shadow-md">
                    ADD
                  </button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ItemList;
