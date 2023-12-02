import Link from "next/link";
import { LightButton, DarkButton } from "../UI/Button";
import { MobileMenu, ButtonsContainer } from "@/styles/HamburgerMenu";

type ModalContentProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export function ModalContent({ isOpen, toggleMenu }: ModalContentProps) {
  return (
    <MobileMenu $isOpen={isOpen}>
      <ul>
        <li>
          <Link href="/menu" onClick={toggleMenu}>
            Menu
          </Link>
        </li>
        <li>
          <Link href="/rewards" onClick={toggleMenu}>
            Rewards
          </Link>
        </li>
        <li>
          <Link href="/gift" onClick={toggleMenu}>
            Gift Cards
          </Link>
        </li>
      </ul>
      <div>
        <>
          <ButtonsContainer>
            <Link href="/login" onClick={toggleMenu}>
              <LightButton>Log in</LightButton>
            </Link>
            <Link href="/register" onClick={toggleMenu}>
              <DarkButton>Join Now</DarkButton>
            </Link>
          </ButtonsContainer>
        </>
        <div>
          <Link href="/store-locator" onClick={toggleMenu}>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path d="M12,11.475 C10.5214286,11.475 9.32142857,10.299 9.32142857,8.85 C9.32142857,7.401 10.5214286,6.225 12,6.225 C13.4785714,6.225 14.6785714,7.401 14.6785714,8.85 C14.6785714,10.299 13.4785714,11.475 12,11.475 M12,1.5 C7.85357143,1.5 4.5,4.7865 4.5,8.85 C4.5,14.3625 12,22.5 12,22.5 C12,22.5 19.5,14.3625 19.5,8.85 C19.5,4.7865 16.1464286,1.5 12,1.5"></path>
            </svg>
            <span>Find a store</span>
          </Link>
        </div>
      </div>
    </MobileMenu>
  );
}
