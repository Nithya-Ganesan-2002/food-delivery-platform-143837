// PUBLIC_INTERFACE
interface OrderItem {
  menuItemId: string;
  name: string;
  quantity: number;
}

interface Order {
  id: string;
  status?: string;
  items?: OrderItem[];
  total?: number;
}

export default function OrderCard({ order }: { order: Order }) {
  return (
    <div className="bg-white border-l-4 border-orange-600 rounded px-4 py-3 shadow">
      <div className="flex items-center gap-3">
        <span className="font-semibold">Order #{order.id}</span>
        <span className="ml-auto text-sm text-gray-500">{order.status ?? "Pending"}</span>
      </div>
      <div className="text-gray-700">
        {order.items?.map((it) => (
          <div key={it.menuItemId}>{it.quantity} x {it.name}</div>
        ))}
      </div>
      <div className="text-sm text-gray-400 mt-1">
        Total: ${order.total !== undefined ? order.total.toFixed(2) : "—"}
      </div>
    </div>
  );
}
