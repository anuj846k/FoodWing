import { useEffect, useState } from "react";

const useFetchData = () => {
  const [listofres, setListofRes] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  //whenever state variables update, React triggers a reconciliation cycle (re-renders the component)
  console.log("body rendered");

  useEffect(() => {
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

        setListofRes(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurant(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return { listofres, filteredRestaurant, setFilteredRestaurant };
};

export default useFetchData;
