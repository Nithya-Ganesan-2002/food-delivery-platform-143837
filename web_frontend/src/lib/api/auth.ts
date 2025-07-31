/**
 * API utilities for authentication (login, register)
 * See Express backend OpenAPI for endpoints.
 */

const BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:3001";

// PUBLIC_INTERFACE
export async function login(email: string, password: string) {
  const resp = await fetch(`${BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password })
  });
  if (!resp.ok) throw new Error("Invalid credentials");
  // Could handle auth token or cookie if backend sets it
  return resp.json();
}

// PUBLIC_INTERFACE
export async function register(email: string, password: string) {
  const resp = await fetch(`${BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    credentials: "include"
  });
  if (!resp.ok) throw new Error("Registration failed");
  return resp.json();
}
