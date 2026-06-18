export interface User {
  id?: string;
  login: string;
  name: string;
  surname: string;
  password: string;
  onBalance: number;
  cardData: string;
  img: string;
}

export type UserDTO = User;
