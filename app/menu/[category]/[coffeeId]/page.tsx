import { getCoffees } from "@/lib/getData";
import CoffeePage from "../../CoffeePage";
import Loader from "@/components/loader";
import { Suspense } from "react";
import { Metadata } from "next";

type Params = {
  params: {
    coffeeId: string;
  };
};
async function getCoffeeById(
  coffeeId: string
): Promise<CoffeeItem | undefined> {
  const coffeeData: Promise<CoffeeData> = getCoffees();
  const coffeedata: CoffeeData = await coffeeData;

  const coffees: CoffeeItem[] = Object.values(coffeedata).flatMap(
    (coffee: CoffeeType) => {
      const key = Object.keys(coffee)[0];
      const coffeeValues = coffee[key];
      return coffeeValues.items;
    }
  );

  return coffees.find((coffee: CoffeeItem) => coffee.id === Number(coffeeId));
}

export async function generateMetadata({
  params: { coffeeId },
}: Params): Promise<Metadata> {
  const coffee = await getCoffeeById(coffeeId);
  return {
    title: coffee ? String(coffee.name) : "Not found",
  };
}

export default async function Coffee({ params: { coffeeId } }: Params) {
  const coffee = await getCoffeeById(coffeeId);

  return (
    <Suspense fallback={<Loader />}>
      {coffee ? <CoffeePage coffee={coffee} /> : <div>Coffee not found</div>}
    </Suspense>
  );
}
