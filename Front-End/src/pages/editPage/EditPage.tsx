import EditLayout from "../../layouts/editLayout/EditLayout"
import Navbar from "../../components/navbar/Navbar"

import styles from "./EditPage.module.css"

export default function EditPage() {
    return (
        <div className={styles.editPage}>
            <Navbar />
            <EditLayout />
        </div>
    );
}