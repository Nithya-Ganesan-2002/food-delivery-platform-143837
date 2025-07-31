"use client";

// PUBLIC_INTERFACE
export default function RestaurantSearchBar() {
  // Future: hook up search
  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Search restaurants or food..."
        className="border p-2 rounded w-full max-w-lg"
        disabled
      />
      <button className="bg-orange-600 text-white px-4 py-2 rounded" disabled>
        Search
      </button>
    </div>
  );
}
