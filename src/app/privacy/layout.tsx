import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="clinic" />
      <main id="main-content" className="min-h-screen" style={{ paddingTop: "var(--header-height, 48px)" }}>{children}</main>
      <Footer />
    </>
  );
}
