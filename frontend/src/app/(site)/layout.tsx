import Footer from "@/components/site_PS/footer/footer";
import Navbar from "@/components/site_PS/navbar/navbar"
import style from "./style.module.css"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.page}>
        
        <Navbar logo="./images/LogoOffWhite.svg"/>
    
        <main>{children}</main>

        <Footer/>
    </div>
  );
}