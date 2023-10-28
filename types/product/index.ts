export interface Product {
  id: number
  imageUrl: string
  name: string
  price: number
}
export interface CartItem extends Product {
  quantity: number
}
