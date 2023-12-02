"use client";

import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { StyledSideMenu, SideMenuHeader } from "@/styles/StyledSideMenu";

export default function SideMenu({ coffees }: MenuProps) {
  return (
    <StyledSideMenu>
      <SideMenuHeader>Drinks</SideMenuHeader>
      <Nav defaultActiveKey="/home" className="flex-column">
        {coffees &&
          coffees.map((coffee) => {
            const category = coffee.name;
            const link = coffee.link;
            return (
              <Link key={link} href={link}>
                {category}
              </Link>
            );
          })}
      </Nav>
    </StyledSideMenu>
  );
}
