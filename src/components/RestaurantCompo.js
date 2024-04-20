import { CDN_URL } from "../utils/constants";

const RestaurantComponent = ({ resData }) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="Res-card image"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4> {/* Added join(" ") */}
      <h4 id="rating">{resData.info.avgRating} Rating</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantComponent;
