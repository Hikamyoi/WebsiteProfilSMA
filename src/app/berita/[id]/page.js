import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BERITA_LIST } from "@/data/sekolah";

// Menghasilkan static params untuk rute dinamis Next.js
export function generateStaticParams() {
  if (!BERITA_LIST) return [];
  return BERITA_LIST.map((berita) => ({
    id: String(berita.id),
  }));
}

// Generate Metadata (Support Next.js 14 & Next.js 15 async params)
export async function generateMetadata({ params }) {
  const resolvedParams = await params; // Wajib di Next.js 15
  const id = resolvedParams?.id;

  const berita = BERITA_LIST?.find(
    (b) => String(b.id) === String(id) || b.slug === id,
  );

  if (!berita) return { title: "Berita Tidak Ditemukan" };

  return {
    title: `${berita.judul} | SMA Islam Ta'allumul Huda`,
    description: berita.ringkasan,
  };
}

// Komponen Halaman Detail (Support Next.js 14 & 15)
export default async function DetailBeritaPage({ params }) {
  const resolvedParams = await params; // Wajib di-await agar params.id tidak undefined
  const id = resolvedParams?.id;

  // Cari berita berdasarkan ID atau SLUG
  const berita = BERITA_LIST?.find(
    (b) => String(b.id) === String(id) || b.slug === id,
  );

  // Jika tidak ditemukan, arahkan ke 404
  if (!berita) {
    notFound();
  }

  // Cek apakah konten berupa array isiLengkap, isi, atau string teks biasa
  const kontenParagraf = Array.isArray(berita.isiLengkap)
    ? berita.isiLengkap
    : Array.isArray(berita.isi)
      ? berita.isi
      : typeof berita.konten === "string"
        ? [berita.konten]
        : [berita.ringkasan];

  // Berita lainnya untuk bagian bawah
  const beritaLainnya =
    BERITA_LIST?.filter((b) => String(b.id) !== String(id)).slice(0, 3) || [];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      {/* Tombol Kembali */}
      <div>
        <Link
          href="/berita"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-[#0b3b60] hover:text-[#f59e0b] shadow-xs transition"
        >
          ← Kembali ke Semua Berita
        </Link>
      </div>

      <article className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-6">
        {/* Header Berita */}
        <header className="space-y-3 border-b border-slate-100 pb-5">
          <span className="inline-block px-2.5 py-1 bg-[#0b3b60] text-white text-xs font-bold rounded">
            {berita.kategori}
          </span>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
            {berita.judul}
          </h1>
          <div className="text-xs text-slate-500 flex flex-wrap items-center gap-4 pt-1">
            <span>📅 {berita.tanggal}</span>
            <span>
              ✍️ {berita.penulis || "Humas SMA Islam Ta'allumul Huda"}
            </span>
          </div>
        </header>

        {/* Foto Kegiatan */}
        {berita.gambar && (
          <div className="w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
            <img
              src={berita.gambar}
              alt={berita.judul}
              className="w-full h-auto max-h-[520px] object-contain mx-auto block"
            />
          </div>
        )}
        {/* Ringkasan Berita */}
        {berita.ringkasan && (
          <p className="text-xs sm:text-sm font-medium text-slate-800 italic bg-amber-50/70 p-4 rounded-lg border-l-4 border-[#f59e0b]">
            {berita.ringkasan}
          </p>
        )}

        {/* Paragraf Lengkap */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {kontenParagraf.map((paragraf, idx) => (
            <p key={idx} className="whitespace-pre-line">
              {paragraf}
            </p>
          ))}
        </div>
      </article>

      {/* Rekomendasi Berita Lainnya */}
      {beritaLainnya.length > 0 && (
        <section className="pt-6 border-t border-slate-200">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
            Berita &amp; Kegiatan Lainnya
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {beritaLainnya.map((item) => (
              <Link
                key={item.id}
                href={`/berita/${item.id}`}
                className="bg-white p-4 rounded-lg border border-slate-200 hover:border-[#0b3b60] transition block group shadow-xs"
              >
                <span className="text-[10px] font-bold text-amber-600 block mb-1">
                  {item.kategori}
                </span>
                <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#0b3b60] line-clamp-2 transition mb-2">
                  {item.judul}
                </h4>
                <span className="text-[11px] text-slate-400 block">
                  {item.tanggal}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
