import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//import App from './App'
import Body from './Components/Layout/Body';
import Header from "./Components/Layout/Header";
import Cart from './Components/Cart'
import NotFound from './Components/Layout/NotFound'
import Footer from "./Components/Layout/Footer";


const AppRouter = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>

                <Route path="/" element={<Body/>} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound/>} />

            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}


export default AppRouter;