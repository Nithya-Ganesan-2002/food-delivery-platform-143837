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
  
  if (!resp.ok) {
    let errorMessage = "Invalid credentials";
    try {
      const errorData = await resp.json();
      errorMessage = errorData.error || errorMessage;
    } catch {
      // If we can't parse the error response, use default message
    }
    throw new Error(errorMessage);
  }
  
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
  
  if (!resp.ok) {
    let errorMessage = "Registration failed";
    try {
      const errorData = await resp.json();
      errorMessage = errorData.error || errorMessage;
    } catch {
      // If we can't parse the error response, use default message
    }
    throw new Error(errorMessage);
  }
  
  return resp.json();
}
