import { ProductProps } from "./product";

export type ProviderProps = {
    add: (item: ProductProps) => void,
    cart: ProductProps[],
    totalValue: Number,
    remove: (item: ProductProps) => void,
    redunction: (item: ProductProps, index: number) => void,
    increase: (item: ProductProps) => void,
}