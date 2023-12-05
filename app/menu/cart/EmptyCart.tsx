import Link from "next/link";
import {
  EmptyContainer,
  EmptyContent,
  EmptyHeader,
  EmptyButton,
  EmptyText,
} from "@/styles/cart/StyledEmptyCart";
import Image from "next/image";

function EmptyCart() {
  return (
    <EmptyContainer>
      <Image
        src="/cart/empty-cart.svg"
        alt="emtpy cart"
        height={200}
        width={200}
      />
      <EmptyContent>
        <EmptyHeader>Start your next order</EmptyHeader>
        <EmptyText>
          As you add menu items, they will appear here. You will have a chance
          to review before placing your order.
        </EmptyText>
        <Link href="/menu">
          <EmptyButton>Add Items</EmptyButton>
        </Link>
      </EmptyContent>
    </EmptyContainer>
  );
}

export default EmptyCart;
