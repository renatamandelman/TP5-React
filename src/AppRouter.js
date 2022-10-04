import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//import App from './App'
import Body from './Components/Layout/Body';
import Header from "./Components/Layout/Header";
import Cart from './Components/Cart/Cart.js'
import NotFound from './Components/Layout/NotFound'
import Footer from "./Components/Layout/Footer";
import { DetalleProducto } from "./Components/Products/DetalleProducto";


const AppRouter = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>

                <Route path="/" element={<Body/>} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound/>} />
                <Route path="/:id" element={<DetalleProducto />} />

            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}


export default AppRouter;