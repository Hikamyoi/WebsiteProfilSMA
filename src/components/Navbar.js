import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      {/* Top Bar Informasi Resmi */}
      <div className="bg-[#0b3b60] text-white text-[11px] py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo & Nama Sekolah Asli SMA Islam Ta'allumul Huda Bumiayu */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/images/LOGOSMAI2.png"
            alt="Logo SMA Islam Ta'allumul Huda Bumiayu"
            className="w-11 h-13 sm:w-12 sm:h-14 object-contain drop-shadow-sm"
          />
          <div className="flex flex-col">
            <span className="text-sm sm:text-lg lg:text-xl font-black text-[#0b3b60] font-serif leading-tight">
              SMA ISLAM TA’ALLUMUL HUDA
            </span>
            <span className="text-sm sm:text-lg lg:text-xl font-black text-[#0b3b60] font-serif leading-none">
              BUMIAYU
            </span>
          </div>
        </Link>

        {/* Menu Navigasi Lengkap (8 Menu) */}
        <nav className="flex items-center gap-2 sm:gap-3 lg:gap-5 text-xs lg:text-[13px] font-bold text-slate-800 flex-wrap justify-end">
          {/* 1. Beranda */}
          <Link href="/" className="hover:text-[#0b3b60] transition py-1">
            Beranda ▾
          </Link>

          {/* 2. Profil */}
          <Link href="/about" className="hover:text-[#0b3b60] transition py-1">
            Profil ▾
          </Link>

          {/* 3. Guru (Baru) */}
          <Link href="/guru" className="hover:text-[#0b3b60] transition py-1">
            Guru ▾
          </Link>

          {/* 4. Ekstrakurikuler (Baru) */}
          <Link
            href="/ekstrakurikuler"
            className="hover:text-[#0b3b60] transition py-1"
          >
            Ekstrakurikuler ▾
          </Link>

          {/* 5. Prestasi (Baru) */}
          <Link
            href="/prestasi"
            className="hover:text-[#0b3b60] transition py-1"
          >
            Prestasi ▾
          </Link>

          {/* 6. Berita & Kegiatan */}
          <Link href="/berita" className="hover:text-[#0b3b60] transition py-1">
            Berita & Kegiatan ▾
          </Link>

          {/* 7. Galeri */}
          <Link href="/galeri" className="hover:text-[#0b3b60] transition py-1">
            Galeri ▾
          </Link>

          {/* 8. Informasi PPDB (Tetap di samping kanan Galeri dengan aksen khas) */}
          <Link
            href="/kontak"
            className="text-amber-700 hover:text-[#0b3b60] font-extrabold transition py-1"
          >
            Informasi PPDB ▾
          </Link>
        </nav>
      </div>
    </header>
  );
}
