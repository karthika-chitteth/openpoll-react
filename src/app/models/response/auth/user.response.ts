export interface RegisterResponse {
  data: Data;
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
