import Input from "../../components/input/Input"
import Button from "../../components/button/Button"
import {fetchCreateUsers} from "../../service/userService";

import styles from "./AuthLayout.module.css"

import { useState } from "react";

export default function AuthLayout() {

    type DataType = {
        name: string;
        email: string;
        date_of_birth: string;
    }

    const [formData, setFormData] = useState<DataType>({
        name: "",
        email: "",
        date_of_birth: ""
    });
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setLoading(true);
        setErrorMessage("");

        if (!formData.name.trim()) {
            setErrorMessage("Nome é obrigatório.");
            setLoading(false);
            return;
        }

        if (!formData.email.trim()) {
            setErrorMessage("Email é obrigatório.");
            setLoading(false);
            return;
        }

        if (!formData.date_of_birth) {
            setErrorMessage("Data de nascimento é obrigatória.");
            setLoading(false);
            return;
        }

        try {
            const response = await fetchCreateUsers(formData);

            console.log("Sucesso:", response);

            setFormData({
            name: "",
            email: "",
            date_of_birth: ""
            });

        } catch (err) {
            console.error(err);
            setErrorMessage("Erro ao cadastrar usuário.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className={styles.sectionLogin}>
            <h1>Registrar</h1>
            <p>Digite as credenciais para registrar um novo usuário.</p>
            <form onSubmit={onSubmit} className={styles.formStyle}>
                <Input
                    type="text"
                    placeholder="Insira o nome"
                    value={formData.name}
                    onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                    labelName="Nome"
                />
                <Input
                    type="email"
                    placeholder="Insira o email"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                    labelName="E-mail"
                />
                <Input
                    type="date"
                    placeholder="Insira a data de nascimento"
                    value={formData.date_of_birth}
                    onChange={(e) =>
                        setFormData({ ...formData, date_of_birth: e.target.value })
                    }
                    labelName="Data de nascimento"
                />
                <p className={styles.error}>{errorMessage}</p>
                <Button type={"submit"} textContent={"Entrar"} style={{marginTop: "15px"}} isLoading={loading}/>
            </form>
        </section>
    );
}