"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchRestaurantDetails, fetchMenu } from "@/lib/api/restaurants";
import MenuItemCard from "@/components/MenuItemCard";
import type { Restaurant } from "../page";

interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: number;
}

export default function RestaurantDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    Promise.all([
      fetchRestaurantDetails(id) as Promise<Restaurant>,
      fetchMenu(id) as Promise<MenuItem[]>
    ])
      .then(([r, menu]) => {
        setRestaurant(r);
        setMenu(menu);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <section>
      {loading ? (
        <div className="text-gray-500">Loading restaurant...</div>
      ) : (
        <div>
          <h2 className="text-3xl font-bold text-orange-600 mb-2">{restaurant?.name}</h2>
          <p className="text-gray-700 mb-4">{restaurant?.description}</p>
          <h3 className="text-xl font-semibold mt-6 mb-3">Menu</h3>
          <div className="flex flex-wrap gap-4">
            {menu.map(item => (
              <MenuItemCard key={item.id} menuItem={item} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}


