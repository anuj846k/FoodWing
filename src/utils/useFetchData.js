import { useEffect, useState } from "react";
import axios from "axios";
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
    try {
      const response = await axios.get(Fetch_res);
      const data = response.data;
      console.log(data);
      const restaurants = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListofRes(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return { listofres, filteredRestaurant, setFilteredRestaurant };
};

export default useFetchData;
