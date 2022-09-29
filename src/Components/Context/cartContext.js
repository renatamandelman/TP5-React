import { createContext, useContext, useEffect, useState } from 'react'
import { ProductosArray } from '../../BD'

const ShoppingCartContext = createContext()

export function useCartContext() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])
    
    useEffect(() => {
        console.log(cartItems);
        console.log(
            cartItems.map(c => c.cantidad).reduce((a, b) => a + b, 0));
    }, [cartItems])

    const AddToCart = (id) =>{
        const producto = ProductosArray.find(prod => prod.id === id)
        const newCart = cartItems
        const ProductIs = newCart.find(prod  => prod.id === id)
        if (ProductIs) {
            setCartItems(newCart.map((prod) => {
                if(prod.id === id) {
                    return (
                        {
                            ...prod,
                            cantidad: prod.cantidad+=1
                        }
                    )
                } else {
                    return prod
                }
            }))
        } else {
            setCartItems([...cartItems, {
                ...producto,
                cantidad: 1
            }])
        }


    }

   
    return (
        <ShoppingCartContext.Provider value={{cartItems, setCartItems, AddToCart} }>
            {children}
        </ShoppingCartContext.Provider>
    )
}
