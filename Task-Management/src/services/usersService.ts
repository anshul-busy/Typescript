import axios from "axios";

export interface User {
  id: number;
  name: string;
  email:string
}

const URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async (): Promise<User[]> => {
  const res = await axios.get<User[]>(URL);
  
  return res.data;
};