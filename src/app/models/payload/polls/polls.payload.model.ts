export interface CreatePollPayload {
  label: string;
  type: string;
  options: OptionsPayload[];
}
export interface OptionsPayload {
  label: string;
}
