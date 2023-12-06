"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import OrderItem from "./OrderItem";
import Image from "next/image";
import { getOrder } from "@/lib/getData";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { useEffect, useState } from "react";
import {
  StyledOrder,
  OrderContainer,
  OrderWrapper,
  OrderHeader,
  EstimatedP,
  OrderStatus,
  OrderCart,
  OrderCartHeader,
  OrderBackToMenu,
} from "@/styles/order/StyledOrder";
import { IoIosArrowBack } from "react-icons/io";

interface Order {
  full_name: string;
  phone_number: string;
  id_number: string;
  address: string;
  items: OrderItem[];
  total_price: number;
}

function Order({ orderId }: { orderId: string }) {
  const { data: session } = useSession();
  const userData = session?.user;
  const [order, setOrder] = useState<Order | null>(null);
  const [estimatedDelivery] = useState(
    new Date(Date.now() + 30 * 60000).toISOString()
  );
  const [minutesLeft, setMinutesLeft] = useState(
    calcMinutesLeft(estimatedDelivery)
  );
  const status = minutesLeft > 0 ? "Delivering" : "Delivered";

  useEffect(() => {
    const timer = setInterval(() => {
      setMinutesLeft((prevMinutesLeft) => prevMinutesLeft - 1);
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (orderId) {
      getOrder(orderId).then(setOrder);
    }
  }, [orderId]);

  if (!order) {
    return null;
  }

  const { total_price, items } = order;

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
      <OrderWrapper>
        <OrderHeader>
          <h2>Order #{orderId} </h2>

          <OrderStatus>Status: {status} order</OrderStatus>
        </OrderHeader>

        <OrderContainer>
          <p>
            {minutesLeft >= 0
              ? `${
                  userData?.name ? `${userData.name},` : ""
                } Your order will arrive in ${minutesLeft} minutes`
              : "Order should have arrived"}
          </p>
          <EstimatedP>
            (Estimated delivery: {formatDate(estimatedDelivery)})
          </EstimatedP>
        </OrderContainer>

        <OrderCart>
          {items.map((item) => (
            <OrderItem item={item} key={`${item.id}_${item.size}`} />
          ))}
        </OrderCart>

        <OrderContainer>
          <p>To pay on Delivery: {formatCurrency(total_price)}</p>
        </OrderContainer>
      </OrderWrapper>
    </StyledOrder>
  );
}

export default Order;
