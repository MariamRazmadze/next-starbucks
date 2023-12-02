import Link from "next/link";
import { NavListItem } from "@/styles/StyledNav";

export function NavLinks() {
  return (
    <>
      <NavListItem>
        <Link href="/menu">Menu</Link>
      </NavListItem>
      <NavListItem>
        <Link href="/rewards">Rewards</Link>
      </NavListItem>
      <NavListItem>
        <Link href="/gift">Gift Cards</Link>
      </NavListItem>
    </>
  );
}
