import { OptionsPayload } from "../../payload/polls/polls.payload.model";

export interface CreatePollResponse {
  label: string;
  type: string;
  options: OptionsPayload[];
}
