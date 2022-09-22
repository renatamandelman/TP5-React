import React from 'react'
import PropTypes from 'prop-types'


const CartItem = ({cantidad,title, precio, img}) => {
    return (
        <tr className="cart_item">
            <td className="product-remove">
                <a title="Remove this item" className="remove" href="#">×</a>
            </td>

            <td className="product-thumbnail">
                <img width="145" height="145" alt="poster_1_up" className="shop_thumbnail" src={img} />
            </td>

            <td className="product-name">
                <h2 href="single-product.html">{title}</h2>
            </td>

            <td className="product-price">
                <span className="amount">${precio}</span>
            </td>

            <td className="product-quantity">
                <div className="quantity buttons_added">
                    <input type="button" className="minus" value="-" />
                    <input type="number" size="4" className="input-text qty text" title="Qty" value={cantidad} min="0" step="1" />
                    <input type="button" className="plus" value="+" />
                </div>
            </td>

            <td className="product-subtotal">
                <span className="amount">${precio*cantidad}</span>
            </td>
        </tr>
    )
}

CartItem.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    precio: PropTypes.number,
    cantidad: PropTypes.number,

};
export default CartItem