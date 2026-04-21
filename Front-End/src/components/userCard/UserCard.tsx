import styles from "./UserCard.module.css";

type User = {
  id: number;
  name: string;
  email: string;
  date_of_birth: string;
};

type Props = {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
};

export default function UserCard({ user, onEdit, onDelete }: Props) {
  function formatDate(date: string) {
    return date.split("-").reverse().join("/");
  }

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <span>{formatDate(user.date_of_birth)}</span>
      </div>

      <div className={styles.actions}>
        <button
          className={styles.editBtn}
          onClick={() => onEdit(user)}
        >
          Editar
        </button>

        <button
          className={styles.deleteBtn}
          onClick={() => onDelete(user.id)}
        >
          Deletar
        </button>
      </div>
    </div>
  );
}