import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useCartContext } from '../Context/cartContext'
import { Icon } from '@iconify/react';



const CartItem = ({ id, cantidad, title, precio, img }) => {
  const { Sumar, Restar, removeProduct } = useCartContext()

  return (

    <>
      <div className="d-flex align-items-center mb-5">
        <div className="flex-shrink-0">
          <img src={img}
            className="img-fluid" style={{ width: '150px' }} alt="Generic placeholder image" />
        </div> 
        <div className="flex-grow-1 ms-3">

          <h5 className="">{title}</h5>

          <div className="d-flex align-items-center">
            <p className="fw-bold mb-0 me-5 pe-3">${precio}</p>
            <div className="def-number-input d-flex flex-row align-items-center number-input safari_only">
              <button className="minus" onClick={() => Restar(id)} value="-"></button>
              <input className="quantity fw-bold text-black" min="0" name="quantity" value={cantidad}
                type="number" />
              <button onClick={() => Sumar(id)} className="plus" value="+"></button>
            </div>        
            <button onClick={() => removeProduct(id)} className="btn remove"><Icon icon="dashicons:remove" rotate={2} hFlip={true} vFlip={true} /></button>

          </div>
        </div>
      </div>
    </>
  )
}

CartItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  img: PropTypes.string,
  precio: PropTypes.number,
  cantidad: PropTypes.number,

};
export default CartItem