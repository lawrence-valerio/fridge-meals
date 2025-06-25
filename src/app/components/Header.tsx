"use client";

import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "../../constants/app";

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-rose-400 via-pink-400 to-orange-300 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 py-10 relative flex items-center justify-center">
        <Link
          href="/overview/home"
          className="flex items-center cursor-pointer hover:opacity-90 transition-opacity relative z-10"
        >
          <Image
            src="/fridge.png"
            alt="FridgeMeals Logo"
            width={60}
            height={60}
          />
          <h1 className="text-5xl font-bold tracking-tight">{APP_NAME}</h1>
        </Link>
      </div>
    </header>
  );
};
