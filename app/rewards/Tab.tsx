import { StarButton, GoldStart } from "@/styles/StyledRewards";

export function Tab({ num, onClick, item }: TabProps) {
  return (
    <StarButton onClick={() => onClick(num)}>
      <span>
        {item.number}
        <GoldStart>★</GoldStart>
      </span>
    </StarButton>
  );
}
