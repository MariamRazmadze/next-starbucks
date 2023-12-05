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

export async function getOrders() {
  const res = await fetch(`${API_URL}/order`);
  if (!res.ok) throw Error("failed to fetch data");
  const { data } = await res.json();
  return data;
}

export async function getOrder(id: string) {
  const res = await fetch(`${API_URL}/order/${id}`);
  // if (!res.ok) throw Error(`Couldn't find order #${id}`);
  if (!res.ok) return undefined;
  const { data } = await res.json();
  return data;
}

export async function createOrder(newOrder: OrderData) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok)
      throw Error(
        `Request failed with status ${res.status}: ${res.statusText}`
      );

    const { orderId } = await res.json();
    return { id: orderId };
  } catch {
    throw Error("Failed creating your order");
  }
}
