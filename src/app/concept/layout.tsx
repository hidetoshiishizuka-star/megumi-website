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
      <main id="main-content" className="min-h-screen" style={{ paddingTop: "var(--header-height, 48px)" }}>{children}</main>
      <Footer />
    </>
  );
}
