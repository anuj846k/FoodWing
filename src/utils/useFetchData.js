// This is custom Hook for Body component that fetches the data from the api.

import { useEffect, useState } from "react";

const useFetchData = () => {
  const [listofres, setListofRes] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  //whenever state variables update ,react triggers a reconciliation cycle (re-renders the component)
  console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    const data = await fetch(
      "https://swiggato-server.onrender.com/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setListofRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return { listofres, filteredRestaurant,setFilteredRestaurant};
};

export default useFetchData;
