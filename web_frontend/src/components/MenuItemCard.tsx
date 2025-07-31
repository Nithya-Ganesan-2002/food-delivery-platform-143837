import { useState } from "react";

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: number;
}

// PUBLIC_INTERFACE
export default function MenuItemCard({ menuItem }: { menuItem: MenuItem }) {
  const [quantity, setQuantity] = useState(1);

  function handleAdd() {
    // Stub: Implement order add functionality
    alert(`Added ${quantity} x ${menuItem.name} to order (feature coming soon)`);
  }

  return (
    <div className="bg-white rounded shadow p-4 min-w-[220px] flex flex-col items-start">
      <div className="font-semibold text-lg">{menuItem.name}</div>
      <div className="text-gray-600">{menuItem.description}</div>
      <div className="mt-1 font-bold">${menuItem.price !== undefined ? menuItem.price.toFixed(2) : "—"}</div>
      <div className="flex items-center gap-2 mt-3">
        <input
          type="number"
          className="w-14 border rounded px-1"
          min={1}
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
        />
        <button
          onClick={handleAdd}
          className="bg-orange-600 text-white px-3 py-1 rounded hover:bg-orange-700 transition"
        >
          Add
        </button>
      </div>
    </div>
  );
}
