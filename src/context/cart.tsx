import React, { createContext, useContext, useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { ProductProps } from '../@types/product'
import { ProviderProps } from '../@types/providerContext'

const CartContext = createContext<ProviderProps>({
  add: (item: ProductProps) => null,
  cart: [],
  remove: (item: ProductProps) => null,
  totalValue: 0,
  redunction: (item: ProductProps, index: number) => null,
  increase: (item: ProductProps) => null
})

export default function CartProvider({ children }) {
  const [cart, setCart] = useState<ProductProps[]>([])
  const [totalValue, setTotalValue] = useState<Number>(0)

  useEffect(() => {
    let value = 0;
    cart.map((item) => {
      value = value + item.price * item.count
    })

    setTotalValue(value)
  }, [cart])

  function add(item: ProductProps) {
    const newCart = cart
    const check = newCart.every(product => {
      return item._id !== product._id
    })
    if (check) {
      cart.filter(product => {
        return product._id === item._id
      })
      newCart.push(item)
      setCart([...newCart])
    }
  }

  function redunction(item: ProductProps) {
    const newCart = cart
    newCart.forEach(product => {
      if (product._id === item._id) {
        item.count === 1 ? item.count = 1 : item.count -= 1;
      }
      setCart([...newCart])
    })
  }

  function increase(item: ProductProps) {
    const newCart = cart;
    newCart.forEach(product => {
      if (product._id === item._id) {
        if (product.count < item.stock) {
          item.count += 1;
        } else {
          Alert.alert(
            `Existem somente ${item.stock} produto(s) no estoque`, "Tente escolher outro tênis, aposto que vai achar outro bem lindo também!"
          )
        }
      }
    })
    setCart([...newCart])
  }

  function remove(item: ProductProps) {
    const newCart = cart;
    cart.forEach((product, index) => {
      if (product._id === item._id) {
        cart.splice(index, 1)
        item.count = 1;
      }
    })

    setCart([...newCart])
  }

  const store: ProviderProps = {
    add,
    cart,
    totalValue,
    remove,
    redunction,
    increase
  }

  return (
    <CartContext.Provider value={store}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  const {
    cart,
    add,
    totalValue,
    remove,
    redunction,
    increase
  } = context

  return {
    cart,
    add,
    totalValue,
    remove,
    redunction,
    increase
  }
}