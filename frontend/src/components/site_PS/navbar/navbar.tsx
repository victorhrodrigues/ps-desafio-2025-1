'use client'

import style from "./style.module.css"
import "../../../../public/styles/variables.css"
import { NavbarProps } from "@/components/navbar"
import { use, useEffect, useState } from "react"
import { useToast } from "@/components/use-toast"
import { getSession } from "next-auth/react"
import { title } from "process"

interface navBarProps {
    logo: string
}

export default function Navbar({logo}:navBarProps){
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const { toast } = useToast()

    useEffect(() => {
        const requestDataSession = async()  => {
            const sessionResponse = await getSession()

            if(sessionResponse){
                setIsAuth(!!sessionResponse.user)
            }else{
                toast({
                    title: 'Você não está logado!',
                })
            }
        }
        requestDataSession()
    }, [toast])

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
                    <li className={style.nav_item}>
                        <a href="/admin" className={style.icon_button}>
                            {isAuth ? "Logado" : "Logar"}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}