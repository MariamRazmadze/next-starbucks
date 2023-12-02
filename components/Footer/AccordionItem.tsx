"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import {
  Item,
  TitleContainer,
  TiTleText,
  ArrowIcon,
  ContentBox,
  AccordionUl,
  AccordionLi,
} from "@/styles/StyledFooter";

export function AccordionItem({ title, content }: AccordionData) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <Item $isOpen={isOpen} onClick={handleToggle}>
      <TitleContainer>
        <TiTleText> {title}</TiTleText>
        <ArrowIcon>
          <IoIosArrowDown />
        </ArrowIcon>
      </TitleContainer>
      <ContentBox>
        <AccordionUl>
          {content.map((link) => (
            <AccordionLi key={link.id}>
              <a href={link.link}>{link.text}</a>
            </AccordionLi>
          ))}
        </AccordionUl>
      </ContentBox>
    </Item>
  );
}
