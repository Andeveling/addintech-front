export interface UserI {
  email: string
  password: string
}

export interface LoginRequestI extends UserI {}

export interface UserResponseI {
  id: string
  auth: boolean
  email: string
  token: string
}
