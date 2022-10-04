import React from "react";
import { ProductosArray } from '../../BD'
import { useCartContext } from "../Context/cartContext";
import CartItem from "./cartItem";



function Cart() {
    const { cartItems, AddToCart, total } = useCartContext()
    return (
        <>

            {/* <div className="single-product-area">
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
                                                        {cartItems.map(prod => (<CartItem key={prod.id} {...prod} />))}

                                                        <tr>
                                                            <td className="actions" colspan="6">

                                                                <input type="submit" value="Proceed to Checkout" name="proceed" className="checkout-button button alt wc-forward" />
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
            </div> */}


            <section className="h-100 h-custom" style={{backgroundColor: '#eee'}}>
                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card shopping-cart" style={{borderRadius: '15px'}}>
                                <div className="card-body text-black">

                                    <div className="row">
                                        <div className="col-lg-6 px-5 py-4">

                                            <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Your products</h3>

                                            {cartItems.map(prod => (<CartItem key={prod.id} {...prod} />))}



                                            <hr className="mb-4" style={{height: '2px', backgroundColor: '#1266f1', opacity: 1}} />

                                            
                                            <div className="d-flex justify-content-between p-2 mb-2" style={{backgroundColor: '#e1f5fe'}}>
                                                <h5 className="fw-bold mb-0">Total:</h5>
                                                <h5 className="fw-bold mb-0">${total}</h5>
                                            </div>

                                        </div>
                                        <div className="col-lg-6 px-5 py-4">

                                            <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Payment</h3>

                                            <form className="mb-5">

                                                <div className="form-outline mb-5">
                                                    <input type="text" id="typeText" className="form-control form-control-lg" size="17"
                                                        defaultValue="1234 5678 9012 3457" minLength="19" maxLength="19" />
                                                    <label className="form-label" htmlFor="typeText">Card Number</label>
                                                </div>

                                                <div className="form-outline mb-5">
                                                    <input type="text" id="typeName" className="form-control form-control-lg" size="17"
                                                        defaultValue="John Smith" />
                                                    <label className="form-label" htmlFor="typeName">Name on card</label>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6 mb-5">
                                                        <div className="form-outline">
                                                            <input type="text" id="typeExp" className="form-control form-control-lg" defaultValue="01/22"
                                                                size="7" minLength="7" maxLength="7" />
                                                            <label className="form-label" htmlFor="typeExp">Expiration</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-5">
                                                        <div className="form-outline">
                                                            <input type="password" id="typeText" className="form-control form-control-lg"
                                                                defaultValue="&#9679;&#9679;&#9679;" size="1" minLength="3" maxLength="3" />
                                                            <label className="form-label" htmlFor="typeText">Cvv</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit <a
                                                    href="#!">obcaecati sapiente</a>.</p>

                                                <button type="button" className="btn btn-primary btn-block btn-lg">Buy now</button>

                                                <h5 className="fw-bold mb-5" style={{position: 'absolute', bottom: 0}}>
                                                    <a href="#!"><i className="fa fa-angle-left me-2"></i>Back to shopping</a>
                                                </h5>

                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )


}


export default Cart;