'use client'

import { useToast } from "@/components/use-toast"
import { api } from "@/services/api"
import { vehicleType } from "@/types/vehicle"
import { useEffect, useState } from "react"
import style from "./style.module.css"
import Card from "@/components/site_PS/card/card"


export default function Home() {
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
  return (
  <>
    <div className={style.page}>
      {vehicles?.map((vehicle: vehicleType, index: number) => (
        <Card vehicle={vehicle} key={index}/>
      ))}
    </div>
  </>)
}
