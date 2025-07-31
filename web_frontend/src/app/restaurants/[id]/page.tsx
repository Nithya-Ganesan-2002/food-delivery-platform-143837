import { fetchRestaurantDetails, fetchMenu } from "@/lib/api/restaurants";
import MenuListClientWrapper from "@/components/MenuListClientWrapper";
import type { Restaurant } from "../page";

interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: number;
}

// PUBLIC_INTERFACE
// Required for output: "export" in next.config.ts
export function generateStaticParams() {
  // No static routes are generated for now
  return [];
}

// PUBLIC_INTERFACE
// Server component for dynamic restaurant details
export default async function RestaurantDetailPage({
  params,
}: {
  params: { id: string };
}) {
  let restaurant: Restaurant | null = null;
  let menu: MenuItem[] = [];
  let error = "";

  try {
    restaurant = await fetchRestaurantDetails(params.id);
    menu = await fetchMenu(params.id);
  } catch (e: unknown) {
    if (
      typeof e === "object" &&
      e !== null &&
      "message" in e &&
      typeof (e as Record<string, unknown>).message === "string"
    ) {
      error = (e as Record<string, unknown>).message as string;
    } else {
      error = "Failed to load restaurant data";
    }
  }

  return (
    <section>
      {error ? (
        <div className="text-red-600">{error}</div>
      ) : restaurant ? (
        <div>
          <h2 className="text-3xl font-bold text-orange-600 mb-2">
            {restaurant.name}
          </h2>
          <p className="text-gray-700 mb-4">{restaurant.description}</p>
          <h3 className="text-xl font-semibold mt-6 mb-3">Menu</h3>
          {/* Forward menu data to client component for MenuItemCard */}
          <MenuListClientWrapper menu={menu} />
        </div>
      ) : (
        <div className="text-gray-500">Loading restaurant...</div>
      )}
    </section>
  );
}


