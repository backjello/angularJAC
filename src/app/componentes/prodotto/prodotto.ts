export interface Prodotto {
    title: string
    thumbnail:string
    description:string
    brand:string
    category:string
    discountPercentage:number,
    discountedPrice?:number, // sconto utilizzato solo per gli ordini
    id:number
    images:string[]
    price:number
    rating:number
    stock:number
    quantity?:number //opzionale
    total?:number // totale dell'ordine usato solo per gli ordini

}
