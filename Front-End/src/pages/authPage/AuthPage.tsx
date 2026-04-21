import Navbar from "../../components/navbar/Navbar"
import AuthLayout from "../../layouts/authLayout/AuthLayout"
import styles from "./AuthPage.module.css"

export default function AuthPage() {
    return (
        <div className={styles.authPage}>
            <Navbar/>
            <AuthLayout />
        </div>
    );
}