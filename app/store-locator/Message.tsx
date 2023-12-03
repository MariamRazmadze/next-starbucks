import { StyledMessage } from "@/styles/locator/StyledMessage";

interface MessageProps {
  message: string;
}

function Message({ message }: MessageProps) {
  return <StyledMessage>{message}</StyledMessage>;
}

export default Message;
