"use client";

import { LogOutIcon, UtensilsIcon } from "lucide-react";
import { APP_NAME } from "../../constants/app";
import { useAuth } from "../contexts/AuthContext";

export const Header = () => {
  const { logout, user } = useAuth();
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <UtensilsIcon className="h-8 w-8 mr-3" />
          <h1 className="text-2xl md:text-3xl font-bold">{APP_NAME}</h1>
        </div>
        <div className="flex items-center gap-4">
          <span>Hello, {user}</span>
          <button
            onClick={logout}
            className="text-white opacity-90 hover:opacity-100 flex items-center gap-2"
          >
            <LogOutIcon size={18} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};
