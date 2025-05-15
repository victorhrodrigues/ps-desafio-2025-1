'use client'
import { vehicleType } from "@/types/vehicle"
import style from "./style.module.css"
import "../../../../public/styles/variables.css"
import { decrementVehicle } from "@/actions/vehicle"
import { toast } from "@/components/use-toast"
import { useEffect, useState } from "react"


interface vehicleProp {
        vehicle: vehicleType
    }

export default function Card({vehicle}: vehicleProp){
    
    const [compra, setCompra] = useState(vehicle.quantity_in_stock)
    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(() => {
        if (compra === 0) {
            setIsDisabled(true);
        }
    }, [compra]);

    const submit = async () => {
        const { error } = await JSON.parse(await decrementVehicle(vehicle.id))
    
        if (error) {
          toast({
            title: 'Não foi possível comprar o veículo!',
          })
        } else {
          setCompra(compra - 1);
          toast({
            title: 'Veículo comprado com sucesso!',
          })
            console.log("Estou aqui")
          if(compra == 0){
            console.log("Estou aqui 2")
            setIsDisabled(true)
          }
          
        }
    }

    return(
        <div className={style.card}>
            <img src={vehicle.image} alt='Imagem do veículo' className={style.card_image}/>
            <div className={style.card_body}>
                <h2 className={style.card_name}>{vehicle.name}</h2>
                <p className={style.card_content}>Marca: {vehicle.brand}</p>
                <p className={style.card_content}>Categoria: {vehicle.category.name}</p>
                <p className={style.card_content}>Ano de fabricação: {vehicle.year_of_manufacture}</p>
                <p className={style.card_content}>Quantidade: {compra}</p>
                <button className={style.card_button} onClick={submit} disabled={isDisabled}>{isDisabled?"Esgotado":"Comprar"}</button>
            </div>
        </div>
    )
}