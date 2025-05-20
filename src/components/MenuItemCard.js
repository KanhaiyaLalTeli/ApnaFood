import React, { useEffect } from 'react'
import { RES_LOGO } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addItem,removeItem } from '../utils/cartSlice';

const MenuItemCard = ({item}) => {
 
  const {name,price,description,imageId,id} = item.card.info;
  const dispatch = useDispatch();
  const items=useSelector((store) => store.cart.items);

  const handleAddItem = (item2) =>{
      dispatch(addItem(item2));   
    }

    const handleRemoveItem = (item2) =>{
      if(item2.noOfItems>0){
        dispatch(removeItem(item2));       
      }
        
    } 

  
    const item1=items.find((ele) => ele.card.info.id==id);
    
      if(item1 !==undefined){
      item.noOfItems=item1.noOfItems;
    }
 
       
  return (
    <div className='flex justify-between p-2 pb-6 gap-1 border-gray-300 border-b-2 sm:p-4 sm:m-2 sm:pb-10'>
    <div className='text-left w-9/12 flex flex-col gap-1'>
     <h1 className='text-sm font-bold sm:text-xl'>{name}</h1>
     <h1 className='text-xs font-bold sm:text-lg'>₹ {price/100  || item.card.info.defaultPrice/100}</h1>
     <div className='text-[10px] sm:text-base break-words'>{description}</div>
     </div>
     <div className='w-3/12 text-center'>  
     { item1!=undefined ? <div>
     <img className='w-full h-32 rounded-lg sm:h-52' src={RES_LOGO + imageId}/>
      <div  className='flex justify-around items-center border absolute -my-5 mx-1 w-20
       border-gray-300  bg-white font-bold text-green-600 shadow-lg rounded-lg
        sm:-my-6 sm:mx-16 sm:w-48 sm:text-2xl sm:py-2 '>      
      <button className='text-2xl'
      onClick={()=>handleRemoveItem(item1)}>-</button>
      <span>{ item1 && (item1.noOfItems || item.noOfItems) }</span>
      <button className='text-2xl'
      onClick={()=>handleAddItem(item)}>+</button></div></div>  :     
       (<div><img className='w-full h-32 rounded-lg sm:h-52' src={RES_LOGO + imageId}/>
      <button className='border border-gray-300 px-6 py-1 absolute -mx-10 -my-4  bg-white font-bold
       text-sm text-green-600 shadow-lg rounded-lg sm:px-16 sm:py-3 sm:text-2xl sm:-my-7 sm:-mx-24'
      onClick={()=>handleAddItem(item)}>ADD</button>
      </div>)  }
      
      
     </div>
    </div>
  )
}

export default MenuItemCard;
