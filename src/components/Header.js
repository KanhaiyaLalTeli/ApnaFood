import { useContext, useState } from "react";
import { APP_LOGO } from "../utils/constant";
import { Link } from "react-router";
import { useSelector } from "react-redux";
const Header = () => {

  const items=useSelector((store) => store.cart.items);
  
  const itemNos=items.reduce((acc,curr) => acc+curr.noOfItems,0);

    return (
      <div className="flex justify-between bg-pink-100">
        <div className="w-12 sm:w-28">
          <img src={APP_LOGO} />
        </div>
        <div className="flex items-center sm:mx-10">
          <ul className="flex gap-4 items-center text-lg font-bold mx-4 sm:text-3xl ">            
            <li><Link to="/">Home</Link></li>
            <li className="text-black"><Link to="/cart">🛒({itemNos})</Link></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;