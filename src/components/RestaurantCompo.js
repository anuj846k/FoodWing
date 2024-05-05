import { CDN_URL } from "../utils/constants";
import { IoIosStar } from "react-icons/io";



const RestaurantComponent = (props) => {
  const {resData}=props;

  
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  }=resData?.info;


  //Function to truncate Text to certain no of words for the cuisines specially
  
  const truncateText = (text, limit) => {
    const words = text.split(" ");
    return words.slice(0, limit).join(" ");
  };

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="Res-card image"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{truncateText(cuisines.join(", "),6)}</h4>
      <h4 id="rating"> <IoIosStar />    
         {avgRating} Rating</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantComponent;