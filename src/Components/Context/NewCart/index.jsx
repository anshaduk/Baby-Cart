import { createContext, useContext, useState } from "react";

export const NewCartContext = createContext();
export const useNewCartContext=()=>{
    const {cartCount,setCartCount,cartItems,setCartItems,data,setData,user,setUser,add,setAdd,render,setRender,search,setSearch}=useContext(NewCartContext)
    return {
        cartCount,setCartCount,cartItems,setCartItems,data,setData,user,setUser,add,setAdd,render,setRender,search,setSearch
    }
}

export const NewCartContextProvider=({children})=>{
    const [cartCount,setCartCount]=useState()
    const [cartItems,setCartItems]=useState([])
    
    //user side
    const [data,setData]=useState([])
    const [user,setUser]=useState(null)
    const [add,setAdd]=useState(0)
    const [render,setRender]=useState(false)
    const [search,setSearch]=useState('')
    return(
        <NewCartContext.Provider value={{cartCount,setCartCount,cartItems,setCartItems,data,setData,user,setUser,add,setAdd,render,setRender,search,setSearch}}>
            {children}
        </NewCartContext.Provider>
    )
}
