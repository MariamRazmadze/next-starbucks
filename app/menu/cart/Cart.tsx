"use client";

import { useCart } from "@/app/context/useCart";
import Link from "next/link";
import EmptyCart from "./EmptyCart";
import { formatCurrency } from "../../utils/helpers";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import {
  StyledCart,
  CartHeader,
  CartItemsContainer,
  CartSummary,
  BackToMenu,
  CartMain,
  CartMainHeader,
  ContinueButton,
  ClearButton,
} from "@/styles/cart/StyledCart";
import CartItem from "./CartItem";

function Cart() {
  const { state, dispatch } = useCart();

  return (
    <StyledCart>
      <CartSummary>
        <CartHeader>
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={32} height={32} />
          </Link>
          <Link href="/menu">
            <BackToMenu>
              <IoIosArrowBack /> Back to menu
            </BackToMenu>
          </Link>
        </CartHeader>
        <CartMain>
          <CartMainHeader>
            Review Order {`(${state.cart.length})`}
          </CartMainHeader>
          <h3>Prep time: 4-9 min</h3>
          <h3>
            Total Price:{" "}
            {formatCurrency(
              state.cart.reduce((total, item) => total + item.totalPrice, 0)
            )}
          </h3>
        </CartMain>
        <ClearButton onClick={() => dispatch({ type: "clearCart" })}>
          Clear cart
        </ClearButton>
      </CartSummary>

      <CartItemsContainer>
        <div>
          {state.cart.length ? (
            state.cart.map((item) => (
              <CartItem item={item} key={`${item.coffeeId}-${item.size}`} />
            ))
          ) : (
            <EmptyCart />
          )}
        </div>
        <Link href="/menu/order/new">
          <ContinueButton>Continue</ContinueButton>
        </Link>
      </CartItemsContainer>
    </StyledCart>
  );
}

export default Cart;
