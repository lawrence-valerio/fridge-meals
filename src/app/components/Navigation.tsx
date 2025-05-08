"use client";

import { BookOpenIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-center sm-justify-start gap-1 sm:gap-4">
          <Link
            href="/app/recipes"
            className={`px-4 py-3 flex gap-2 border-b-2 text-sm sm:text-base ${
              isActive("/app/recipes")
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <BookOpenIcon />
            <span className="hidden sm:inline">Inventory</span>
          </Link>
          <Link
            href="/app/recipes"
            className={`px-4 py-3 flex gap-2 border-b-2 text-sm sm:text-base ${
              isActive("/app/ShoppingList")
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <ShoppingCartIcon />
            <span>Shopping List</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
