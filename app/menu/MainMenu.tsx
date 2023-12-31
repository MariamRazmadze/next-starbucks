import FirstPage from "./FirstPage";
import { getCoffees } from "@/lib/getData";

export default async function MainMenu() {
  const coffeeData: Promise<CoffeeData> = getCoffees();
  const coffeedata: CoffeeData = await coffeeData;

  const coffees: Coffees[] = Object.values(coffeedata).map((coffee: any) => {
    const key = Object.keys(coffee)[0];
    const coffeeValues = coffee[key];
    return coffeeValues;
  });

  return <FirstPage coffees={coffees} />;
}
