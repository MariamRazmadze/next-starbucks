import {
  StarterTexts,
  QuizContainer,
  QuizImage,
  QuizHeader,
  QuizHeaders,
  QuizFooter,
  QuizImageContainer,
  QuizImageContainerMobile,
  BackgroundCoffeeQuiz,
  CoffeeQuiz,
  QuizButton,
} from "@/styles/quiz/StyledQuiz";

interface StartScreenProps {
  numQuestions?: number;
  dispatch: React.Dispatch<QuizAction>;
}

export default function StartScreen({
  numQuestions,
  dispatch,
}: StartScreenProps) {
  return (
    <QuizContainer>
      <QuizImageContainer>
        <QuizImage src="starter.webp" alt="quiz" />
      </QuizImageContainer>
      <StarterTexts>
        <QuizHeader>
          <BackgroundCoffeeQuiz>
            <CoffeeQuiz>COFFEE QUIZ</CoffeeQuiz>
            <CoffeeQuiz>COFFEE QUIZ</CoffeeQuiz>
            <CoffeeQuiz>COFFEE QUIZ</CoffeeQuiz>
            <CoffeeQuiz>COFFEE QUIZ</CoffeeQuiz>
            <CoffeeQuiz>COFFEE QUIZ</CoffeeQuiz>
          </BackgroundCoffeeQuiz>
          <QuizHeaders>
            <h3>NEW COFFEE QUIZ</h3>
            <h1>{numQuestions} Questions to Find the Truth</h1>
          </QuizHeaders>
        </QuizHeader>
        <QuizImageContainerMobile>
          <QuizImage src="starter.webp" alt="quiz" />
        </QuizImageContainerMobile>
        <QuizFooter>
          <h2>
            Take our new Coffee Quiz to discover how deep your coffee knowledge
            really goes!
          </h2>
          <QuizButton onClick={() => dispatch({ type: "start" })}>
            start
          </QuizButton>
        </QuizFooter>
      </StarterTexts>
    </QuizContainer>
  );
}
