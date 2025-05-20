import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constant";
const useRestaurantMenu = (resId) =>{

    const [resMenu,setResMenu] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async() =>{
         const data=await fetch(MENU_URL+resId);
         const json=await data.json();
         setResMenu(json);      
    }

  return resMenu;
}

export default useRestaurantMenu;