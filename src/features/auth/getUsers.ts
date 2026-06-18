import { USERS_URL } from "@/shared/api/config";
import type { UserDTO } from "./interface";

export async function getUsers():Promise<UserDTO[]> {
    const res = await fetch(USERS_URL)
    const data = res.json()
    return data
}
