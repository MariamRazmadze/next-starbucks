"use client";

import { Coffee } from "./Coffee";
import {
  MenuContainer,
  MenuH2,
  MainTitle,
  MenuDiv,
  CoffeeHeading,
  Coffees,
  MenuP,
} from "@/styles/StyledCategoryPage";

function groupBy(array: CoffeeItem[], key: "type"): GroupedCoffees {
  return array.reduce((result: GroupedCoffees, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});
}

export default function CategoryPage({ category }: any) {
  const coffeeArray = category.items;
  const groupedCoffees = groupBy(coffeeArray, "type");
  const sortedTypes = Object.keys(groupedCoffees).sort();
  return (
    <MenuContainer>
      <div key={category.name}>
        <MenuH2>Menu/{category.name}</MenuH2>
        {coffeeArray.length > 0 ? (
          <>
            <MainTitle>{category.name}</MainTitle>
            {sortedTypes.map(
              (type) =>
                groupedCoffees[type].length > 0 && (
                  <MenuDiv key={type}>
                    <CoffeeHeading>{type}</CoffeeHeading>
                    <Coffees>
                      {groupedCoffees[type].map((coffeeItem) => (
                        <Coffee coffeeObj={coffeeItem} key={coffeeItem.id} />
                      ))}
                    </Coffees>
                  </MenuDiv>
                )
            )}
          </>
        ) : (
          <MenuP>
            We are still Working on your {category.name} menu. Please Come back
            later.
          </MenuP>
        )}
      </div>
    </MenuContainer>
  );
}
