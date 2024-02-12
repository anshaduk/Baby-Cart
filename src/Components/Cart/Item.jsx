import React from 'react'
import { useContext } from 'react'
import CartContext from '../Context/Cart/CartContext'

const Item = ({id,category,name,image,price,quantity,count,handlecart}) => {
    const {removeItem,increment,decrement}=useContext(CartContext)
    
  return (
    <>
        <div className="items-info">
            <div className="product-img">
              <img src={image} alt="image" />
            </div>
            <div className="title">
              <h2>{name}</h2>
              <p>{category}</p>
            </div>
            <div className="add-minus-quantity">
            <i className="fas fa-minus minus" onClick={()=>decrement(id)}></i>
            <input type="text" placeholder={quantity} />
            <i className="fas fa-plus add" onClick={()=>increment(id)}></i>
            </div>
            <div className="price">
              <h3>{price}Rs</h3>
            </div>
            <div className="remove-item">
            <i className="fas fa-trash-alt remove" onClick={()=>handlecart(id)}></i>
            </div>
          </div>
          <hr />

    </>
  )
}

export default Item