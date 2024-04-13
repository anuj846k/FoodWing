import RestarurantComponent from "./RestaurantCompo";
import reslist from "../utils/mockdata";


const Body = () => {
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{console.log("clicked huraahh")}}>Top-Rated Restaurants</button> 

        </div>
        <div className="res-container">
          {reslist.map((restaurant) => (
            <RestarurantComponent key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };



export default Body;  