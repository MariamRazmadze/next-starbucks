import { useCart } from "@/app/context/useCart";
import { formatCurrency } from "../../utils/helpers";
import Link from "next/link";
import { StyledCartOverview, CartDiv } from "@/styles/cart/StyledCartOverview";
function CartOverview() {
  const { state } = useCart();
  const totalCartQuantity = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalCartPrice = state.cart.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  return (
    <StyledCartOverview>
      <p>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>

      <Link href="/menu/cart">
        <CartDiv>{totalCartQuantity} </CartDiv>
      </Link>
    </StyledCartOverview>
  );
}

export default CartOverview;
