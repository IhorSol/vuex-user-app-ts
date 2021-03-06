export interface RootState {
  users: Array<User>
}

export interface User {
  name: string
  surname: string
  age: number
  phone: string
  email: string
  status: string
}
