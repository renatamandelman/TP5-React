import React, {useEffect, useState} from "react";
import {ProductosArray} from '../../BD'
import ProductSingle from './ProductSingle'

function Productos() {
    const [productos, setProductos] = useState([])
   
    useEffect(() => {
        setProductos(ProductosArray) 
    }, [])

    return (
        productos.map((producto) => (
            <ProductSingle key={producto.id} {...producto} />

        ))
    )
}

export default Productos