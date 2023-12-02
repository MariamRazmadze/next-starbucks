const API_URL = "https://starbucksapi.pythonanywhere.com";

export async function getCoffees() {
  const res = await fetch(`${API_URL}/coffees`);
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
