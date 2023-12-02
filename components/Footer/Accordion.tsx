// use client

import { AccordionItem } from "./AccordionItem";
import {
  AccordionOuterWrapper,
  AccorionContainer,
} from "@/styles/StyledFooter";

export function Accordion({ data }: AccordionProps) {
  return (
    <AccordionOuterWrapper>
      <AccorionContainer>
        {data.map((el) => (
          <AccordionItem
            key={el.id}
            id={el.id}
            title={el.title}
            content={el.content}
          />
        ))}
      </AccorionContainer>
    </AccordionOuterWrapper>
  );
}
