"use client";
import { useEffect, useState } from "react";
import { fetchRestaurants } from "@/lib/api/restaurants";
import RestaurantCard from "@/components/RestaurantCard";
import RestaurantSearchBar from "@/components/RestaurantSearchBar";

export interface Restaurant {
  id: string;
  name: string;
  description?: string;
}

export default function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRestaurants()
      .then((data: Restaurant[]) => setRestaurants(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 text-orange-600">Browse Restaurants</h2>
      <RestaurantSearchBar />
      {loading ? (
        <div className="text-gray-500 mt-8">Loading restaurants...</div>
      ) : (
        <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
          {restaurants.map(r => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}
        </div>
      )}
    </section>
  );
}
