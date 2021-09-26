import { createContext, ReactNode, useState } from "react";
import { ShoppingCartContextData, ShoppingCart, ProductType } from "../Types/types";

interface ShoppingCartProviderProps {
  children: ReactNode
}

const ShoppingCartContext = createContext(
  {} as ShoppingCartContextData
);

export function ShoppinCartProvider({ children }: ShoppingCartProviderProps) {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart[]>(() => {
    const shoppingCartStorage = localStorage.getItem('ShoppingCart');

    if(shoppingCartStorage) {
      return JSON.parse(shoppingCartStorage);
    };

    return []
  });

  function addProduct(product: ProductType) {
    const shoppingCartUpdate = [...shoppingCart];

    const newProduct = shoppingCartUpdate.find(shoppingCart => shoppingCart.id === product.id);

    if (newProduct) {
      newProduct.shoppingCartQuantity++
    } else {
      shoppingCartUpdate.push({
        ...product,
        shoppingCartQuantity: 1
      });
    }    

    setShoppingCart(shoppingCartUpdate);
    localStorage.setItem('ShoppingCart', JSON.stringify(shoppingCartUpdate))
  }

  return(
    <ShoppingCartContext.Provider
      value={{ shoppingCart, addProduct}}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
};

export default ShoppingCartContext;