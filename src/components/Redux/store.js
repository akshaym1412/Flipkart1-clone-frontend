import { configureStore } from "@reduxjs/toolkit";
import products from "./slice";
import productSlice from "./Slice2";
import Cart from "./Slice3";
const store=configureStore({
    reducer:{
        product:products,
        singleproduct:productSlice,
        carts:Cart

    }
})
export default store;