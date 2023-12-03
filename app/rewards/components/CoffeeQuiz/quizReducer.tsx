export const quizInitialState: QuizState = {
  questions: [],
  quizStatus: "loading",
  index: 0,
  answer: null,
  points: 0,
};

export interface QuizState {
  questions?: Question[];
  quizStatus: string;
  index: number;
  answer?: number | null;
  points?: number | null;
}

export interface QuizAction {
  type: string;
  questionsPayload?: Question[];
  answerPayload?: number;
}

export function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.questionsPayload,
        quizStatus: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        quizStatus: "error",
      };
    case "start":
      return { ...state, quizStatus: "active" };
    case "newAnswer": {
      const question = state.questions?.[state.index];
      if (question) {
        return {
          ...state,
          answer: action.answerPayload,
          points:
            action.answerPayload === question.correctOption
              ? state.points
                ? state.points + question.points
                : question.points
              : state.points,
        };
      }
      return state;
    }
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return { ...state, quizStatus: "finished" };
    case "restart":
      return {
        ...quizInitialState,
        questions: state.questions,
        quizStatus: "ready",
      };
    default:
      throw new Error("Action unknown");
  }
}
