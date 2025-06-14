import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Layout from '../layouts/Layout';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Gallery from '../pages/Gallery';
import ContactUs from '../pages/ContactUs';
const router = createBrowserRouter([
    {
        path:"/",
        element : <Layout/>,
        children:[
            {index:true, element: <Home/>},
            {path: "product", element:<Product/>},
            {path: "gallery", element:<Gallery/>},
            {path: "contactus", element:<ContactUs/>},

        ],
    },
]);
  

export default router