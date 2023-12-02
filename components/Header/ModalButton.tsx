import { HamburgerButton } from "@/styles/HamburgerMenu";

interface ModalButtonProps {
  onClick: () => void;
  $isOpen: boolean;
}

export function ModalButton({ onClick, $isOpen }: ModalButtonProps) {
  return (
    <HamburgerButton type="button" onClick={onClick} $isOpen={$isOpen}>
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </HamburgerButton>
  );
}
