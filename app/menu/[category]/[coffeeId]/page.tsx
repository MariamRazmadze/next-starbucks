import { getCoffees } from "@/lib/getData";
import CoffeePage from "../../CoffeePage";

type Params = {
  params: {
    coffeeId: string;
  };
};

export default async function Coffee({ params: { coffeeId } }: Params) {
  const coffeeData: Promise<CoffeeData> = getCoffees();
  const coffeedata: CoffeeData = await coffeeData;

  const coffees: CoffeeType[] = Object.values(coffeedata).flatMap(
    (coffee: CoffeeType) => {
      const key = Object.keys(coffee)[0];
      const coffeeValues = coffee[key];
      return coffeeValues.items;
    }
  );

  const coffee = coffees.find(
    (coffee: CoffeeItem) => coffee.id === Number(coffeeId)
  );

  return <CoffeePage coffee={coffee} />;
}
