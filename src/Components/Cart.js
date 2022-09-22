import React from "react";
import {ProductosArray} from '../BD'
import { useCartContext } from "./Context/cartContext";
import CartItem from "./cartItem";



function Cart() {
    const {cartItems, AddToCart} = useCartContext()
    return (
    <>

<div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
            <div className="row">
              
                <div className="col-md-12">
                    <div >
                        <div className="woocommerce">

                            <div className="row">
                            <div className="col-md-9">
                                <form method="post" action="#">
                                    <table cellspacing="0" className="shop_table cart">
                                        <thead>
                                            <tr>
                                                <th className="product-remove">&nbsp;</th>
                                                <th className="product-thumbnail">&nbsp;</th>
                                                <th className="product-name">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-subtotal">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                                {cartItems.map(prod => ( <CartItem key={prod.id} {...prod}/>) ) }
                                               
                                            <tr>
                                                <td className="actions" colspan="6">
                                                    
                                                    <input type="submit" value="Proceed to Checkout" name="proceed" className="checkout-button button alt wc-forward"/>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </form>

                            </div>

                            <div className="col-md-3">

                                <div className="cart-collaterals">
                                    <div className="cart_totals ">
                                        <h2>Cart Totals</h2>

                                        <table cellspacing="0">
                                            <tbody>
                                                <tr className="cart-subtotal">
                                                    <th>Cart Subtotal</th>
                                                    <td><span className="amount">${cartItems.map(c => c.cantidad * c.precio).reduce((a, b) => a + b, 0)}</span></td>
                                                </tr>

                                                <tr className="shipping">
                                                    <th>Shipping and Handling</th>
                                                    <td>Free Shipping</td>
                                                </tr>

                                                <tr className="order-total">
                                                    <th>Order Total</th>
                                                    <td><strong><span className="amount">${cartItems.map(c => c.cantidad * c.precio).reduce((a, b) => a + b, 0)}</span></strong> </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                            </div>



                        </div>                        
                    </div>                    
                </div>
            </div>
        </div>
    </div>      
                        </>
                        )
                        

}


 export default Cart;