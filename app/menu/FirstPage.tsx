"use client";

import Link from "next/link";
import SideMenu from "./SideMenu";
import SubNav from "./SubNav";
import Image from "next/image";
import {
  FirstPageWrapper,
  MenuContainer,
  MainTitle,
  TitleContainer,
  CoffeeHeading,
  Coffees,
  MenuDiv,
  StyledCoffee,
} from "@/styles/StyledFirstPage";

export default function FirstPage({ coffees }: MenuProps) {
  return (
    <>
      <SubNav />
      <FirstPageWrapper>
        <SideMenu coffees={coffees} />
        <MenuContainer>
          <MainTitle>Menu</MainTitle>
          <TitleContainer>
            <CoffeeHeading>Drinks</CoffeeHeading>
          </TitleContainer>
          <Coffees>
            {coffees &&
              coffees.map((coffee) => {
                const category = coffee.name;
                const image = coffee.photoName;
                const coffeeLink = coffee.link;
                return (
                  <MenuDiv key={coffeeLink}>
                    <Link href={coffeeLink}>
                      <StyledCoffee>
                        <Image
                          src={image}
                          alt={category}
                          width={100}
                          height={100}
                        />

                        <h3>{category}</h3>
                      </StyledCoffee>
                    </Link>
                  </MenuDiv>
                );
              })}
          </Coffees>
        </MenuContainer>
      </FirstPageWrapper>
    </>
  );
}
