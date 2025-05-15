"use client"

import Card from "@/components/site_PS/card/card"
import { vehicleType } from "@/types/vehicle"
import style from "../style.module.css"
import { useEffect, useState } from "react"
import { useToast } from "@/components/use-toast"
import { api } from "@/services/api"


export default function Page() {
    const [vehicles, setVehicles] = useState<vehicleType[] | undefined>()
    const {toast} = useToast()
    useEffect(() => {
        const requestData = async() => {
          const {response} = await api<vehicleType[]>('GET', `/vehicles`)
    
          if (response) {
            setVehicles(response)
          }else{
            toast({
              title: "Veículos não encontrados",
            })
          }
        }
        requestData()
      }, [toast])

  return(
    <div>
        <h1 className={style.title}>Veículos</h1>
        <div className={style.wrapper}>
            {vehicles?.map((vehicle: vehicleType, index: number) => (
            <Card vehicle={vehicle} key={index}/>
            ))}
        </div>
    </div>
  )
}