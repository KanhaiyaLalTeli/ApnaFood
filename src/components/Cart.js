import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MenuItemCard from './MenuItemCard';
import { clearCart } from '../utils/cartSlice';
import CartItem from './CartItem';

const Cart = () => {

    const items=useSelector((store)=> store.cart.items);
    const dispatch= useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart());
    }
    console.log(items);
    let totalItemPrice=items.reduce((acc,curr) => acc + ((curr.card.info.price/100 || curr.card.info.defaultPrice/100)*curr.noOfItems),0);
    totalItemPrice=parseInt(totalItemPrice.toFixed(0));
    const totalPay=totalItemPrice+39+29;   

  return (
    <div className='flex flex-col m-2 sm:flex-row sm:w-9/12 sm:mx-auto'>
    <div className=' my-4 sm:w-9/12 sm:mx-auto'>
        <h1 className='text-center text-2xl font-bold my-2 sm:text-4xl sm:my-4'>Cart</h1>
        {items.length==0 ? <h1 className='text-xl font-bold text-center sm:text-3xl'>Your Cart is Empty. Please Add you favorite Food...</h1> :
        <button className='text-lg font-bold text-right bg-red-500 border
         border-gray-400 px-4 py-1 rounded-lg sm:text-3xl sm:px-4' 
        onClick={handleClearCart}>Clear Cart🛒</button>}
        {items.map((item,index)=><CartItem item={item} key={item.card.info.id} index={index}/>)}
      
    </div>
    {items.length==0 ? <h1></h1> :
    <div className=' mx-auto my-16 border-gray-300 sm:border-l-2 sm:w-3/12'>
    <h1 className='text-center text-xl font-bold my-2 sm:text-2xl sm:my-4'>Bill Details</h1>
    <div className='flex justify-between text-base font-bold my-1 mx-4 sm:text-lg sm:my-4'>
        <span>Item Total Price</span>
        <span>₹ {totalItemPrice}</span>
        </div>
    <div className='flex justify-between gap-4 text-base font-bold my-1 mx-4 sm:text-lg sm:my-4'>
        <span>Delivery Fee | 5.0kms</span>
        <span>₹ 39</span>
        </div>
    <div className='flex justify-between  gap-4 text-base font-bold my-1 mx-4 sm:text-lg sm:my-4 border-gray-600 border-b-2 pb-4'>
        <span>GST & Other Charges</span>
        <span>₹ 29</span>
        </div>
        <div className='flex justify-between gap-4  text-xl font-bold my-1 mx-4 sm:text-2xl sm:my-4 border-gray-600 border-b-2 pb-4'>
        <span>To Pay</span>
        <span>{totalPay}</span>
        </div>
    </div>}
    
    
    </div>
  )
}

export default Cart
