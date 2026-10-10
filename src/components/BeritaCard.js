import Link from "next/link";
import Image from "next/image";

export default function BeritaCard({ berita }) {
  if (!berita) return null;

  // Mendukung slug atau id berita
  const detailUrl = `/berita/${berita.slug || berita.id}`;

  return (
    <article className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition flex flex-col h-full group">
      {/* Gambar Foto Kegiatan Asli */}
      <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
        <Image
          src={berita.gambar || "/images/fotodepan.jpg"}
          alt={berita.judul || "Berita Sekolah"}
          fill
          unoptimized
          className="object-cover group-hover:scale-105 transition duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute top-3 left-3 bg-[#0b3b60] text-white text-[11px] font-bold px-2.5 py-1 rounded shadow-xs z-10">
          {berita.kategori || "Berita"}
        </span>
      </div>

      {/* Konten Berita */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <time className="text-xs text-slate-500 font-medium block mb-2">
            📅 {berita.tanggal}
          </time>
          <h3 className="text-base font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-[#0b3b60] transition mb-2">
            <Link href={detailUrl}>{berita.judul}</Link>
          </h3>
          <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
            {berita.ringkasan}
          </p>
        </div>

        <div className="pt-4 mt-4 border-t border-slate-100">
          <Link
            href={detailUrl}
            className="text-xs font-bold text-[#0b3b60] hover:text-[#f59e0b] inline-flex items-center gap-1 transition"
          >
            Baca Selengkapnya →
          </Link>
        </div>
      </div>
    </article>
  );
}
