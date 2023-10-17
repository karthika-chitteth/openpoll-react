import { User } from  '../../user'

export interface RegisterResponse {
  user: User;
  access_token: string;
  refreshToken?: string;
}


