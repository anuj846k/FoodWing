//Making a custom Hook so that we can follow Single Responsibility Principle and keep our code clean and modular.
import { useEffect,useState } from "react";
import { MENU_API } from "./constants";


const useRestaurantMenu = (resId) => {
    const [resInfo, setResinfo] = useState(null);
    
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu=async()=>{
        try {
            const data=await fetch(MENU_API+resId);
            const json=await data.json();
            setResinfo(json.data);
            console.log(json.data);
        } catch (error) {
            console.error(error.message);
        }
    }
    return resInfo;
}
export default useRestaurantMenu;