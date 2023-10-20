import {
  LoginPayload,
  RegisterPayload,
} from "../models/payload/auth/user.payload.model";
import { ApiResponse } from "../models/response/api.response";
import {
  LoginResponse,
  RegisterResponse,
} from "../models/response/auth/user.response";
// import { RegisterError, RegisterResponse } from '../models/response/auth/register.response';
import apiInstance from "./api.service";

export const register = async (
  payload: RegisterPayload
): Promise<ApiResponse<RegisterResponse>> => {
  const response: ApiResponse<RegisterResponse> = await apiInstance
    // .post(`User/register`, payload)
    .post(`/users`, payload)
    .then((res) => res.data);
  return response;
};
export const login = async (
  payload: LoginPayload
): Promise<ApiResponse<LoginResponse>> => {
  const response: ApiResponse<LoginResponse> = await apiInstance
    .post(`/users`, payload)
    .then((res) => res.data);
  return response;
};
