import React, { useContext } from "react";
import "./Cart.css";
import Item from "../Cart/Item.jsx";
import CartContext from "../Context/Cart/CartContext";
import { useNewCartContext } from "../Context/NewCart/index.jsx";

const CartHeader = () => {
  const { cartItem, item, clearCart, totalItem, totalAmount } =
    useContext(CartContext);
  const { cartItems,setCartItems } = useNewCartContext();
  console.log(cartItems, "cartItem cartheader");
  
  const handlecart=(id)=>{
    setCartItems(cartItems.filter((item)=>item.id!==id))
  }
  
    return (
      <>
        <header>
          <div className="continue-shopping">
            <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
            <h3>Continue shopping</h3>
            <hr />
          </div>
          <div className="cart-icon">
            <img src="./images/cart.png" alt="cart" />
            <p>{cartItems.length}</p>
          </div>
        </header>
        {cartItems.length === 0 ? (
          <section className="main-cart-section">
            <h1>Shopping Cart</h1>
            <p className="total-items">
              You have <span className="total-items-count"> 0 </span>items in
              Shoping cart
            </p>
          </section>
        ) : (
          <section className="main-cart-section">
            <h1>Shopping Cart</h1>
            {/* <p className='total-items'>you have <span className='total-items-count'> {totalItem} </span>items in cart</p> */}
            <p className="total-items">
              you have{" "}
              <span className="total-items-count"> {cartItems.length} </span>
              items in cart
            </p>
            <div className="cart-items">
              <div className="cart-items-container">
                {cartItems.map((curItem) => {
                  console.log(curItem, "print");
                  return <Item key={curItem.id}  {...curItem} handlecart={handlecart} />;
                })}
              </div>
            </div>

            <div className="card-total">
              <h3>
                Cart Total: <span>{totalAmount} Rs</span>
              </h3>
              <button>CHECKOUT</button>
              <button className="clear-cart" onClick={() => clearCart()}>
                Clear Cart
              </button>
            </div>
          </section>
        )}
      </>
    );
  

  // return (
  //   <>
  //   <header>
  //       <div className='continue-shopping'>
  //           <img src="./images/arrow.png" alt="arrow" className='arrow-icon' />
  //           <h3>Continue shopping</h3>
  //           <hr />
  //       </div>
  //       <div className='cart-icon'>
  //         <img src="./images/cart.png" alt="cart" />
  //         {/* <p>{totalItem}</p> */}
  //         <p>{cartItem.length}</p>
  //       </div>
  //   </header>
  //   <section className='main-cart-section'>
  //     <h1>Shopping Cart</h1>
  //     {/* <p className='total-items'>you have <span className='total-items-count'> {totalItem} </span>items in cart</p> */}
  //     <p className='total-items'>you have <span className='total-items-count'> {cartItem.length} </span>items in cart</p>
  //      <div className='cart-items'>

  //       <div className='cart-items-container'>

  //      {
  //       cartItem.map((curItem)=>{
  //         console.log(curItem,"print");
  //         return <Item key={curItem.id} {...curItem}/>
  //       })
  //      }

  //       </div>
  //      </div>

  //      <div className="card-total">
  //       <h3>Cart Total: <span>{totalAmount} Rs</span></h3>
  //       <button>CHECKOUT</button>
  //       <button className='clear-cart' onClick={()=>clearCart()} >Clear Cart</button>
  //      </div>
  //   </section></>
  // )
};

export default CartHeader;
