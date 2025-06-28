import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FridgeMeal",
  description: "Delicious meals from your fridge!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
        {children}
      </body>
    </html>
  );
}
