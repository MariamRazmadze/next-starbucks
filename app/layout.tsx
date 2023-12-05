import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import AuthProvider from "./context/AuthProvider";
import { CartProvider } from "./context/CartProvider";
import StyledComponentsRegistry from "@/lib/registry";

const inter = Inter({ subsets: ["latin"] });

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
