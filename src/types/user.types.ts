export interface UserI {
  email: string
  password: string
}

export interface LoginRequestI {
  email: string
  password: string
}

export interface RegisterResponseI extends UserI {
  passwordConfirm: string
}

export interface UserResponseI {
  id: string
  auth: boolean
  email: string
  token: string
}
