import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      {/* Top Bar Informasi Resmi */}
      <div className="bg-[#0b3b60] text-white text-[11px] py-1.5 px-4 hidden sm:block">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span>📞 0289-432497</span>
            <span>✉️ info@smaithudabumiayu.sch.id</span>
          </div>
          <span className="text-amber-300 font-bold">
            Akreditasi A · NPSN: 20326071
          </span>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo & Nama Sekolah Asli SMA Islam Ta'allumul Huda Bumiayu */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/LOGOSMAI2.png"
            alt="Logo SMA Islam Ta'allumul Huda Bumiayu"
            className="w-12 h-14 object-contain shrink-0 drop-shadow-sm"
          />
          <div className="flex flex-col">
            <span className="text-base sm:text-xl font-black text-[#0b3b60] font-serif leading-tight">
              SMA ISLAM TA’ALLUMUL HUDA
            </span>
            <span className="text-base sm:text-xl font-black text-[#0b3b60] font-serif leading-none">
              BUMIAYU
            </span>
          </div>
        </Link>

        {/* Menu Navigasi Sesuai Urutan Permintaan */}
        <nav className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-bold text-slate-800">
          <Link href="/" className="hover:text-[#0b3b60] transition">
            Beranda ▾
          </Link>
          <Link href="/about" className="hover:text-[#0b3b60] transition">
            Profil ▾
          </Link>
          <Link href="/berita" className="hover:text-[#0b3b60] transition">
            Berita & Kegiatan ▾
          </Link>
          <Link href="/galeri" className="hover:text-[#0b3b60] transition">
            Galeri ▾
          </Link>
          {/* Informasi PPDB berada di samping kanannya Galeri */}
          <Link
            href="/kontak"
            className="text-amber-700 hover:text-[#0b3b60] font-bold transition"
          >
            Informasi PPDB ▾
          </Link>
        </nav>
      </div>
    </header>
  );
}
