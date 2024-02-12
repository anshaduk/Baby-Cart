import React from 'react'
import all_product from '../Assets/all_product.jsx' 
import ProductCard from '../ProductCard/ProductCard.jsx'

const Popular = () => {
  console.log(all_product);
  return (
    <div className="flex flex-wrap -m-4">
        {all_product.map((product)=>(
            (<ProductCard key={product.id} product={product}/>)
        ))}
    </div>
  )
}

export default Popular