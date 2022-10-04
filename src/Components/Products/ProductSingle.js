import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {useCartContext} from '../Context/cartContext'

function ProductSingle({ id,title, precio, img }) {
    const {AddToCart } = useCartContext()
    return (
        <>
                
                <div className="product-carousel col-md-3 col-sm-6 ">
                    <div className='single-product'>
                        <div className="product-f-image">
                            <div className="product-upper">
                                <img src={img} alt="" className="img" style={{ height: '100%', objectFit:'contain' }} />
                                <div className="product-hover">
                                    <button  onClick={() => AddToCart(id)}  className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</button>
                                    <Link to={`/${id}`} className="view-details-link"><i className="fa fa-link"></i> See details</Link>
                                </div>
                            </div>
                        </div>
                        <h2>{title}</h2>

                        <div className="product-carousel-price">
                            <ins>${precio}</ins>
                        </div>
                    </div>
                </div>
       

        </>
    )

}
ProductSingle.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    precio: PropTypes.number
};
export default ProductSingle;



{/* <div className="maincontent-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="latest-product">
                        <h2 className="section-title">Latest Products</h2>
                        <div className="row product-carousel">

                            <div className=" col-sm-2 single-product">
                                <div className="product-f-image">
                                    <img src={product1} alt="ea" className="img"/>
                                    <div className="product-hover">
                                        <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                        <a href="single-product.html" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                    </div>
                                </div>
                                
                                <h2><a href="single-product.html">Sony Smart TV - 2015</a></h2>
                                
                                <div className="product-carousel-price">
                                    <ins>$700.00</ins> <del>$800.00</del>
                                </div> 
                            </div>
                            <div className=" col-sm-2 single-product">
                                <div className="product-f-image">
                                    <img src={product2}  alt=""/>
                                    <div className="product-hover">
                                        <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                        <a href="single-product.html" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                    </div>
                                </div>
                                
                                <h2><a href="single-product.html">Apple new mac book 2015 March :P</a></h2>
                                <div className="product-carousel-price">
                                    <ins>$899.00</ins> <del>$999.00</del>
                                </div> 
                            </div>
                            <div className="col-sm-2 single-product">
                                <div className="product-f-image">
                                    <img src={product3}  alt=""/>
                                    <div className="product-hover">
                                        <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                        <a href="single-product.html" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                    </div>
                                </div>
                                
                                <h2><a href="single-product.html">Apple new i phone 6</a></h2>

                                <div className="product-carousel-price">
                                    <ins>$400.00</ins> <del>$425.00</del>
                                </div>                                 
                            </div>
                            <div className="col-sm-2 single-product">
                                <div className="product-f-image">
                                    <img src={product4}  alt=""/>
                                    <div className="product-hover">
                                        <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                        <a href="single-product.html" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                    </div>
                                </div>
                                
                                <h2><a href="single-product.html">Sony playstation microsoft</a></h2>

                                <div className="product-carousel-price">
                                    <ins>$200.00</ins> <del>$225.00</del>
                                </div>                            
                            </div>
                            <div className="col-sm-2 single-product">
                                <div className="product-f-image">
                                    <img src={product5}  alt=""/>
                                    <div className="product-hover">
                                        <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                        <a href="single-product.html" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                    </div>
                                </div>
                                
                                <h2><a href="single-product.html">Sony Smart Air Condtion</a></h2>

                                <div className="product-carousel-price">
                                    <ins>$1200.00</ins> <del>$1355.00</del>
                                </div>                                 
                            </div>
                            <div className="col-sm-2 single-product">
                                <div className="product-f-image">
                                    <img src={product6}  alt=""/>
                                    <div className="product-hover">
                                        <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                        <a href="single-product.html" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                    </div>
                                </div>
                                
                                <h2><a href="single-product.html">Samsung gallaxy note 4</a></h2>

                                <div className="product-carousel-price">
                                    <ins>$400.00</ins>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
