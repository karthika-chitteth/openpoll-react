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
export interface VotePayload {
  pollId: number;
  questionId: number;
  questionType: number;
  answer1: number;
  // answer2: string;
  voterName: string;
}
