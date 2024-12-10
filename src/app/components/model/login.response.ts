export interface UserLoginResponse{
  message: string,
  token: string,
  user:  User
}


export interface User{
  gender: string,
  imageUrl: string,
  isAdmin: boolean,
  isOnline: boolean,
  name: string,
  phone: string,
  userId: string
}
