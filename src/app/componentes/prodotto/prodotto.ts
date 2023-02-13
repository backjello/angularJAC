export interface Prodotto {
    title: string
    thumbnail:string
    description:string
    brand:string
    category:string
    discountPercentage:number
    id:number
    images:string[]
    price:number
    rating:number
    stock:number
    quantity?:number //opzionale
}
