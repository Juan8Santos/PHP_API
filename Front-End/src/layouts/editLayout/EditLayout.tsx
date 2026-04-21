import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

import { fetchUpdateUser, fetchGetUsers } from "../../service/userService";

import styles from "../authLayout/AuthLayout.module.css";

type DataType = {
  name: string;
  email: string;
  date_of_birth: string;
};

export default function EditUserPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<DataType>({
    name: "",
    email: "",
    date_of_birth: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadUser() {
      try {
        const users = await fetchGetUsers();
        const user = users.find((u: any) => u.id === Number(id));

        if (user) {
          setFormData({
            name: user.name,
            email: user.email,
            date_of_birth: user.date_of_birth,
          });
        }
      } catch (err) {
        setErrorMessage("Erro ao carregar usuário");
      }
    }

    loadUser();
  }, [id]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");

    try {
      await fetchUpdateUser(Number(id), formData);

      navigate("/");
    } catch (err) {
      setErrorMessage("Erro ao atualizar usuário");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={styles.sectionLogin}>
        <h1>Editar usuário</h1>
        <p>Nessa seção você pode editar informações de usuários.</p>
        <form onSubmit={onSubmit} className={styles.formStyle}>
            <Input
            type="text"
            value={formData.name}
            onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
            }
            labelName="Nome"
            placeholder="Nome"
            />

            <Input
            type="email"
            value={formData.email}
            onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
            }
            labelName="E-mail"
            placeholder="Email"
            />

            <Input
            type="date"
            value={formData.date_of_birth}
            onChange={(e) =>
                setFormData({
                ...formData,
                date_of_birth: e.target.value,
                })
            }
            labelName="Data de nascimento"
            placeholder=""
            />

            <p className={styles.error}>{errorMessage}</p>

            <Button
            type="submit"
            textContent="Salvar"
            isLoading={loading}
            />
      </form>
    </section>
  );
}