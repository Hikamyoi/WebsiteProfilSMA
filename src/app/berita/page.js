import { BERITA_LIST } from "@/data/sekolah";
import BeritaCard from "@/components/BeritaCard";

export const metadata = {
  title: "Berita & Pengumuman | SMA Islam Ta'allumul Huda Bumiayu",
  description:
    "Daftar berita, pengumuman resmi, dan kegiatan siswa SMA Islam Ta'allumul Huda Bumiayu.",
};

export default function BeritaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <p className="text-xs font-bold text-[#f59e0b] uppercase tracking-wider">
          Kabar Sekolah
        </p>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0b3b60] font-serif">
          Berita & Kegiatan Sekolah
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Informasi terkini seputar aktivitas akademik, kesiswaan, dan keagamaan
        </p>
      </div>

      {/* Grid Berita */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BERITA_LIST.map((berita) => (
          <BeritaCard key={berita.id} berita={berita} />
        ))}
      </div>
    </div>
  );
}
