import { create } from '@storybook/theming/create';
import { categoryType } from "./category"

export type vehicleType = {
    id: string
    name: string
    brand: string
    year_of_manufacture: number
    image: string
    category_id: string
    category: categoryType
    quantity_in_stock: number
    created_at: Date
    updated_at: Date
}