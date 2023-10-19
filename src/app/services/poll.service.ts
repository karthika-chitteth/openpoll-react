import { CreatePollPayload } from "../models/payload/polls/polls.payload.model";
import { ApiResponse } from "../models/response/api.response";
import { CreatePollResponse } from "../models/response/polls/polls.response";
import apiInstance from "./api.service";

export const createPoll = async (
  payload: CreatePollPayload
): Promise<ApiResponse<CreatePollResponse>> => {
  const response: ApiResponse<CreatePollResponse> = await apiInstance
    .post(`polls`, payload)
    .then((res) => res.data);
  return response;
};
