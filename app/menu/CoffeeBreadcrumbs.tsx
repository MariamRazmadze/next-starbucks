"use client";

import Link from "next/link";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { BreadCrumbWrapper } from "@/styles/StyledBreadcrumbs";

function CoffeeBreadcrumbs({ coffee, categoryData }) {
  const categoryLink = categoryData.link;
  const categoryName = categoryData.name;
  return (
    <BreadCrumbWrapper>
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ href: "/menu" }}>
          Menu
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ href: categoryLink }}>
          {categoryName}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{coffee.name}</Breadcrumb.Item>
      </Breadcrumb>
    </BreadCrumbWrapper>
  );
}

export default CoffeeBreadcrumbs;
