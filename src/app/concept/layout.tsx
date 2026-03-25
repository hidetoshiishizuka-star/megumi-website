import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ConceptLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="concept" />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
