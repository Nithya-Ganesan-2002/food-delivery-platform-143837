/**
 * API utilities for user/account profile.
 */

const BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:3001";

// PUBLIC_INTERFACE
export async function fetchProfile() {
  const resp = await fetch(`${BASE}/users/me`, { credentials: "include" });
  if (!resp.ok) throw new Error("Unable to fetch profile");
  return resp.json();
}
