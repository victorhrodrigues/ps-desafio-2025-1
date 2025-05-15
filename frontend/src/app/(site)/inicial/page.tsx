'use client'

import style from "./style.module.css"

export default function Page() {

    return(
        <div className={style.main}>
            <div className={style.content}>
                <img  className={style.logo} src="./images/LogoCarro.svg"></img>
                <h1 className={style.content_title}>Encontre o seu carro dos sonhos</h1>
                
                <p className={style.content_text}>Procure pela nossa coleção, <strong>com qualidade superior</strong>, de carros usados</p>

                <a className={style.content_button} href = '/veiculos'>Ver veículos</a>
            </div>
            <div className={style.carousel}>

            </div>
        </div>
    )
}