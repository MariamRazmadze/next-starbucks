"use client";

import { PiHeartLight } from "react-icons/pi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import Link from "next/link";
import {
  CityIcon,
  CityItemContainer,
  CityName,
  CityParagraph,
  DeleteButton,
  CitySpan,
  CityButton,
  CityIcons,
  StoreClosed,
} from "@/styles/locator/StyledCity";

interface CityItemProps {
  city: CityData;
  setMapPosition: React.Dispatch<React.SetStateAction<[number, number]>>;
  currentCity: CityData | null;
  setCurrentCity: React.Dispatch<React.SetStateAction<CityData | null>>;
}

const isStoreOpen = (open: string, close: string) => {
  const currentTime = new Date();
  const [openHour, openMinute] = open.split(":").map(Number);
  const [closeHour, closeMinute] = close.split(":").map(Number);

  const openTime = new Date();
  openTime.setHours(openHour, openMinute);

  const closeTime = new Date();
  closeTime.setHours(closeHour, closeMinute);

  return currentTime >= openTime && currentTime <= closeTime;
};

export default function CityItem({
  city,
  setMapPosition,
  currentCity,
  setCurrentCity,
}: CityItemProps) {
  const { cityName, address, id, storeHours } = city;
  const storeStatus = isStoreOpen(storeHours.open, storeHours.close);

  const handleClick = () => {
    setCurrentCity(city);
    setMapPosition([city.position.lat, city.position.lng]);
  };

  return (
    <li onClick={handleClick}>
      <Link href={`?lat=${city.position.lat}&lng=${city.position.lng}`}>
        <CityItemContainer
          $isActive={Boolean(currentCity && id === currentCity.id)}
        >
          <div>
            <CityName>{cityName}</CityName>
            <CityParagraph>{address}</CityParagraph>
            {!storeStatus && (
              <>
                <CityParagraph>Closed</CityParagraph>
                <StoreClosed>
                  <DeleteButton>×</DeleteButton>
                  <CitySpan>Store closed</CitySpan>
                </StoreClosed>
              </>
            )}
          </div>
          <div>
            <CityIcons>
              <CityIcon>
                <PiHeartLight />
              </CityIcon>
              <CityIcon>
                <AiOutlineExclamationCircle />
              </CityIcon>
            </CityIcons>
            {currentCity && id === currentCity.id && (
              <CityButton>Order here</CityButton>
            )}
          </div>
        </CityItemContainer>
      </Link>
    </li>
  );
}
