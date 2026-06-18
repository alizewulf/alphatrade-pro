import type { User } from "../model/types";
import { apiClient } from "@/shared/api";

export const registerUser = async (user: User) => {
  const res = await apiClient.post("/users", user);
  return res.data;
};
