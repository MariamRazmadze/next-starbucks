"use client";

import { Accordion } from "./Accordion";
import SocialIcons from "./SocialIcons";
import { StyledFooterContainer } from "@/styles/StyledFooter";
import { getFooterData } from "@/lib/getData";
import { useState, useEffect } from "react";

export default function Footer() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getFooterData().then((footerData) => {
      setData(footerData);
    });
  }, []);

  if (!data) {
    return null;
  }

  return (
    <StyledFooterContainer>
      <Accordion data={data} />
      <SocialIcons />
    </StyledFooterContainer>
  );
}
