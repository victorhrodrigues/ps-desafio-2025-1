'use client'

import style from "./style.module.css"
import { FaInstagram } from "react-icons/fa";
import "../../../../public/styles/variables.css"

export default function Footer(){

    return (
    <footer className={style.footer}>
        <div className={style.footer_content}>
            <div className={style.contacts}>
                <h2>Seu site com os melhores veículos usados!</h2>
                <p>Só aqui com os melhores preços!</p>
                <div className={style.social_media}>
                    <a href="#" className={style.social_link} id ="instagram" >
                        <FaInstagram />
                    </a>
                    <a href="#" className={style.social_link} id ="instagram" >
                        <FaInstagram />
                    </a>
                    <a href="#" className={style.social_link} id ="instagram" >
                        <FaInstagram />
                    </a>
                </div>
            </div>

            <ul className={style.list}>
                <li>
                    <h3>Nossa empresa</h3>
                </li>
                <li>
                    <a href="#" className={style.sobre_link}>
                        AdaptiCast
                    </a>
                </li>
                <li>
                    <a href="#" className={style.sobre_link}>
                        Adapti - Soluções Web
                    </a>
                </li>
            </ul>

            <ul className={style.list}>
                <li>
                    <h3>Parcerias</h3>
                </li>
                <li>
                    <a href="#" className={style.sobre_link}>
                        UFES
                    </a>
                </li>
            </ul>
        </div>
        <div className={style.copyright}>
            2025, Feito com ❤️ por Adapti Soluções Web
        </div>
    </footer>
    )
}