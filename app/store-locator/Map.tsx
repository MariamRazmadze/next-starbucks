"use client";

import { useEffect, useState } from "react";
import { fetchCities, fetchAddress } from "@/lib/getData";
import styles from "./Map.module.css";
import { useMap } from "react-leaflet/hooks";

interface MapProps {
  mapPosition: [number, number];
  setMapPosition: React.Dispatch<React.SetStateAction<[number, number]>>;
}

export default function Map({ mapPosition, setMapPosition }: MapProps) {
  const [cities, setCities] = useState<CityData[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    fetchCities().then((data) => {
      setCities(data);
    });
    fetchAddress().then((result) => {
      setMapPosition([result.position.latitude, result.position.longitude]);
    });
  }, [setMapPosition]);

  if (!isClient) {
    return null;
  }

  const { divIcon } = require("leaflet");
  const { TileLayer, Marker, Popup, MapContainer } = require("react-leaflet");

  const coffeeIcon = divIcon({
    className: "custom-icon",
    iconSize: [30, 50],
    html: `<div style="background-color: #00704A; border-radius: 50%; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center;"><img src="/sizes/grande-active.svg" width="25px"/></div>`,
  });

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
            icon={coffeeIcon}
          >
            <Popup>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
      </MapContainer>
    </div>
  );
}

interface ChangeCenterProps {
  position: [number, number];
}

function ChangeCenter({ position }: ChangeCenterProps) {
  const map = useMap();
  map.setView(position);
  return null;
}
