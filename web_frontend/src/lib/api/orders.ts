/**
 * API utilities for orders.
 */

const BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:3001";

// PUBLIC_INTERFACE
export async function fetchOrders() {
  const resp = await fetch(`${BASE}/orders`, { credentials: "include" });
  if (!resp.ok) throw new Error("Unable to fetch orders");
  return resp.json();
}

// PUBLIC_INTERFACE
export async function placeOrder(order: {
  restaurantId: string,
  items: { menuItemId: string, quantity: number }[]
}) {
  const resp = await fetch(`${BASE}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(order)
  });
  if (!resp.ok) throw new Error("Unable to place order");
  return resp.json();
}
