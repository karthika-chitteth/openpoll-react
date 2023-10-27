export interface RegisterResponse {
  message: string;
  data: Data;
  error: string;
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
