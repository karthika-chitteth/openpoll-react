
import { RegisterPayload } from '../models/payload/auth/register.payload.model';
import { ApiResponse } from '../models/response/api.response';
import { RegisterResponse } from '../models/response/auth/register.response';
// import { RegisterError, RegisterResponse } from '../models/response/auth/register.response';
import apiInstance from './api.service';


export const register = async (payload: RegisterPayload): Promise<ApiResponse<RegisterResponse>> => {
  const response: ApiResponse<RegisterResponse> = await apiInstance.post(`/users`, payload)
    .then((res) => res.data)
  return response;
};
