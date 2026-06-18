import { getUsers } from "@/entities/user";
import type { User } from "@/entities/user";

type LoginResult =
  | { success: true; user: User }
  | { success: false; error: string };

export async function loginUser(
  login: string,
  password: string
): Promise<LoginResult> {
  try {
    const users = await getUsers();
    const user = users.find(
      (u) => u.login === login && u.password === password
    );

    if (!user) {
      return { success: false, error: "Invalid login or password" };
    }

    return { success: true, user };
  } catch {
    return { success: false, error: "Network error. Please try again." };
  }
}
