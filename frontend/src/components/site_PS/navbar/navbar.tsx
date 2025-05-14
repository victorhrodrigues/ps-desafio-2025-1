'use client'

import style from "./style.module.css"
import "../../../../public/styles/variables.css"
import { NavbarProps } from "@/components/navbar"

interface navBarProps {
    logo: string
}

export default function Navbar({logo}:navBarProps){
    
    return(
        <nav className={style.navbar}>
            <div className={style.navbar_nav}>
                <a href="/#">
                    <img className={style.logo} src={logo} alt="Logo USED CARS"></img>
                </a>

                <ul className={style.nav_links}>
                    <li className={style.nav_item}>
                        <a href="#">Início</a>
                    </li>
                    <li className={style.nav_item}>
                        <a href="#">Veículos</a>
                    </li>
                    <li className={style.nav_item}>
                        <a href="#">Categorias</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}