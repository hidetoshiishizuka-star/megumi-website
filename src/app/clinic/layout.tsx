import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ClinicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="clinic" />
      <main className="min-h-screen" style={{ paddingTop: "var(--header-height, 48px)" }}>{children}</main>
      <Footer />
    </>
  );
}
