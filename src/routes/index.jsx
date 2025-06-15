import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; // ✅ Use react-router-dom, not just react-router

import Layout from '../layouts/Layout';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Gallery from '../pages/Gallery';
import ContactUs from '../pages/ContactUs';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "product", element: <Product /> },
        { path: "gallery", element: <Gallery /> },
        { path: "contactus", element: <ContactUs /> },
      ],
    },
  ],
  
);

export default router;
// src/router/router.jsx

// import React from "react";
// import { HashRouter, Routes, Route } from "react-router-dom";

// import Layout from "../layouts/Layout";
// import Home from "../pages/Home";
// import Product from "../pages/Product";
// import Gallery from "../pages/Gallery";
// import ContactUs from "../pages/ContactUs";

// const AppRouter = () => (
//   <HashRouter basename="/Ppf-Gold1">
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="product" element={<Product />} />
//         <Route path="gallery" element={<Gallery />} />
//         <Route path="contactus" element={<ContactUs />} />
//       </Route>
//     </Routes>
//   </HashRouter>
// );

// export default AppRouter;
