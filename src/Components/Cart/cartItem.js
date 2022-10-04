import React from 'react'
import PropTypes from 'prop-types'


const CartItem = ({cantidad,title, precio, img}) => {
    return (
        // <tr className="cart_item">
        //     <td className="product-remove">
        //         <a title="Remove this item" className="remove" href="#">×</a>
        //     </td>

        //     <td className="product-thumbnail">
        //         <img width="145" height="145" alt="poster_1_up" className="shop_thumbnail" src={img} />
        //     </td>

        //     <td className="product-name">
        //         <p href="single-product.html">{title}</p>
        //     </td>

        //     <td className="product-price">
        //         <span className="amount">${precio}</span>
        //     </td>

        //     <td className="product-quantity">
        //         <div className="quantity buttons_added">
        //             <input type="button" className="minus" value="-" />
        //             <input type="number" size="4" className="input-text qty text" title="Qty" value={cantidad} min="0" step="1" />
        //             <input type="button" className="plus" value="+" />
        //         </div>
        //     </td>

        //     <td className="product-subtotal">
        //         <span className="amount">${precio*cantidad}</span>
        //     </td>
        // </tr>
        <>
        <div className="d-flex align-items-center mb-5">
        <div className="flex-shrink-0">
          <img src={img}
            className="img-fluid" style={{width: '150px'}} alt="Generic placeholder image"/>
        </div>
        <div className="flex-grow-1 ms-3">
          <a href="#!" className="float-end text-black"><i className="fa fa-times"></i></a>
          <h5 className="text-primary">{title}</h5>
          <div className="d-flex align-items-center">
            <p className="fw-bold mb-0 me-5 pe-3">${precio}</p>
            <div className="def-number-input number-input safari_only">
              <button className="minus" value="-"><i className="fa-solid fa-minus"></i> </button>
              <input className="quantity fw-bold text-black" min="0" name="quantity" value={cantidad}
                type="number"/>
              <button 
                className="plus" value="+"></button>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

CartItem.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    precio: PropTypes.number,
    cantidad: PropTypes.number,

};
export default CartItem