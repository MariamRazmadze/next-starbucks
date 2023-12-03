import styled, { css } from "styled-components";
import { Button } from "@/components/UI/Button";

export const StarterTexts = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

export const QuizHeaders = styled.div`
  color: #1e3932;
  max-width: 60%;
  position: relative;
  h3 {
    font-size: 16px;
  }
  h1 {
    font-size: 50px;
  }
  @media (max-width: 768px) {
    max-width: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const QuizFooter = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 70%;
  h2 {
    color: #1e3932;
    font-size: 16px;
  }
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding: 2rem;
    max-width: none;
  }
`;

export const QuizImage = styled.img`
  width: 100%;
  height: auto;
  margin: 0;
  background-image: url(quizBackground.svg);
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: top center;
`;

export const QuizContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  position: relative;
  align-items: center;
  background-color: #d4e9e2;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const QuizHeader = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding-top: 2rem;
`;

export const QuizImageContainer = styled.div`
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const QuizImageContainerMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-top: -20%;
    z-index: 2;
  }
`;

type CoffeeQuizProps = {
  opacity?: number;
};

export const CoffeeQuiz = styled.p<CoffeeQuizProps>`
  -webkit-text-stroke-width: 0.07812rem;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-color: #fff;
  font-size: 60px;
  line-height: 70px;
  font-family: SoDoSansBold, Arial Black;
  font-weight: 700;
  letter-spacing: 0.2em;
  opacity: 0.2;
  ${(props) =>
    props.opacity &&
    css`
      opacity: ${props.opacity};
    `}
  @media
    (max-width: 1200px) {
    font-size: 30px;
    line-height: 35px;
  }
`;

export const BackgroundCoffeeQuiz = styled.div`
  position: absolute;
  top: 10%;

  ${CoffeeQuiz}:first-child {
    opacity: 1;
  }

  ${CoffeeQuiz}:nth-child(2) {
    opacity: 0.8;
  }

  ${CoffeeQuiz}:nth-child(3) {
    opacity: 0.6;
  }

  ${CoffeeQuiz}:nth-child(4) {
    opacity: 0.4;
  }

  ${CoffeeQuiz}:nth-child(5) {
    opacity: 0.2;
  }

  @media (max-width: 768px) {
    position: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const QuestionContainer = styled.div`
  position: relative;
  height: 100vh;
`;

export const QuizButton = styled(Button)`
  background-color: #006241;
  max-width: 150px;
  color: white;
  font-size: 16px;
  padding: 15px 30px;
`;
