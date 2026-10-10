import Link from "next/link";
import { DATA_SEKOLAH } from "@/data/sekolah";

export default function Footer() {
  return (
    <footer className="bg-[#082d4a] text-white border-t-4 border-[#f59e0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kolom 1: Profil Singkat & Logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/LOGOSMAI2.png"
                alt="Logo SMA Islam Ta'allumul Huda"
                className="w-10 h-12 object-contain shrink-0"
              />
              <div>
                <h3 className="font-bold text-base leading-tight text-white">
                  {DATA_SEKOLAH.nama}
                </h3>
                <p className="text-xs text-slate-300">{DATA_SEKOLAH.yayasan}</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Membentuk generasi berakhlakul karimah, berprestasi akademik, dan
              siap berkompetisi dengan landasan keimanan yang kokoh.
            </p>
            <div className="inline-block bg-[#0b3b60] px-3 py-1 rounded text-xs text-amber-300 font-semibold border border-blue-900">
              Akreditasi A · NPSN 20326071
            </div>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div>
            <h4 className="font-bold text-sm text-[#f59e0b] uppercase tracking-wider mb-4">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/" className="hover:text-white transition">
                  › Beranda
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  › Profil & Visi Misi
                </Link>
              </li>
              <li>
                <Link href="/berita" className="hover:text-white transition">
                  › Berita & Pengumuman
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-white transition">
                  › Galeri Kegiatan Siswa
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-white transition">
                  › Kontak & Informasi PPDB
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak & Alamat */}
          <div>
            <h4 className="font-bold text-sm text-[#f59e0b] uppercase tracking-wider mb-4">
              Kontak Sekolah
            </h4>
            <address className="not-italic text-xs text-slate-300 space-y-2.5">
              <p className="flex items-start gap-2">
                <span>📍</span>
                <span>{DATA_SEKOLAH.alamat}</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                <span>{DATA_SEKOLAH.telepon}</span>
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span>
                <span>{DATA_SEKOLAH.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <span>🕒</span>
                <span>{DATA_SEKOLAH.jamKerja}</span>
              </p>
            </address>
          </div>
        </div>

        {/* Baris Copyright */}
        <div className="mt-10 pt-6 border-t border-slate-700/60 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-2">
          <p>
            © {new Date().getFullYear()} {DATA_SEKOLAH.nama}. Seluruh hak cipta
            dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
