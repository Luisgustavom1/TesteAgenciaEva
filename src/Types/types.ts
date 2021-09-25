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

export type ProductType = {
  images: [
    {
      path: string
    }
  ],
  name: string,
  price: string,
  promotional_price: string,
  stars: number
  id: string,
}

export type CategoriesType = {
  id: string,
  bankslip_discount: number,
  name: string,
  product: ProductType[]
}