import {
  StyledFinishScreen,
  ResultWrapper,
  RestartButton,
  ImageWrapper,
} from "@/styles/quiz/StyledFinishScreen";
import Image from "next/image";

interface FinishedScreenProps {
  points: number | null | undefined;
  maxPossiblePoints: number | undefined;
  dispatch: React.Dispatch<QuizAction>;
}

export default function FinishScreen({
  points,
  maxPossiblePoints,
  dispatch,
}: FinishedScreenProps) {
  const safePoints = points || 0;
  const safeMaxPossiblePoints = maxPossiblePoints || 1;
  const percentage = (safePoints / safeMaxPossiblePoints) * 100;

  return (
    <StyledFinishScreen>
      <ResultWrapper>
        <h3>Your Result:</h3>
        <h1>
          You scored {points} out of {maxPossiblePoints} (
          {Math.ceil(percentage)}
          %)
        </h1>
        <RestartButton onClick={() => dispatch({ type: "restart" })}>
          Restart
        </RestartButton>
      </ResultWrapper>

      <ImageWrapper>
        <Image src="/finish.webp" alt="coffee" width={500} height={500} />
      </ImageWrapper>
    </StyledFinishScreen>
  );
}
