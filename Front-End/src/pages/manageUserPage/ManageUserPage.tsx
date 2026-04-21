import { useEffect, useState } from "react";

import styles from "./ManageUserPage.module.css";
import Navbar from "../../components/navbar/Navbar";
import UserCard from "../../components/userCard/UserCard";

import { fetchGetUsers, fetchDeleteUser  } from "../../service/userService";
import { useNavigate } from "react-router-dom";

type User = {
  id: number;
  name: string;
  email: string;
  date_of_birth: string;
};

export default function ManageUserPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await fetchGetUsers();
        setUsers(data);
      } catch (err) {
        setError("Erro ao carregar usuários");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  async function handleDelete(id: number) {
    const confirmDelete = confirm("Tem certeza que deseja deletar?");

    if (!confirmDelete) return;

    try {
      await fetchDeleteUser(id);

      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      console.error("ERRO COMPLETO:", err);
      setError(err.message || "Erro ao deletar usuário");
    }
  }

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.manageUserPage}>
      <Navbar />
      <div className={styles.usersArea}>
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onEdit={(user) => navigate(`/edit/${user.id}`)}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}