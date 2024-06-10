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


// Function to fetch data using the proxy
const fetchData = async () => {
  try {
      const response = await fetch(
          "/api/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
          {
              method: 'GET',
              credentials: 'include', // Ensure cookies and credentials are sent with the request
              headers: {
                  'Content-Type': 'application/json'
              }
          }
      );

      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
};

// Example usage
fetchData();


    setListofRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return { listofres, filteredRestaurant,setFilteredRestaurant};


export default useFetchData;
