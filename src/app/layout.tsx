import type { Metadata } from "next";
import { AuthProvider } from "./contexts/AuthContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quick Bite",
  description: "Delicious meals from your ingredients!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
