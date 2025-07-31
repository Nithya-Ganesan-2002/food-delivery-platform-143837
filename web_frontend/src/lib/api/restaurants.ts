/**
 * API utilities for restaurant endpoints.
 */

const BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:3001";

// PUBLIC_INTERFACE
export async function fetchRestaurants() {
  const resp = await fetch(`${BASE}/restaurants`, { credentials: "include" });
  if (!resp.ok) throw new Error("Failed to load restaurants");
  return resp.json();
}

// PUBLIC_INTERFACE
export async function fetchRestaurantDetails(id: string) {
  const resp = await fetch(`${BASE}/restaurants/${id}`, { credentials: "include" });
  if (!resp.ok) throw new Error("Restaurant not found");
  return resp.json();
}

// PUBLIC_INTERFACE
export async function fetchMenu(id: string) {
  const resp = await fetch(`${BASE}/restaurants/${id}/menu`, { credentials: "include" });
  if (!resp.ok) throw new Error("Menu not found");
  return resp.json();
}
