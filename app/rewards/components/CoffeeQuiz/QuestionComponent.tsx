import Options from "./Options";

import Progress from "./Progress";
import {
  QuestionWrapper,
  StyledQuestion,
  QuestionBlock,
} from "@/styles/quiz/StyledQuestion";

export default function QuestionComponent({
  question,
  dispatch,
  answer,
  index,
  numQuestions,
  points,
  maxPossiblePoints,
}: QuestionProps) {
  return (
    <QuestionWrapper>
      <Progress
        index={index}
        numQuestions={numQuestions}
        points={points}
        maxPossiblePoints={maxPossiblePoints}
      />
      <StyledQuestion>
        <QuestionBlock>
          <h3>
            {question.question}
            <span>_______________.</span>
          </h3>
          <p>Select one to proceed.</p>
        </QuestionBlock>
        <Options
          question={question}
          dispatch={dispatch}
          answer={answer}
          index={index}
          numQuestions={numQuestions}
          points={points}
          maxPossiblePoints={maxPossiblePoints}
        />
      </StyledQuestion>
    </QuestionWrapper>
  );
}
