'use client'

import { useToast } from "@/components/use-toast"
import { api } from "@/services/api"
import { vehicleType } from "@/types/vehicle"
import { useEffect, useState } from "react"
import style from "./style.module.css"
import Card from "@/components/site_PS/card/card"
import "../../../public/styles/variables.css"
import Navbar from "@/components/site_PS/navbar/navbar"


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
      <h1 className={style.title}>Veículos</h1>
      <Navbar logo="./images/Logotipo de Carros Usados.png"/>
      <div className={style.wrapper}>
        {vehicles?.map((vehicle: vehicleType, index: number) => (
          <Card vehicle={vehicle} key={index}/>
        ))}
      </div>
      {/* Footer */}
    </div>
  </>)
}
