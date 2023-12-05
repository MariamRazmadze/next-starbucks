import Link from "next/link";
import Image from "next/image";
import {
  OrderCartHeader,
  OrderBackToMenu,
  StyledOrder,
} from "@/styles/order/StyledOrder";
import {
  EmptyContainer,
  EmptyContent,
  EmptyHeader,
  EmptyText,
  EmptyButton,
} from "@/styles/cart/StyledEmptyCart";
import { IoIosArrowBack } from "react-icons/io";

function EmptyOrder() {
  return (
    <StyledOrder>
      <OrderCartHeader>
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={32} height={32} />
        </Link>
        <Link href="/menu">
          <OrderBackToMenu>
            <IoIosArrowBack /> Back to menu
          </OrderBackToMenu>
        </Link>
      </OrderCartHeader>
      <EmptyContainer>
        <Image
          src="/cart/empty-cart.svg"
          alt="emtpy cart"
          width={200}
          height={200}
        />
        <EmptyContent>
          <EmptyHeader>Start your next order</EmptyHeader>
          <EmptyText>Your cart is empty, start adding menu items</EmptyText>
          <Link href="/menu">
            <EmptyButton>Add Items</EmptyButton>
          </Link>
        </EmptyContent>
      </EmptyContainer>
    </StyledOrder>
  );
}

export default EmptyOrder;
