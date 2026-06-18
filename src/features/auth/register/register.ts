import axios from "axios";
import { USERS_URL } from "@/shared/api/config";
import type { UserDTO } from "../interface";

export const registerUser = async (user: UserDTO) => {
  const res = await axios.post(USERS_URL, user);
  return res.data;
};