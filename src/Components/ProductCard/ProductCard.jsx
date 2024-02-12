import React, { useContext, useEffect } from 'react'
import {Link} from 'react-router-dom'
import CartContext from '../Context/Cart/CartContext';
import { useNewCartContext } from '../Context/NewCart';
import all_product from '../Assets/all_product';


const ProductCard = (props) => {
  const {cartItems,setCartItems}=useNewCartContext();

  const handleCart = (id,) => {
    const itemIndex = all_product.find((item) => item.id === id)
    //console.log(itemIndex,"productcard");
    if(!cartItems.some((item)=>item.id===itemIndex.id))
    setCartItems([...cartItems,itemIndex])

    



  // console.log(cartItems,"product card cart items");
  //  const itemIndex = cartItems.findIndex(item => item.hasOwnProperty(id==));
  //  if (itemIndex ) {
  //   console.log(itemIndex);
  //   itemIndex.quantity=1
  //     // const updatedCartItems = [...cartItems];
  //     // updatedCartItems[id].quantity += 1;
  //     setCartItems(prev=>([...prev,{itemIndex}]));
  //  } else {
   
  //     setCartItems(prev => ([...prev, { 'id':id,quantity: 1,product }]));
  //  }
}

    
  useEffect(()=>{
    console.log(cartItems);
  },[cartItems])
  const {addToCart} =useContext(CartContext)
  const {product}=props;
  console.log(product,"all product");
  const formattedCurrency = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(product.price);
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 cursor-pointer ">
      <div className="flex flex-col h-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Link to={`/product/${product.id}`} >
          <img alt="ecommerce" className="object-cover object-center w-full h-full block hover:scale-110 ease-linear " src={product.image} />
          </Link>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{product.category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
          <p className="mt-1">{formattedCurrency}</p>
        </div>
        <div className="mt-auto">
          {/* <button onClick={() => addToCart(product.id,product.name,product.image,product.category,product.quantity,product.price)} className="inline-flex text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-900 rounded-3xl text-lg">Add to Cart</button> */}
          <button onClick={() =>handleCart(product.id) } className="inline-flex text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-900 rounded-3xl text-lg">Add to Cart</button>
        </div>
      </div>
    

    </div>
  )
}

export default ProductCard