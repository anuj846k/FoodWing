import { CDN_URL } from "../utils/constants";
import { IoIosStar } from "react-icons/io";

const RestaurantComponent = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  // Function to truncate Text to a certain number of words for the cuisines specially
  const truncateText = (text, limit) => {
    const words = text.split(" ");
    return words.slice(0, limit).join(" ");
  };

  const getRatingColor=(rating)=>{
    return rating<4? "text-red-500" : "text-yellow-500";
  };
  
  return (
    <div className="h-[400px] w-[270px] m-4 p-4 shadow-md rounded-lg  bg-white transition transform ease-in-out hover:shadow-lg hover:scale-105">
      <img
        className="h-44 w-full object-cover rounded-t-lg "
        alt="Res-card image"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <h4 className="text-sm text-gray-600 mb-2">
          {truncateText(cuisines.join(", "), 6)}
        </h4>
        <div className={`flex items-center ${getRatingColor(avgRating)} mb-2`}>
          <IoIosStar className="mr-1" />
          <span className="text-sm">{avgRating} Rating</span>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
          <span>{costForTwo}</span>
          <span>{sla.deliveryTime} mins</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantComponent;
