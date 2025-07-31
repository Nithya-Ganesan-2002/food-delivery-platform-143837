"use client";

import MenuItemCard, { MenuItem } from "./MenuItemCard";

// PUBLIC_INTERFACE
export default function MenuListClientWrapper({ menu }: { menu: MenuItem[] }) {
  return (
    <div className="flex flex-wrap gap-4">
      {menu.map((item) => (
        <MenuItemCard key={item.id} menuItem={item} />
      ))}
    </div>
  );
}
