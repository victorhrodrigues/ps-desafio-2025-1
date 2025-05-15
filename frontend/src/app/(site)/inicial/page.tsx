'use client'

import style from "./style.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { vehicleType } from "@/types/vehicle";
import { useToast } from "@/components/use-toast";
import { api } from "@/services/api";
import Card from "@/components/site_PS/card/card"

export default function Page() {
    const [vehicles, setVehicles] = useState<vehicleType[] | undefined>()
    const {toast} = useToast()
    useEffect(() => {
        const requestData = async() => {
          const {response} = await api<vehicleType[]>('GET', `/vehicles`)
    
          if (response) {
            const filteredVehicles = response.filter(vehicle => vehicle.quantity_in_stock > 0)
            setVehicles(filteredVehicles)
          }else{
            toast({
              title: "Veículos não encontrados",
            })
          }
        }
        requestData()
      }, [toast])
    return(
        <div className={style.main}>
            <div className={style.content}>
                <img  className={style.content_logo} src="./images/LogoCarro.svg"></img>
                <h1 className={style.content_title}>Encontre o seu carro dos sonhos</h1>
                
                <p className={style.content_text}>Procure pela nossa coleção, <strong>com qualidade superior</strong>, de carros usados</p>

                <a className={style.content_button} href = '/veiculos'>Ver veículos</a>
            </div>
            <div className={style.carousel}>
                <h1>Carros em Destaque</h1>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={
                        {
                            1024: { slidesPerView: 3 },
                            768: { slidesPerView: 2 },
                            480: { slidesPerView: 1  },
                        }
                    }
                >
                {vehicles?.map((vehicle, index) => (
                    <SwiperSlide key={index}>
                    <Card vehicle={vehicle} />
                    </SwiperSlide>
                ))}
                ...
                </Swiper> 
                
            </div>
        </div>
    )
}