import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
export const metadata: Metadata = {
  title: "Cart",
};

export default function RewardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </>
  );
}
