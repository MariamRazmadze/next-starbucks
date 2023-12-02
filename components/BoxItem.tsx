"use client";
import Image from "next/image";

import {
  BoxTexts,
  BoxTitle,
  BoxPromo,
  HomeButton,
  BoxContainer,
  BoxWrapper,
} from "@/styles/StyledHome";

export function BoxItem({ item, isReversed }: BoxItemProps) {
  return (
    <BoxWrapper>
      <BoxContainer
        $isReversed={isReversed}
        style={{ backgroundColor: item.backgroundColor }}
      >
        <Image
          src={"/" + item.photoName}
          alt={item.title}
          width={720}
          height={620}
        />

        <BoxTexts>
          <BoxTitle>{item.title}</BoxTitle>
          <BoxPromo>{item.promo}</BoxPromo>
          <HomeButton
            $buttonColor={item.buttonColor}
            $buttonHoverColor={item.buttonHoverColor}
          >
            {item.buttonText}
          </HomeButton>
        </BoxTexts>
      </BoxContainer>
    </BoxWrapper>
  );
}
