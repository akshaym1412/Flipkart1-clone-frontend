import { createSlice,createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct=createAsyncThunk("Products",async ()=>{
const {data}=await axios.get("https://flipkart1-clone-backend1-akshaym1412s-projects.vercel.app/api/products");
return data;
})

const products=createSlice({
    name:"Products",
    initialState:{
        product:[],
        loading:false,
        error:null
    },
    extraReducers:builder=>{
      builder.addCase(fetchProduct.pending,(state)=>{
        state.loading=true
    });
      builder.addCase(fetchProduct.fulfilled,(state,action)=>{
        state.loading=false
        state.product=action.payload
    });
      builder.addCase(fetchProduct.rejected,(state,action)=>{
        state.loading=false
        state.error=action.payload
    });
      }

    })
    

export default products.reducer;
