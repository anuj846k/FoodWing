import { useEffect, useState } from "react";
import { Fetch_res } from "./constants";

const useFetchData = () => {
  const [listofres, setListofRes] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  //whenever state variables update, React triggers a reconciliation cycle (re-renders the component)
  console.log("body rendered");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Fetch_res);
    const json = await data.json();
    console.log(json);
    setListofRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return { listofres, filteredRestaurant, setFilteredRestaurant };
};

export default useFetchData;
