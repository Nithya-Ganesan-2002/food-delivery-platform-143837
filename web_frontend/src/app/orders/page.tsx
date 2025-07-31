"use client";
import { useEffect, useState } from "react";
import { fetchOrders } from "@/lib/api/orders";
import OrderCard from "@/components/OrderCard";

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

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders()
      .then((data: Order[]) => setOrders(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 text-orange-600">Your Orders</h2>
      {loading ? (
        <div className="text-gray-500">Loading orders...</div>
      ) : (
        <div className="flex flex-col gap-4">
          {orders.length === 0 ? (
            <div className="text-gray-500">No orders found.</div>
          ) : (
            orders.map(o => <OrderCard key={o.id} order={o} />)
          )}
        </div>
      )}
    </section>
  );
}
