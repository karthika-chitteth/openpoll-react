export interface RegisterResponse {
  data: Data;
  // user: User;
  // access_token: string;
  // refreshToken?: string;
}
export interface Data {
  name: string;
  uniqueId: string;
}
export interface LoginResponse {
  name: string;
  email: string;
  uniqueId: string;
}
