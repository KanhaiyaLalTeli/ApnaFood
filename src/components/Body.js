import { Link } from "react-router";
import Restaurant , {WithlableRestaurant} from "./Restaurant";
import ShimmerUI from "./ShimmerUI";
import useOnlineStatus from "../utils/useOnlineStatus";

import {  useEffect, useState } from "react";


const Body = () => {
    
    const [restaurantList,setRastaurantList] = useState([]);
    const [filteredRestaurentList,setFilteredRestaurentList] =useState([]);
    const [serachInput,setSearchInput] = useState('');
    

    const onlineStatus = useOnlineStatus();

    const RestaurantWithVeg= WithlableRestaurant(Restaurant);

    useEffect(()=>{
        fetchData();
    },[])

    if(onlineStatus===false){
      return <h1>You are offline, Please check your Internet connection..</h1>
    }

    const handleFilter = () =>{
        const filterResList=restaurantList.filter((res)=> res.info.avgRating > 4);
        setFilteredRestaurentList(filterResList);
    }

    const handleSerach = () =>{
        const filterList=restaurantList.filter((res)=> res.info.name.toLowerCase().includes(serachInput.toLowerCase()));
        setFilteredRestaurentList(filterList);
        setSearchInput('');
    }

    const fetchData = async () =>{
        const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3071588&lng=73.1812187&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json=await data.json();
        let res=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRastaurantList(res);
        setFilteredRestaurentList(res);
    }

      return restaurantList.length==0 ? <ShimmerUI/> : (
      <div className="mx-auto my-2 flex flex-col items-center">
        <div className="flex flex-col sm:flex-row gap-4 my-4 ">
            <div className="">
                <input className="h-6 border border-solid border-black mx-2 p-1 sm:mx-2 sm:p-2 sm:h-10" type='text' value={serachInput} 
                onChange={(e)=>  setSearchInput(e.target.value)}></input>
                <button className="bg-green-200 font-bold p-1 rounded-md text-sm sm:text-lg sm:p-2" onClick={()=>handleSerach()}>Search</button>
            </div>
            <button className="bg-green-200 font-bold p-1 rounded-md text-sm sm:text-lg sm:p-2" onClick={()=>handleFilter()}>Top Rated Restaurant</button>
        </div>
        <div className="flex flex-wrap gap-2 justify-center sm:gap-4">
          {filteredRestaurentList.map((res) => (
           <Link key={res.info.id} to={'restaurant/'+res.info.id}>
            {res?.info?.veg ? <RestaurantWithVeg resdata={res}/> : <Restaurant  resdata={res} /> }            
             </Link>
          ))}
           
        </div>
       
      </div>
    );
  };

  export default Body;