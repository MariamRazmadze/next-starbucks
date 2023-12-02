import { getCoffees } from "@/lib/getData";
import CoffeePage from "../../CoffeePage";
import Loader from "@/components/loader";
import { Suspense } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

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
  if (coffee === undefined) {
    return {
      title: "Coffee not found",
    };
  }

  return {
    title: coffee.name,
  };
}

export default async function Coffee({ params: { coffeeId } }: Params) {
  const coffee = await getCoffeeById(coffeeId);

  if (!coffee) return notFound();

  return (
    <Suspense fallback={<Loader />}>
      <CoffeePage coffee={coffee} />
    </Suspense>
  );
}

export async function generateStaticParams() {
  const coffeeData: Promise<CoffeeData> = getCoffees();
  const coffeedata: CoffeeData = await coffeeData;

  const coffees: CoffeeItem[] = Object.values(coffeedata).flatMap(
    (coffee: CoffeeType) => {
      const key = Object.keys(coffee)[0];
      const coffeeValues = coffee[key];
      return coffeeValues.items;
    }
  );
  return coffees.map((coffee) => ({
    coffeeId: coffee.id.toString(),
  }));
}
