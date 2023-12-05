"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useCart } from "@/app/context/useCart";
import { useState } from "react";
import { createOrder, fetchAddress } from "@/lib/getData";
import {
  StyledOrder,
  OrderGoBack,
  OrderFormWrapper,
  InputsContainer,
  InputWrapper,
  FetchAddressWrapper,
  FetchAddressButton,
  OrderInput,
  OrderButton,
  InputLabel,
} from "@/styles/order/StyledOrder";

import EmptyOrder from "./EmptyOrder";
export default function CreateOrder() {
  const router = useRouter();
  const { data: session } = useSession();
  const {
    state: { cart },
    dispatch,
  } = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.totalPrice, 0);
  const userData = session?.user;
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchAndSetAddress = () => {
    fetchAddress().then((data) => {
      if (data) {
        setAddress(data.address);
      } else {
        setError("Unexpected error occurred");
      }
    });
  };

  const handleOrder = async (data: OrderData) => {
    setIsSubmitting(true);
    const order = {
      ...data,
      cart: JSON.parse(data.items),
    };
    console.log("Processed order data:", order);
    const errors = {};

    if (Object.keys(errors).length > 0) return errors;
    const newOrder = await createOrder(order);
    dispatch({ type: "clearCart" });
    setIsSubmitting(false);
    return router.push(`/menu/order/${newOrder.id}`);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));

    const data: OrderData = {
      full_name: formData.full_name as string,
      phone_number: formData.phone_number as string,
      id_number: formData.id_number as string,
      address: formData.address as string,
      items: formData.items as string,
      total_price: Number(formData.total_price),
    };

    handleOrder(data);
  };

  if (!cart.length) return <EmptyOrder />;
  return (
    <StyledOrder>
      <OrderGoBack onClick={() => router.back()}> Go Back</OrderGoBack>
      <OrderFormWrapper>
        <h2>
          {userData?.username}, enter your current details to ensure a smooth
          delivery process
        </h2>
        <form onSubmit={handleSubmit}>
          <InputsContainer>
            <InputWrapper>
              <InputLabel>Full Name:</InputLabel>
              <OrderInput type="text" name="full_name" required />
            </InputWrapper>
            <InputWrapper>
              <InputLabel>Phone number:</InputLabel>
              <OrderInput type="tel" name="phone_number" required />
            </InputWrapper>
            <InputWrapper>
              <InputLabel>Id Number: </InputLabel>
              <OrderInput type="text" name="id_number" required />
            </InputWrapper>
            <FetchAddressWrapper>
              <InputWrapper>
                <InputLabel>Address: </InputLabel>
                <OrderInput
                  type="text"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                <FetchAddressButton
                  onClick={(e) => {
                    e.preventDefault();
                    fetchAndSetAddress();
                  }}
                >
                  Get location
                </FetchAddressButton>

                {error && <div style={{ color: "red" }}>{error}</div>}
              </InputWrapper>
            </FetchAddressWrapper>
            <div>
              <input type="hidden" name="items" value={JSON.stringify(cart)} />
              <input type="hidden" name="total_price" value={totalPrice} />
              <OrderButton disabled={isSubmitting}>
                {isSubmitting ? "placing order..." : "Order now"}
              </OrderButton>
            </div>
          </InputsContainer>
        </form>
      </OrderFormWrapper>
    </StyledOrder>
  );
}
