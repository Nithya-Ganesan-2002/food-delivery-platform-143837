"use client";
import { useEffect, useState } from "react";
import { fetchProfile } from "@/lib/api/account";

interface UserProfile {
  email: string;
}

export default function AccountPage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile()
      .then((data: UserProfile) => setProfile(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="max-w-xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-orange-600 mb-3">Account Settings</h2>
      {loading ? (
        <div className="text-gray-500">Loading profile...</div>
      ) : profile ? (
        <div className="bg-white p-6 rounded shadow">
          <div className="mb-2">
            <span className="block text-gray-700 font-semibold">Email:</span>
            <span className="block">{profile.email}</span>
          </div>
        </div>
      ) : (
        <div className="text-gray-500">Not logged in.</div>
      )}
    </section>
  );
}
