import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import AuthProvider from "./context/AuthProvider";
import { CartProvider } from "./context/CartProvider";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata: Metadata = {
  title: "Starbucks Coffee Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <CartProvider>
          <StyledComponentsRegistry>
            <body>
              <Navbar />
              {children}
            </body>
          </StyledComponentsRegistry>
        </CartProvider>
      </AuthProvider>
    </html>
  );
}
