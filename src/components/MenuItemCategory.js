import React, { useState } from 'react'
import MenuItemCard from './MenuItemCard'

const MenuItemCategory = ({category, index, setShowItem, show}) => {
    let {itemCards}= category;

   // let noOfItems=0;

  
  itemCards = itemCards.map((element) => ({
  ...element,
  noOfItems: element.noOfItems=0, // or any default value
}));
   
    const handleClick = () =>{
      setShowItem(index);
    }

  return (
    <div className="my-4 bg-gray-100 shadow-lg sm:m-4">
      <div className='flex justify-between items-center p-2 text-base font-bold cursor-pointer sm:m-2 sm:p-2 sm:text-2xl' onClick={()=>handleClick(index)}>
        <span>{category.title} ({category.itemCards.length})</span>
        <span>⏬</span>
      </div>
      {show && itemCards.map((item)=><MenuItemCard item={item} key={item.card.info.id}/>)}
    </div>
  )
}

export default MenuItemCategory
