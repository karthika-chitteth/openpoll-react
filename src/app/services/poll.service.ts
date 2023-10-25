import { CreatePollPayload } from "../models/payload/polls/polls.payload.model";
import { ApiResponse } from "../models/response/api.response";
import { CreatePollResponse } from "../models/response/polls/polls.response";
import apiInstance from "./api.service";

export const createPoll = async (
  payload: CreatePollPayload
): Promise<ApiResponse<CreatePollResponse>> => {
  const response: ApiResponse<CreatePollResponse> = await apiInstance
    .post(`/poll`, payload)
    .then((res) => res.data);
  return response;
};
export const listPoll = async (): Promise<ApiResponse<CreatePollResponse>> => {
  const response: ApiResponse<CreatePollResponse> = await apiInstance
    .get(`/polls`)
    .then((res) => res.data);
  return response;
};
export const getPoll = async (
  id: number
): Promise<ApiResponse<CreatePollResponse>> => {
  const response: ApiResponse<CreatePollResponse> = await apiInstance
    // .get(`/Poll/` + id)
    .get(`/polls/` + id)
    .then((res) => res.data);
  return response;
};
