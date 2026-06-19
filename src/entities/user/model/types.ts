export interface User {
  id?: string;
  login: string;
  name: string;
  surname: string;
  password: string;
  onBalance: number;
  cardData: string | null;
  img: string;
}

export type UserDTO = User;
