"use client";
import { useState } from "react";
import { login } from "@/lib/api/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const router = useRouter();

  async function onLogin(e: React.FormEvent) {
    e.preventDefault();
    setErr("");
    try {
      await login(email, password);
      router.replace("/restaurants");
    } catch (e) {
      if (e instanceof Error) {
        setErr(e.message || "Login failed.");
      } else {
        setErr("Login failed.");
      }
    }
  }

  return (
    <section className="max-w-md mx-auto mt-16 p-6 rounded-md shadow bg-white">
      <h2 className="mb-4 text-2xl font-semibold text-orange-600">Login</h2>
      <form onSubmit={onLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          autoComplete="email"
          required
          className="border rounded p-2"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          required
          className="border rounded p-2"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {err && <div className="text-red-600">{err}</div>}
        <button type="submit" className="bg-orange-600 text-white rounded px-4 py-2 font-bold hover:bg-orange-700">
          Login
        </button>
      </form>
    </section>
  );
}
