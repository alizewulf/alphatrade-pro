export interface UserDTO {
    login: string,
    name: string,
    surname: string,
    password: string,
    onBalance: number,
    cardData: string,
    img: string
}

export interface RegisterDTO {
  users: UserDTO[];
}