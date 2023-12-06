import { getOrder, getOrders } from "@/lib/getData";
import Order from "../Order";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Params = {
  params: {
    orderId: string;
  };
};

export default async function OrderPage({ params: { orderId } }: Params) {
  const orderData: Promise<OrderData> = getOrder(orderId);
  const order: OrderData = await orderData;
  if (!order) return notFound();

  return <Order orderId={orderId} />;
}

export async function generateMetadata({
  params: { orderId },
}: Params): Promise<Metadata> {
  const order = await getOrder(orderId);
  if (order === undefined) {
    return {
      title: "Order not found",
    };
  }

  return {
    title: `order#${order.id}`,
  };
}

export async function generateStaticParams() {
  const orderData: Promise<OrderItem[]> = getOrders();
  const orders = await orderData;
  if (!orders) {
    return [];
  }
  return orders.map((order) => ({ orderId: order.id.toString() }));
}
