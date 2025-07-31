"use client";
import { useState } from "react";
import { register } from "@/lib/api/auth";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const router = useRouter();

  async function onRegister(e: React.FormEvent) {
    e.preventDefault();
    setErr("");
    setSuccess("");
    setLoading(true);
    
    try {
      await register(email, password);
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => {
        router.replace("/login");
      }, 2000);
    } catch (e) {
      if (e instanceof Error) {
        setErr(e.message || "Registration failed.");
      } else {
        setErr("Registration failed.");
      }
    } finally {
      setLoading(false);
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
        {err && <div className="text-red-600 text-sm">{err}</div>}
        {success && <div className="text-green-600 text-sm">{success}</div>}
        <button 
          type="submit" 
          disabled={loading}
          className="bg-orange-600 text-white rounded px-4 py-2 font-bold hover:bg-orange-700 disabled:bg-orange-400 disabled:cursor-not-allowed"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </section>
  );
}
