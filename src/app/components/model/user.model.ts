export interface UserModel {
  userId: string;
  name: string;
  phone: string;
  imageUrl: string;
  isAdmin: boolean;
  isBlock: boolean;
  gender: 'MALE' | 'FEMALE';
  isOnline: boolean;
}
