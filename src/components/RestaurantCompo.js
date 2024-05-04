import { CDN_URL } from "../utils/constants";

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


  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="Res-card image"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4 id="rating">{avgRating} Rating</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantComponent;
