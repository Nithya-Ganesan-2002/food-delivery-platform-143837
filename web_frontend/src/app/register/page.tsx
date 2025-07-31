"use client";
import { useState } from "react";
import { register } from "@/lib/api/auth";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const router = useRouter();

  async function onRegister(e: React.FormEvent) {
    e.preventDefault();
    setErr("");
    try {
      await register(email, password);
      router.replace("/login");
    } catch (e) {
      if (e instanceof Error) {
        setErr(e.message || "Registration failed.");
      } else {
        setErr("Registration failed.");
      }
    }
  }

  return (
    <section className="max-w-md mx-auto mt-16 p-6 rounded-md shadow bg-white">
      <h2 className="mb-4 text-2xl font-semibold text-orange-600">Register</h2>
      <form onSubmit={onRegister} className="flex flex-col gap-4">
        <input
          type="email"
          required
          placeholder="Email"
          autoComplete="email"
          className="border rounded p-2"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Password"
          autoComplete="new-password"
          className="border rounded p-2"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {err && <div className="text-red-600">{err}</div>}
        <button type="submit" className="bg-orange-600 text-white rounded px-4 py-2 font-bold hover:bg-orange-700">
          Register
        </button>
      </form>
    </section>
  );
}
