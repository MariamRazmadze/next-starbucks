import Link from "next/link";
import Image from "next/image";
import { StyledCoffee } from "@/styles/StyledCoffee";
interface CoffeeProps {
  coffeeObj: CoffeeItem;
}

export function Coffee({ coffeeObj }: CoffeeProps) {
  return (
    <Link href={`/menu/product/${coffeeObj.id}`}>
      <StyledCoffee $unavailable={coffeeObj.unavailable}>
        <Image
          src={coffeeObj.photoName}
          alt={coffeeObj.name}
          width={100}
          height={100}
        />
        <h3>{coffeeObj.name}</h3>
        <span>{coffeeObj.unavailable && "Unavailable"}</span>
      </StyledCoffee>
    </Link>
  );
}
