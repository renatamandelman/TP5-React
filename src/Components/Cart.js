import React from "react";


import celular from '../img/product-thumb-2.jpg'



function Cart() {
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
                                            <tr className="cart_item">
                                                <td className="product-remove">
                                                    <a title="Remove this item" className="remove" href="#">×</a> 
                                                </td>

                                                <td className="product-thumbnail">
                                                    <a href="single-product.html"><img width="145" height="145" alt="poster_1_up" className="shop_thumbnail" src={celular}/></a>
                                                </td>

                                                <td className="product-name">
                                                    <a href="single-product.html">Ship Your Idea</a> 
                                                </td>

                                                <td className="product-price">
                                                    <span className="amount">£15.00</span> 
                                                </td>

                                                <td className="product-quantity">
                                                    <div className="quantity buttons_added">
                                                        <input type="button" className="minus" value="-"/>
                                                        <input type="number" size="4" className="input-text qty text" title="Qty" value="1" min="0" step="1"/>
                                                        <input type="button" className="plus" value="+"/>
                                                    </div>
                                                </td>

                                                <td className="product-subtotal">
                                                    <span className="amount">£15.00</span> 
                                                </td>
                                            </tr>
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
                                                    <td><span className="amount">£15.00</span></td>
                                                </tr>

                                                <tr className="shipping">
                                                    <th>Shipping and Handling</th>
                                                    <td>Free Shipping</td>
                                                </tr>

                                                <tr className="order-total">
                                                    <th>Order Total</th>
                                                    <td><strong><span className="amount">£15.00</span></strong> </td>
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