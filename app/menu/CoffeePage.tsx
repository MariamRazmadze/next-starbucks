"use client";

type CoffeePageProps = {
  coffee: CoffeeItem;
};
import { useState } from "react";
import SizeSelector from "./SizeSelector";
import {
  TopSection,
  ImageContainer,
  PlaceholderImage,
  CoffeeImage,
  HeaderTexts,
  CoffeeName,
  CoffeeDescription,
  Calories,
  MiddleSection,
  BottomSection,
  BottomTextsWrapper,
  StarCost,
  Includes,
  OrderButton,
} from "@/styles/StyledCoffeePage";

export default function CoffeePage({ coffee }: CoffeePageProps) {
  const [selectedSize, setSelectedSize] = useState("Grande");
  if (!coffee) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <TopSection>
        <ImageContainer>
          <PlaceholderImage
            src="/coffees/coffee-placeholder.webp"
            alt="placeholder"
          />
          <CoffeeImage src={coffee.detailedPhotoName} alt={coffee.name} />
        </ImageContainer>

        <HeaderTexts>
          <CoffeeName>{coffee.name}</CoffeeName>
          <Calories>{`${coffee.calories} Calories`}</Calories>
        </HeaderTexts>
      </TopSection>
      <MiddleSection>
        <SizeSelector
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      </MiddleSection>
      <BottomSection>
        <BottomTextsWrapper>
          <StarCost>
            <span>{coffee.stars}</span>
            <span>★</span>
            <span style={{ marginLeft: "5px" }}>item</span>
          </StarCost>
          <CoffeeDescription>{coffee.description}</CoffeeDescription>
          <Includes>{`${coffee.calories} Calories, ${coffee.sugar}g sugar, ${coffee.fat}g fat`}</Includes>
        </BottomTextsWrapper>
      </BottomSection>

      {!coffee.unavailable && <OrderButton>Add to Order</OrderButton>}
    </div>
  );
}
