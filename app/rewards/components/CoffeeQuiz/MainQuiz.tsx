"use client";

import { quizReducer, quizInitialState } from "./quizReducer";
import { useEffect, useReducer } from "react";
import styled from "styled-components";
import { QuestionContainer } from "@/styles/quiz/StyledQuiz";
import FinishScreen from "./FinishScreen";
import NextButton from "./NextButton";
import QuestionComponent from "./QuestionComponent";
import StartScreen from "./StartScreen";

const StyledMainQuiz = styled.main`
  width: 100vw;
  height: 100vh;
`;

export default function MainQuiz() {
  const [{ questions, quizStatus, index, answer, points }, dispatchQuiz] =
    useReducer(quizReducer, quizInitialState);
  const numQuestions = questions?.length;
  const maxPossiblePoints = questions?.reduce(
    (prev, cur) => prev + cur.points,
    0
  );
  useEffect(() => {
    fetch("https://starbucksapi.pythonanywhere.com/quiz")
      .then((res: Response) => res.json())
      .then((data) =>
        dispatchQuiz({
          type: "dataReceived",
          questionsPayload: data.questions,
        })
      )
      .catch((err) => dispatchQuiz({ type: "dataFailed" }));
  }, []);

  return (
    <StyledMainQuiz>
      {quizStatus === "ready" && (
        <StartScreen numQuestions={numQuestions} dispatch={dispatchQuiz} />
      )}
      {quizStatus === "active" && questions && questions[index] && (
        <QuestionContainer>
          <QuestionComponent
            question={questions[index]}
            dispatch={dispatchQuiz}
            answer={answer}
            index={index}
            numQuestions={numQuestions}
            points={points}
            maxPossiblePoints={maxPossiblePoints}
          />
          <NextButton
            dispatch={dispatchQuiz}
            answer={answer}
            index={index}
            numQuestions={numQuestions}
          />
        </QuestionContainer>
      )}
      {quizStatus === "finished" && (
        <FinishScreen
          points={points}
          maxPossiblePoints={maxPossiblePoints}
          dispatch={dispatchQuiz}
        />
      )}
    </StyledMainQuiz>
  );
}
