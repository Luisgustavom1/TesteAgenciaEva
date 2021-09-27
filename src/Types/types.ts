export type typeTheme = {
    bwBlack: string,
    bwBlack2: string,
    bwWhite: string,
    bwWhite1: string,
    bwWhite2: string,
    helpersWarning: string,
    helpersInfo: string,
    brandPrimary: string,
    brandPrimaryLight: string,
    brandPrimaryDark: string
} 

export interface ProductType {
  id: string,
  name: string,
  stars: number,
  price: string,
  promotional_price: string,
  images: [
    {
      path: string
    }
  ],
}

export interface OnlyProduct extends ProductType{
  category: {
    id: string,
    name: string,
    bankslip_discount: number
  }
}

export type CategoriesType = {
  id: string,
  bankslip_discount: number,
  name: string,
  product: ProductType[]
}

export interface ShoppingCart extends ProductType{
  shoppingCartQuantity: number
}

export interface ShoppingCartContextData {
  shoppingCart: ShoppingCart[],
  addProduct: (product: ProductType | OnlyProduct) => void 
} 