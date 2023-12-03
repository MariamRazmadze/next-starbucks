"use client";

import Message from "./Message";

import { fetchCities, fetchAddress } from "@/lib/getData";
import { useEffect, useState } from "react";
import CityItem from "./CityItem";
import {
  StyledCityList,
  SearchContainer,
  StyledSearch,
} from "@/styles/locator/StyledCityList";

interface CityListProps {
  setMapPosition: React.Dispatch<React.SetStateAction<[number, number]>>;
}

function CityList({ setMapPosition }: CityListProps) {
  const [cities, setCities] = useState<CityData[]>([]);
  const [currentCity, setCurrentCity] = useState<CityData | null>(null);
  const [userCity, setUserCity] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchMade, setIsSearchMade] = useState(false);

  useEffect(() => {
    fetchCities().then((data) => {
      setCities(data);
    });
    fetchAddress().then((result) => {
      const city = result.address.split(",")[1].trim();
      setUserCity(city);
    });
  }, []);

  useEffect(() => {
    if (userCity && cities.some((city) => city.cityName === userCity)) {
      setSearchTerm(userCity);
      setIsSearchMade(true);
    }
  }, [userCity, cities]);

  const filteredCities = cities.filter((city) =>
    city.cityName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsSearchMade(true);
  };

  return (
    <>
      <SearchContainer>
        <StyledSearch
          type="text"
          placeholder="Find a store"
          value={searchTerm}
          onChange={handleSearch}
        />
      </SearchContainer>
      {isSearchMade && !filteredCities.length && (
        <Message message="No stores were found" />
      )}
      {isSearchMade && filteredCities.length > 0 && (
        <StyledCityList>
          {filteredCities.map((city) => (
            <CityItem
              city={city}
              key={city.id}
              setMapPosition={setMapPosition}
              currentCity={currentCity}
              setCurrentCity={setCurrentCity}
            />
          ))}
        </StyledCityList>
      )}
    </>
  );
}

export default CityList;
