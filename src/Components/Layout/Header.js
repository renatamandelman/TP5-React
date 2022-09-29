import React from "react";
import { Link } from 'react-router-dom'
import { useCartContext } from "../Context/cartContext";


function Header() {
    const {cartItems} = useCartContext()

    return(
    <>
     
    
    <div className="site-branding-area">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="logo">
                        <h1><Link to="/">e<span>Electronics</span></Link></h1>
                    </div>
                </div>
                
                <div className="col-sm-6">
                    <div className="shopping-item">
                    <Link to="/cart"> <i className="fa fa-shopping-cart icon-large"></i> <span className="product-count">{cartItems.map(c => c.cantidad).reduce((a, b) => a + b, 0)}</span></Link>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <div className="mainmenu-area" style={{height: '50px'}}>
        <div className="container">
            <div className="row">
                <div className="navbar-header">
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/">Home</Link></li>
                   

                    
                        <li> <Link to="/cart">Cart</Link></li>
            
                        <li><Link to="ff">Contact</Link></li>
                    </ul>
                </div>  
                </div> 
            </div>
        </div>
    </div></>
    )
}
export default Header;