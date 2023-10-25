export interface CreatePollResponse {
  id: number;
  title: string;
  isActive: boolean;
  userId: number;
  questions: Questions[];
}
interface Questions {
  pollId: number;
  title: string;
  questionType: string;
  options: OptionsPayload[];
}
interface OptionsPayload {
  title: string;
  questionId: number;
}
