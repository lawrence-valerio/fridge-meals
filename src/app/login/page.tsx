"use client";

import { UtensilsIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import LoginForm from "./components/LoginForm";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();
  const handleLogin = async (username: string, password: string) => {
    try {
      await login(username, password);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  if (isAuthenticated) {
    return router.push("/recipe");
  }

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to blue-50">
        <div className="container mx-auto px-4 py-16">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full show-lg">
              <UtensilsIcon className="h-12 w-12 text-white" />
            </div>
            <h1 className="font-bold text-4xl mt-6">Quick Bite</h1>
            <p className="mt-2 text-lg">
              Turn your ingredients into delicious meals
            </p>
          </div>
          {/* Login Form */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <LoginForm onSubmit={handleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
}
