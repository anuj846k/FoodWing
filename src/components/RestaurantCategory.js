  import ItemList from "./itemList";
import { TiArrowSortedDown } from "react-icons/ti";

const RestaurantCategory = ({ info,showItems,setShowIndex}) => {
  const handleChange=()=>{
    setShowIndex();
  }
  
  return (
    <div className="w-full md:w-9/12 mx-auto p-5 m-5 rounded-lg shadow-sm">
      <div className="p-5 ">
        <div className="flex justify-between  items-center cursor-pointer" onClick={handleChange}>
          <h2 className="text-xl font-bold text-gray-800">
            {info.title} ({info.itemCards.length})
          </h2>
          <span className="text-gray-500">
            <TiArrowSortedDown className={`${showItems ? 'transform rotate-180' : ''}`} size={30} />
          </span>
        </div>
        {showItems && <ItemList item={info.itemCards} />} 

        {/* if showitems is true then only show items which is menu categories here...if not then vice versa */}
      </div>
    </div>
  );
};

export default RestaurantCategory;