import { StyledOptions, ButtonOption } from "@/styles/quiz/StyledOptions";

export default function Options({ question, dispatch, answer }: QuestionProps) {
  return (
    <StyledOptions>
      {question.options.map((option, index) => (
        <ButtonOption
          key={option}
          onClick={() => dispatch({ type: "newAnswer", answerPayload: index })}
          $isAnswer={index === answer}
          $isCorrect={index === question.correctOption && index === answer}
          $isWrong={index !== question.correctOption && index === answer}
          disabled={answer !== null}
        >
          {option}
        </ButtonOption>
      ))}
    </StyledOptions>
  );
}
