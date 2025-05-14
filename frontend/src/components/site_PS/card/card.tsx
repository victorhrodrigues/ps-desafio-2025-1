'use client'
import { vehicleType } from "@/types/vehicle"
import style from "./style.module.css"


interface vehicleProp {
        vehicle: vehicleType
    }

export default function Card({vehicle}: vehicleProp){
    
    return(
        <div>
            <img src={vehicle.image} alt='Imagem do veículo'/>
            <div>
                <h2>{vehicle.name}</h2>
                <p>Marca: {vehicle.brand}</p>
                <p>Categoria: {vehicle.category.name}</p>
                <p>Ano de fabricação: {vehicle.year_of_manufacture}</p>
                <p>Quantidade: {vehicle.quantity_in_stock}</p>
            </div>
        </div>
    )
}