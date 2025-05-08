import { Header } from "@/app/components/Header";
import { Navigation } from "@/app/components/Navigation";

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header />
      <Navigation />
      {children}
    </main>
  );
}
