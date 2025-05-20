import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import MenuItemCategory from "./MenuItemCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const {resId}=useParams();
    const[showItem,setShowItem] = useState(0);
    
     const resMenu = useRestaurantMenu(resId);

    if(resMenu==null) return;

    const {name, cuisines, costForTwoMessage, avgRating,areaName} = resMenu?.data?.cards[2]?.card.card.info;

    let categories;
    if(resMenu?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card){
         categories=resMenu?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    }
    else if(resMenu?.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card){
        categories =resMenu?.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    }
    
     const itemCategories = categories.filter((category)=> category?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


    return (
        <div className="w-11/12 mx-auto my-2 sm:w-6/12 sm:my-4">
            <div>
            <h1 className="text-xl font-bold m-1 my-4 sm:text-5xl sm:my-6">{name}</h1>
            <div className="border-gray-300 border rounded-2xl px-2 shadow-2xl my-4 text-base sm:my-10 sm:text-2xl sm:p-4">
            <h2 className=" font-bold m-2">{cuisines.join(', ')}</h2>
            <span className="font-bold m-2 mx-4">⭐{avgRating} Rating</span>
            <span className="font-bold m-2 mx-4">{costForTwoMessage}</span>           
            <h2 className="font-bold m-2">📍 {areaName}</h2>
            </div>
            </div>
            
            {itemCategories.map((itemCategory,index)=>
                <MenuItemCategory key={itemCategory.card.card.title}
                 category={itemCategory.card.card}
                  index={index} setShowItem={setShowItem}
                  show={index===showItem ? true : false}/>           
            )}
            
        </div>
    )
}
export default RestaurantMenu;