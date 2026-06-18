import type { User } from "../model/types";
import { USERS_URL } from "@/shared/config/api";

export async function getUsers(): Promise<User[]> {
  const res = await fetch(USERS_URL);
  return res.json();
}
