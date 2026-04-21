import { createUser, getUsers, deleteUser, updateUser } from "../api/userApi";

type DataType = {
    name: string;
    email: string;
    date_of_birth: string;
}

export const fetchCreateUsers = async (formData: DataType) => {
  return await createUser(formData);
};

export const fetchGetUsers = async () => {
  return await getUsers();
};

export const fetchDeleteUser = async (id: number) => {
  return await deleteUser(id);
};

export const fetchUpdateUser = async (id: number, data: DataType) => {
  return await updateUser(id, data);
};