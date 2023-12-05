import { CardStyles } from "./CardStyles";

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return <CardStyles>{children}</CardStyles>;
}
