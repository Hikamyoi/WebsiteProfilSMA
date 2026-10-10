import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SMA Islam Ta'allumul Huda Bumiayu",
  description: "Website profil resmi SMA Islam Ta'allumul Huda Bumiayu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-sans">
        {/* WAJIB ADA DI SINI AGAR MUNCUL DI ATAS */}
        <Navbar />

        {/* Konten Halaman */}
        <main className="flex-1">{children}</main>

        {/* Footer di bagian bawah */}
        <Footer />
      </body>
    </html>
  );
}
