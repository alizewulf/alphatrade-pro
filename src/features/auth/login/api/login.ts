import { getUsers } from "@/entities/user";
import type { User } from "@/entities/user";

type LoginResult =
  | { success: true; user: User }
  | { success: false; error: string };

function normalizeUser(raw: User): User {
  return {
    ...raw,
    isVip: raw.isVip ?? (raw as unknown as Record<string, unknown>)["IsVip"] === true,
  };
}

export async function loginUser(
  login: string,
  password: string,
): Promise<LoginResult> {
  try {
    const users = await getUsers();
    const raw = users.find(
      (u) => u.login === login && u.password === password,
    );

    if (!raw) {
      return { success: false, error: "Invalid login or password" };
    }

    const user = normalizeUser(raw);
    return { success: true, user };
  } catch {
    return { success: false, error: "Network error. Please try again." };
  }
}
