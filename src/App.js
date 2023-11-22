import './App.css';
import Home from './components/home/Home';
import Header from "./components/header/Header";
import { createContext, useState } from 'react';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Details from './components/Details/Details';
import Cartdetails from './components/cart/Cartdetails';
import Fashion from './components/Pages/Fashion';
import Mobiles from './components/Pages/Mobiles';
import Electronics from './components/Pages/Electronics';
import Tv from './components/Pages/Tv';
import Beauty from './components/Pages/Beauty';
import Homes from './components/Pages/Homes';
import Furniture from './components/Pages/Furniture';

export const DataContext=createContext("");
function App() {
  const router=createBrowserRouter(
    [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:":name/details/:id",
        element:<Details/>
      },
      {
       path:"/Cartdetails",
       element:<Cartdetails/>
      },
      {
        path:"/Fashion",
        element:<Fashion/>
       },
       {
        path:"/Electronics",
        element:<Electronics/>
       },
       {
        path:"/Tv",
        element:<Tv/>
       },
       {
        path:"/Beauty",
        element:<Beauty/>
       },
       {
        path:"/Homes",
        element:<Homes/>
       },
       {
        path:"/Furniture",
        element:<Furniture/>
       },
       {
        path:"/Mobiles",
        element:<Mobiles/>
       }
    ]
  )
  const[accounts,setaccounts]=useState("");
  return (
    <>
      <DataContext.Provider value={{accounts,setaccounts}}>
      <RouterProvider router={router}>
      <Header/>
      <Home/>
      </RouterProvider>
      </DataContext.Provider>
     </>
  );
}

export default App;
