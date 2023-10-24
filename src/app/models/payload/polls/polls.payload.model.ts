export interface CreatePollPayload {
  questions: QuestionsPayload;
}
export interface QuestionsPayload {
  title: string;
  type: string;
  options: OptionsPayload[];
}
export interface OptionsPayload {
  title: string;
}
