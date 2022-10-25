import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ProductosArray } from '../../BD'

const ShoppingCartContext = createContext()

export function useCartContext() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])
    const [cantTotal, setCantTotal] = useState(0)

    useEffect(() => {
        let x = localStorage.getItem("cartItems")
        setCartItems(JSON.parse(x))
        let y = localStorage.getItem("cantTotal")
        setCantTotal(JSON.parse(y))

    }, []);

      useEffect(() => {
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
          localStorage.setItem("CantTotal", JSON.stringify(cantTotal))
      }, [cartItems]);

    const total = useMemo(() => {
        console.log(cartItems);
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
    const Sumar =(id)=>{
        setCartItems(cartItems.map((prod) => {
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
    }
    const Restar =(id)=>{
        setCartItems(cartItems.map((prod) => {
            if(prod.id === id) {
                if (prod.cantidad > 1){
                    return (
                        {
                            ...prod,
                            cantidad: prod.cantidad-=1
                        }
                    )
                }
            } else {
                return prod
            }
        }).filter(p => p !== undefined))
    }
    const removeProduct = (id) => {
        const cantProductosAEliminar =  cartItems.filter((prod) => prod.id === id)
        const newCart =  cartItems.filter((prod) => prod.id !== id)
        setCartItems(newCart)
        setCantTotal(cantTotal - cantProductosAEliminar[0].cantidad)
    }
   
    return (
        <ShoppingCartContext.Provider value={{cartItems, setCartItems, AddToCart, total, Sumar ,Restar,removeProduct} }>
            {children}
        </ShoppingCartContext.Provider>
    )
}
