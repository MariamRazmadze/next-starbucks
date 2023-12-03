const API_URL = "https://starbucksapi.pythonanywhere.com";

export async function getCoffees() {
  const res = await fetch(`${API_URL}/coffees`, { next: { revalidate: 60 } });
  if (!res.ok) throw Error("failed to fetch data");
  const { coffeeData } = await res.json();
  return coffeeData;
}

export async function getHomepageData() {
  const res = await fetch(`${API_URL}/home`);
  if (!res.ok) throw Error("failed to fetch data");
  return res.json();
}

export async function getFooterData() {
  const res = await fetch(`${API_URL}/footer`);
  if (!res.ok) throw Error("failed to fetch data");
  return res.json();
}

export async function getRewardsData() {
  const res = await fetch(`${API_URL}/rewards`);
  if (!res.ok) throw Error("failed to fetch data");
  return res.json();
}

export async function fetchCities() {
  const res = await fetch(`${API_URL}/cities`);
  if (!res.ok) throw Error("failed to fetch data");
  return res.json();
}

export async function fetchCity(id: string) {
  const res = await fetch(`${API_URL}/cities/${id}`);
  if (!res.ok) throw Error("Failed getting city");

  const data = await res.json();
  return data;
}

export async function getAddressFromApi({ latitude, longitude }: Position) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}

export async function fetchAddress() {
  const position = await new Promise<GeolocationPosition>((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );

  const { latitude, longitude } = position.coords;
  const data = await getAddressFromApi({ latitude, longitude });

  const address = `${data.locality}, ${data.city} ${data.postcode}, ${data.countryName}`;

  return { position: { latitude, longitude }, address };
}
