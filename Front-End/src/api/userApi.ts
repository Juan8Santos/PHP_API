const BASE_URL = "http://localhost:8000";
const USERS_URL = `${BASE_URL}/api/users`;

type User = {
  id: number;
  name: string;
  email: string;
  date_of_birth: string;
};

type CreateUserDTO = {
  name: string;
  email: string;
  date_of_birth: string;
};

export const deleteUser = async (id: number): Promise<void> => {
  const response = await fetch(`${USERS_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("ERRO BACKEND:", error);
    throw new Error(error);
  }
};

export const createUser = async (data: CreateUserDTO): Promise<User> => {
  const response = await fetch(USERS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Erro ao criar usuário");
  }

  return response.json();
};

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch(USERS_URL);

  if (!response.ok) {
    throw new Error("Erro ao buscar usuários");
  }

  return response.json();
};

export const updateUser = async (id: number, data: CreateUserDTO): Promise<User> => {
  const response = await fetch(`${USERS_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return response.json();
};