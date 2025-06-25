import { Header } from "@/app/components/Header";

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header />
      {/* <Navigation /> */}
      {children}
    </main>
  );
}
