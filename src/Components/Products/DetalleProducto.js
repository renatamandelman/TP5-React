import React from 'react'
import { useParams, Link } from "react-router-dom";
import {ProductosArray} from "../../BD";
import { Icon } from '@iconify/react';
import {useCartContext} from '../Context/cartContext'



export const DetalleProducto = () => {
  const {AddToCart } = useCartContext()

  const {id} = useParams() 
  const producto = ProductosArray.find(p => p.id === parseInt(id))
  console.log(producto)


  return (
    <>
   
      <div className="container mt-5 mb-5"> 
         <div className="card"> 
          <div className="row g-0">
            <div className="col-md-6 border-end">
              <div className="d-flex flex-column justify-content-center">
                <div className="main_image">
                  <img src={producto.img} id="main_product_image" width="350" />
                </div>
                <div className="thumbnail_images">
                  <ul id="thumbnail">
                    <li><img onclick="changeImage(this)" src={producto.img} width="70" /></li>
                    <li><img onclick="changeImage(this)" src={producto.img2} width="70" /></li>
                    <li><img onclick="changeImage(this)" src={producto.img3} width="70" /></li>
                    <li><img onclick="changeImage(this)" src={producto.img4} width="70" /></li>
                  </ul>	</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-3 right-side">
                <div className="d-flex justify-content-between align-items-center">
                  <h3>{producto.title}</h3>	<span className="heart"><Icon icon="bx:heart" /></span>
                </div>
                <div className="mt-2 pr-3 content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>	<h3>${producto.precio}</h3>
                <div className="ratings d-flex flex-row align-items-center">
                  <div className="d-flex flex-row">
                    <Icon icon='bxs:star' />
                    <Icon icon='bxs:star' />
                    <Icon icon='bxs:star' />
                    <Icon icon='bxs:star' />
                    <Icon icon='bx:star' />
                  </div>
                  <span>441 reviews</span>
                </div>	
                <div className="buttons d-flex flex-row mt-5 gap-3" style={{paddingTop:'40%',paddingLeft:'50%'}}>
                  <button className="btn buyNow">Buy Now</button>
                  <button className="btn addToCart" onClick={() => AddToCart(producto.id)}  >Add to Cart</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>)
}
