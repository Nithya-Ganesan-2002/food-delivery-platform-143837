import Link from "next/link";

export interface Restaurant {
  id: string;
  name: string;
  description?: string;
}

// PUBLIC_INTERFACE
export default function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-orange-600">{restaurant.name}</h3>
      <p className="text-gray-700 mb-2">{restaurant.description || "No description."}</p>
      <Link
        href={`/restaurants/${restaurant.id}`}
        className="text-orange-700 font-semibold mt-auto hover:underline"
      >
        View Menu
      </Link>
    </div>
  );
}
