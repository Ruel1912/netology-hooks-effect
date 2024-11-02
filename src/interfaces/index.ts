export interface IUser {
  id: number
  name: string
  avatar?: string
  details?: IUserDataDetails
}

export interface IListProps {
  users: IUser[]
  activeUser: IUser | null
  changeActiveUser: (user: IUser) => void
}
export interface IDeatilsProps {
  info: IUser
}
export interface IUserDataDetails {
  city: string;
  company: string;
  position: string;
}