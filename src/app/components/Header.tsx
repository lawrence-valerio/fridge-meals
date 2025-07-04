"use client";

import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="cs-bg-background text-white relative overflow-hidden">
      <div className="container mx-auto px-6 py-10 relative flex items-center justify-center">
        <Link
          href="/overview"
          className="flex items-center cursor-pointer hover:opacity-90 transition-opacity relative z-10"
        >
          <Image
            src="/fridgemeal_logo.png"
            alt="FridgeMeals Logo"
            width={300}
            height={600}
          />
        </Link>
      </div>
    </header>
  );
};
