export interface CreatePollPayload {
  title: string;
  questions: QuestionsPayload[];
}
export interface QuestionsPayload {
  title: string;
  questionType: number;
  options: OptionsPayload[];
}
export interface OptionsPayload {
  title: string;
}
