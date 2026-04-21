import Navbar from "../../components/navbar/Navbar"
import styles from "./HomePage.module.css"

export default function homePage() {
    return (
        <div className={styles.homePage}>
            <Navbar/>
            <h2>Bem vindo ao painel administrativo.</h2>
            <p>Aqui você pode usurfruir de funções como registrar, editar, excluir, e gerenciar usuarios. Aproveite!</p>
        </div>
    );
}