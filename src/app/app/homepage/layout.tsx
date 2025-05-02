import { Header } from "@/app/components/Header";

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
