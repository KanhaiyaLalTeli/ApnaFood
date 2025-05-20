
import { useDispatch,  } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';

const CartItem = ({item}) => {

  const {name,price} = item.card.info;
  const dispatch = useDispatch();

  const handleAddItem = (item) =>{    
        dispatch(addItem(item));
  }
      
  const handleRemoveItem = (item) =>{
      dispatch(removeItem(item));
  } 
  
  return (
    
     <div className='flex justify-between items-center gap-3 p-2 pb-2 border-gray-300 border-b-2 sm:pb-10 sm:p-4 sm:m-2 sm:items-center'>
    <div className='text-left w-6/12'>
     <h1 className='text-base font-bold sm:text-xl'>{name}</h1>
     <h1 className='text-sm font-bold sm:text-lg'>₹ {(price/100).toFixed(0) || (item.card.info.defaultPrice/100).toFixed(0)}</h1>
     
     </div>
     <div className='flex justify-around items-center w-3/12 text-center border  border-gray-300  py-1 
      bg-white font-bold text-green-600 shadow-lg rounded-lg
      sm:py-3 sm:text-2xl'>    
      <button className='text-xl sm:text-4xl'
      onClick={()=>handleRemoveItem(item)}>-</button>
      <span>{item.noOfItems}</span>
      <button className='text-xl sm:text-4xl'
      onClick={()=>handleAddItem(item)}>+</button>     
     </div>
     <div className='w-3/12'>
     <h1 className='text-base font-bold sm:text-xl'>₹ {(price/100).toFixed(0) * (item.noOfItems) || (item.card.info.defaultPrice/100).toFixed(0) * (item.noOfItems)}</h1>
     </div>
    </div>
  )
}

export default CartItem;
