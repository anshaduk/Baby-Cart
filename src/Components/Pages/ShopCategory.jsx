import React, { useContext } from 'react'
import CartContext from '../Context/Cart/CartContext'
import ProductCard from '../ProductCard/ProductCard'

const ShopCategory = (props) => {
  const {all_product}=useContext(CartContext)
  return (
    <>
    <img className='block m-8 w-4/5' src={props.banner} alt="" />
      <div className="flex flex-wrap  mt-5">
      {all_product.map((product)=>{
        if(props.category===product.category){
          return <ProductCard key={product.id} product={product} />
        }else{
          return null;
        }
      })}
      </div>
    </>
  )
}

export default ShopCategory