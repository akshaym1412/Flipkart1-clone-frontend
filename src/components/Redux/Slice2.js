import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

export const productone=createAsyncThunk("product",async(id)=>{
   const {data}=await Axios.get(`https://flipkart-li8x.onrender.com/product/${id}`)
   return data;
})

const productSlice=createSlice(
    {
        name:"Product",
        initialState:{
            users:{},
            loading:false,
            error:null
        },
        extraReducers:builder=>{
            builder.addCase(productone.pending,(state)=>{
                state.loading=true
            });
            builder.addCase(productone.fulfilled,(state,action)=>{
                state.loading=false
                state.users=action.payload
            });
            builder.addCase(productone.rejected,(state,action)=>{
                state.loading=false
                state.error=action.payload
            });
        }
    }
)

export default productSlice.reducer;
