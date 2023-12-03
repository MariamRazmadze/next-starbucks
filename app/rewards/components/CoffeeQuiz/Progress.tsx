import {
  StyledProgress,
  StyledListItem,
  ProgressBar,
} from "@/styles/quiz/StyledProgress";

interface ProgressProps {
  index: number;
  numQuestions: number | undefined;
  points: number | null | undefined;
  maxPossiblePoints: number | undefined;
  answer?: number | null;
}

export default function Progress({ index, numQuestions = 0 }: ProgressProps) {
  const renderListItems = () => {
    const items = [];
    for (let i = 0; i < numQuestions; i++) {
      items.push(
        <StyledListItem key={i} isActive={i === index}>
          {String(i + 1).padStart(2, "0")}
        </StyledListItem>
      );
    }
    return items;
  };
  return (
    <StyledProgress>
      <ProgressBar>{renderListItems()}</ProgressBar>
    </StyledProgress>
  );
}
