import { useNewCartContext } from "../NewCart";
export const CartReducer=(state,action)=>{
    const { cartItems } = useNewCartContext();
    if(action.type==='ADD_ITEM'){
        let {id,name,image,category,quantity,price}=action.payload
        let cartProduct;
        cartProduct={
            id:id,
            name:name,
            price:price,
            quantity:quantity,
            image:image,
            category:category,
        }
        return{
            ...state,
            cartItems:[...state.cartItems,cartProduct],
            
        }
        
    }

    if(action.type==="REMOVE_ITEM"){
        return {
            ...state,
            cartItems:state.cartItem.filter((curElem)=>{
                return curElem.id!==action.payload;
            })
        }
    }

    if(action.type==='CLEAR_CART'){
        return {...state,cartItems:[]}
    }

    if(action.type==='INCREMENT_ITEM'){
        const updatedCart = state.cartItem.map((curElem)=>{
            if(curElem.id===action.payload){
                return {...curElem, quantity:curElem.quantity+1}
            }
            return curElem
        });
        return{...state,cartItem:updatedCart}
    }

    if(action.type === 'DECREMENT_ITEM'){
        const updatedCart = state.cartItem.map((curElem)=>{
            if(curElem.id===action.payload){
                return {...curElem,quantity:curElem.quantity-1}
            }
            return curElem
        }).filter((curElem)=>{
            return curElem.quantity!==0
        });
        return {...state,cartItem:updatedCart}
    }

    if(action.type === 'GET_TOTAL'){
        let {totalItem,totalAmount}=state.cartItem.reduce((acc,curr)=>{
            let {price,quantity}=curr;
            let updatedTotalAmount = parseInt(price)* quantity;
            acc.totalAmount += updatedTotalAmount;
            acc.totalItem+=quantity;
            return acc;
        },
        {
            totalItem:0,
            totalAmount:0,
        }
        );
        return {...state,totalItem,totalAmount}
    }


    return state
}
export default CartReducer
