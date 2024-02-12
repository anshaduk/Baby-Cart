import React from 'react'
import { useNewCartContext } from '../Context/NewCart'
import { useNavigate } from 'react-router-dom';
import CartHeader from '../Cart/CartHeader';



const Cart = () => {
  // const {user,setUser,add,setAdd,data,setData,render,setRender}=useNewCartContext();
  // const navigate=useNavigate();

  // const increment=(adding)=>{
  //   setAdd(adding.quantity+=1)
  //   setRender(!render)
  // }

  // const decrement=(adding)=>{
  //   if(adding.quantity && adding.quantity>1){
  //     setAdd(adding.quantity-=1)
  //     setRender(!render)
  //   }
  // }


  // const remove=(id)=>{
  //   let removeditem=user.cart.filter((item)=>item.id!=id)
  //   user.cart=removeditem
  //   setRender(!render)
  // }
   return (
    <div>
      <CartHeader />
      {/* user && user.cart.map((adding)=>(
      <div className="items-info" key={adding.id}>
            <div className="product-img">
              <img src={adding.image} alt="image" />
            </div>
            <div className="title">
              <h2>{adding.name}</h2>
              <p>{adding.category}</p>
            </div>
            <div className="add-minus-quantity">
            <i className="fas fa-minus minus" onClick={()=>decrement(adding.id)}></i>
            <input type="text" placeholder={adding.quantity} />
            <i className="fas fa-plus add" onClick={()=>increment(adding.id)}></i>
            </div>
            <div className="price">
              <h3>{adding.price}Rs</h3>
            </div>
            <div className="remove-item">
            <i className="fas fa-trash-alt remove" onClick={()=>remove(adding.id)}></i>
            </div>
      </div>
          <hr />
      )) */}
    </div>
  )
}

export default Cart