import Link from "next/link";
import { StyledNavbarBrand } from "@/styles/StyledNav";
import Image from "next/image";

export function NavbarBrand() {
  return (
    <StyledNavbarBrand>
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={32} height={32} />
      </Link>
    </StyledNavbarBrand>
  );
}
