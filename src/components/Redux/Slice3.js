import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cart:[],
    price:0,
    discount:0,
    totalquantity:0,
    totalprice:0

}
const addcart=(action,state)=>{
    state.totalquantity+=1;
    state.totalprice+=action.payload.newPrice;
    state.price+=action.payload.prevPrice;
    state.discount+=((action.payload.prevPrice)-(action.payload.newPrice));
}
const removecart=(state,action,find)=>{
       state.totalprice-=(state.cart[find].quantity*state.cart[find].newPrice);
       state.price-=(state.cart[find].quantity*state.cart[find].prevPrice);
       state.discount-=((state.cart[find].quantity*state.cart[find].prevPrice)-(state.cart[find].quantity*state.cart[find].newPrice));
       state.cart=state.cart.filter((item)=>item.id!==action.payload.id);

}
const removecart1=(state,action,find)=>{
    state.totalprice-=(state.cart[find].newPrice);
    state.price-=(state.cart[find].prevPrice);
    state.discount-=((state.cart[find].prevPrice)-(state.cart[find].newPrice));
    state.cart=state.cart.filter((item)=>item.id!==action.payload.id);

}
const Cart=createSlice({
    name:"ProductCart",
    initialState,
    reducers:{
       add(state,action){
        const find=state.cart.findIndex((item)=>item.id===action.payload.id);
        if(find>=0){
            state.cart[find].quantity += 1;
            addcart(action,state);
        }
        else{
        state.cart.push(action.payload)
         addcart(action,state);
       }},
       remove(state,action){
       const find=state.cart.findIndex((item)=>item.id===action.payload.id);
       state.totalquantity-=state.cart[find].quantity;
       removecart(state,action,find);
       },
       increaseQuantity(state,action){
        state.cart=state.cart.map((item)=>{
            if(item.id===action.payload.id){
                addcart(action,state);
                return {...item,quantity:item.quantity+1};
            }
            else{
                return item;
            }
        })
       },
       decreaseQuantity(state,action){
        const find=state.cart.findIndex((item)=>item.id===action.payload.id);
        state.cart=state.cart.map((item)=>{
            if(item.id===action.payload.id){
                state.totalquantity=state.cart[find].quantity-1;
                removecart1(state,action,find);
                return {...item,quantity:item.quantity-1};
            }
            else{
                return item;
            }
        })
       }
       
}})

export default Cart.reducer;
export const {add,remove,increaseQuantity,decreaseQuantity}=Cart.actions;