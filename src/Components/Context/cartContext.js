import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ProductosArray } from '../../BD'

const ShoppingCartContext = createContext()

export function useCartContext() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])
    const total = useMemo(() => {
        return cartItems.map(c => c.cantidad * c.precio).reduce((a, b) => a + b, 0)
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
        <ShoppingCartContext.Provider value={{cartItems, setCartItems, AddToCart, total} }>
            {children}
        </ShoppingCartContext.Provider>
    )
}
