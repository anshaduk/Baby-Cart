import React, { useContext } from 'react'
import CartContext from '../Context/Cart/CartContext'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../ProductDisplay/ProductDisplay'

const Product = () => {
    const {all_product}=useContext(CartContext)
    const {id}=useParams();
    const product=all_product.find((e)=>e.id===parseInt(id))
  return (
    <div>
        <ProductDisplay product={product}/>
    </div>
  )
}

export default Product