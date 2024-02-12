import React, { useReducer,useEffect, } from 'react'
import CartContext from './CartContext'
import CartReducer from './CartReducer'
import all_product from '../../Assets/all_product'

const CartState = ({children}) => {
    const initialState={
        cartItem:[],
        all_product:all_product,
        item:all_product,
        totalAmount:0,
        totalItem:0,
    }
    const [state,dispatch]=useReducer(CartReducer,initialState);
    const addToCart=(id,name,image,category,quantity,price)=>{
        return dispatch({
            type:'ADD_ITEM',
            payload:{id,name,image,category,quantity,price}
        })
    }

    //to delete the indv. elements from an Item Cart
  const removeItem=(id)=>{
    return dispatch({
      type:"REMOVE_ITEM",
      payload: id,
    });
  };

  //clear the cart
  const clearCart=()=>{
    return dispatch({
      type:"CLEAR_CART",
    })
   }

   //increment the item
   const increment=(id)=>{
    return dispatch({
      type:"INCREMENT_ITEM",
      payload:id,
    })
   }

   //decrement the item
   const decrement=(id)=>{
    return dispatch({
      type:'DECREMENT_ITEM',
      payload:id,
    })
   }

   //we will use the useEffect to update the data
   useEffect(()=>{
    dispatch({type:'GET_TOTAL'});
    //console.log("hello");
   },[state.cartItem])
  return (
    <CartContext.Provider value={
        {
          ...state,
          cartItem:state.cartItem,
          
          addToCart,
          removeItem,
          clearCart,
          increment,
          decrement,
        }
    }>
        {children}
    </CartContext.Provider>
  )
}

export default CartState