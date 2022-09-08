import React from "react";
import { Link } from 'react-router-dom'

function Header() {
    return(
    <>
     
    
    <div class="site-branding-area">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="logo">
                        <h1><Link to="/">e<span>Electronics</span></Link></h1>
                    </div>
                </div>
                
                <div class="col-sm-6">
                    <div class="shopping-item">
                    <Link to="/cart">Cart - <span class="cart-amunt">$800</span> <i class="fa fa-shopping-cart"></i> <span class="product-count">5</span></Link>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <div class="mainmenu-area">
        <div class="container">
            <div class="row">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div> 
                <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li class="active"><Link to="/">Home</Link></li>
                        <li><Link to="/shop-page">Shop page</Link></li>
                        <li><Link to="fr">Single product</Link></li>
                        <li> <Link to="/cart">Cart</Link></li>
                        <li><Link to="ff">Checkout</Link></li>
                        <li><Link to="ff">Category</Link></li>
                        <li><Link to="ff">Others</Link></li>
                        <li><Link to="ff">Contact</Link></li>
                    </ul>
                </div>  
            </div>
        </div>
    </div></>
    )
}
export default Header;