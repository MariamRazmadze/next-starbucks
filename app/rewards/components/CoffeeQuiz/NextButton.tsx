import { AiOutlineArrowRight } from "react-icons/ai";
import {
  StyledNextButton,
  StyledFinishButton,
} from "@/styles/quiz/StyledNextButton";
interface NextButtonProps {
  dispatch: React.Dispatch<QuizAction>;
  answer: number | null | undefined;
  index: number;
  numQuestions: number | undefined;
}

export default function NextButton({
  dispatch,
  answer,
  index,
  numQuestions,
}: NextButtonProps) {
  if (answer === null) return;
  const safeNumQuestions = numQuestions || 0;

  if (index < safeNumQuestions - 1)
    return (
      <StyledNextButton onClick={() => dispatch({ type: "nextQuestion" })}>
        <AiOutlineArrowRight />
      </StyledNextButton>
    );
  if (index === safeNumQuestions - 1)
    return (
      <StyledFinishButton onClick={() => dispatch({ type: "finish" })}>
        finish
      </StyledFinishButton>
    );
}
