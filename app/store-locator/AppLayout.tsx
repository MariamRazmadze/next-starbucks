"use client";

import Sidebar from "./Sidebar";
import Map from "./Map";
import { Layout } from "@/styles/locator/StyledCity";
import { useState } from "react";

export default function AppLayout() {
  const [mapPosition, setMapPosition] = useState<[number, number]>([0, 0]);

  return (
    <Layout>
      <Sidebar setMapPosition={setMapPosition} />
      <Map mapPosition={mapPosition} setMapPosition={setMapPosition} />
    </Layout>
  );
}
