import styles from "./Navbar.module.css"
import SideBarMenu from "../sideBarMenu/SideBarMenu";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import LogoLavarel from "../../assets/Laravel.svg.png"

export default function Navbar() {

    const [menu, setMenu] = useState<boolean>(false)

    const optionsSideBar = [
        {name: "Início", route:"/"},
        {name: "Registrar usuário", route:"/auth"}, 
        {name: "Gerenciar usuários", route:"/manage"},
        {name: "Contato", route:""},
        {name: "Ajuda", route:""}
    ]

    return (
        <nav className={styles.navbarStyle}>
            <img src={LogoLavarel} alt="logo laravel" className={styles.logoLaravel}/>
            <IoMenuOutline className={styles.menuIcon} onClick={() => setMenu(!menu)} />
            <SideBarMenu menu={menu} setMenu={setMenu} liOptions={optionsSideBar}/>
        </nav>
    );
}