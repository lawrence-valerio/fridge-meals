"use client";

import React, { useState, useContext, createContext } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const login = async (email: string) => {
    setUser({
      id: "1",
      email,
      name: email.split("@")[0],
    });
    router.push("/app/homepage");
  };

  const logout = () => {
    setUser(null);
    router.push("/auth/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Use auth has encountered an error.");
  }
  return context;
};
