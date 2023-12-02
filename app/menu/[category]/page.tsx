import { getCoffees } from "@/lib/getData";
import CategoryPage from "../CategoryPage";
import SideMenu from "../SideMenu";
import { Suspense } from "react";
import Loader from "@/components/loader";
type Params = {
  params: {
    category: string;
  };
};

export default async function Category({ params: { category } }: Params) {
  const coffeeData: Promise<CoffeeData> = getCoffees();
  const coffeedata: CoffeeData = await coffeeData;

  const coffees: CoffeeType[] = Object.values(coffeedata).map(
    (coffee: CoffeeType) => {
      const key = Object.keys(coffee)[0];
      const coffeeValues = coffee[key];
      return coffeeValues;
    }
  );

  let categoryItems = coffees.find(
    (coffee: CoffeeType) =>
      coffee.name &&
      coffee.name.toLowerCase().replace(/ /g, "-") === category.toLowerCase()
  );

  return (
    <Suspense fallback={<Loader />}>
      <div className="menu-body">
        <SideMenu coffees={coffees} />
        <CategoryPage category={categoryItems} />
      </div>
    </Suspense>
  );
}
