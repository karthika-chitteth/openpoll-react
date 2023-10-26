import { CreatePollPayload } from "../models/payload/polls/polls.payload.model";
import { ApiResponse } from "../models/response/api.response";
import {
  CreatePollResponse,
  PollQuestionResponse,
  PublishPollResponse,
} from "../models/response/polls/polls.response";
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
    .get(`/Poll/` + id)
    // .get(`/polls/` + id)
    .then((res) => res.data);
  return response;
};
export const updatePoll = async (
  payload: CreatePollPayload,
  id: number
): Promise<ApiResponse<CreatePollResponse>> => {
  const response: ApiResponse<CreatePollResponse> = await apiInstance
    .put(`/Poll/` + id, payload)
    // .get(`/polls/` + id)
    .then((res) => res.data);
  return response;
};
export const deletePoll = async (
  id: number
): Promise<ApiResponse<CreatePollResponse>> => {
  const response: ApiResponse<CreatePollResponse> = await apiInstance
    .delete(`/Poll/` + id)
    .then((res) => res.data);
  return response;
};
export const activatePoll = async (
  id: number
): Promise<ApiResponse<PublishPollResponse>> => {
  const response: ApiResponse<PublishPollResponse> = await apiInstance
    .post(`/Poll/` + id + "/Publish")
    .then((res) => res.data);
  return response;
};
export const deactivatePoll = async (
  id: number
): Promise<ApiResponse<PublishPollResponse>> => {
  const response: ApiResponse<PublishPollResponse> = await apiInstance
    .post(`/Poll/` + id + "/unPublish")
    .then((res) => res.data);
  return response;
};
export const getQuestion = async (
  id: string
): Promise<ApiResponse<PollQuestionResponse>> => {
  const response: ApiResponse<PollQuestionResponse> = await apiInstance
    .get(`/Poll/GetPublishedPoll/` + id)
    .then((res) => res.data);
  return response;
};
