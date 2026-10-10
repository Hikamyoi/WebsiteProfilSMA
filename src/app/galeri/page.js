"use client";

import { useState } from "react";
import Image from "next/image";
import { GALERI_LIST } from "@/data/sekolah";

export default function GaleriPage() {
  const galeriData = GALERI_LIST || [];
  const [selectedKategori, setSelectedKategori] = useState("Semua");
  const [activePhoto, setActivePhoto] = useState(null);

  const categories = [
    "Semua",
    "Kegiatan Siswa",
    "Seni & Budaya",
    "Lingkungan Sekolah",
    "Fasilitas",
    "Pendidik",
    "Kedisiplinan",
    "Fasilitas Ibadah",
    "Keagamaan",
    "Pendidikan Karakter",
    "Olahraga",
  ];

  const filteredPhotos = galeriData.filter(
    (item) =>
      selectedKategori === "Semua" || item.kategori === selectedKategori,
  );

  // Menyesuaikan posisi fokus foto agar pas & tidak terpotong
  const getImagePositionClass = (item) => {
    const text = (
      (item.id || "") +
      " " +
      (item.judul || "") +
      " " +
      (item.gambar || "")
    ).toLowerCase();

    // Upacara: fokus ke atas agar tiang bendera & Merah Putih terlihat jelas
    if (text.includes("upacara") || text.includes("bendera")) {
      return "object-top";
    }
    // Maulid Nabi: fokus ke panggung utama & banner acara
    if (text.includes("maulid")) {
      return "object-[center_20%]";
    }
    if (text.includes("salam") || text.includes("pagi")) {
      return "object-[center_25%]";
    }
    return "object-center";
  };

  return (
    <div className="space-y-10 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 min-h-screen">
      {/* 1. Header Galeri */}
      <div className="bg-[#0b3b60] text-white rounded-3xl p-8 sm:p-10 shadow-md">
        <div className="max-w-3xl space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black">
            Galeri Foto & Aktivitas Siswa
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Dokumentasi nyata kegiatan pawai karnaval, upacara bendera,
            peringatan Maulid Nabi, masjid sekolah, budaya salam pagi 5S, dan
            semarak classmeeting SMA Islam Ta'allumul Huda Bumiayu.
          </p>
        </div>
      </div>

      {/* 2. Filter Kategori */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive = selectedKategori === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedKategori(cat)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap transition cursor-pointer ${
                isActive
                  ? "bg-[#0b3b60] text-white shadow-xs"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* 3. Grid Foto: Seragam Rapi (aspect-video) & Posisi Pas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((item) => {
          const positionClass = getImagePositionClass(item);

          return (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group cursor-pointer bg-white rounded-2xl border border-slate-200 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Wadah foto seragam 16:9 (aspect-video) */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.gambar || "/images/fotodepan.jpg"}
                  alt={item.judul}
                  fill
                  unoptimized
                  className={`w-full h-full object-cover ${positionClass} transition-transform duration-500 group-hover:scale-105`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <span className="absolute top-3 left-3 bg-[#0b3b60]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs z-10">
                  {item.kategori}
                </span>
              </div>

              {/* Keterangan & Tombol Lihat Detail */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#0b3b60] transition-colors line-clamp-1">
                    {item.judul}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.deskripsi}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0b3b60] group-hover:text-blue-700 flex items-center gap-1 transition-colors">
                    Lihat detail
                    <span className="text-amber-500 font-extrabold group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. Modal Popup Foto Full (Tampilan Putih Bersih Ala Berita) */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-200 my-auto text-slate-900"
          >
            {/* Tombol Silang Tutup */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-white/90 hover:bg-slate-100 text-slate-700 shadow-md transition text-xs font-bold border border-slate-200 cursor-pointer"
            >
              ✕ Tutup
            </button>

            {/* Bagian Foto: latar abu-abu terang bersih menyesuaikan rasio */}
            <div className="relative w-full bg-slate-100 flex items-center justify-center overflow-hidden border-b border-slate-200 max-h-[72vh]">
              <Image
                src={activePhoto.gambar || "/images/fotodepan.jpg"}
                alt={activePhoto.judul}
                width={1200}
                height={800}
                unoptimized
                className="w-full max-h-[72vh] object-contain"
              />
            </div>

            {/* Bagian Keterangan ala Portal Berita */}
            <div className="p-6 sm:p-8 space-y-4 bg-white">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-[#0b3b60] text-white text-xs font-bold rounded">
                  {activePhoto.kategori}
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                {activePhoto.judul}
              </h2>

              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500">
                <p>{activePhoto.deskripsi}</p>
              </div>

              <div className="pt-2 flex items-center justify-end border-t border-slate-100">
                <button
                  onClick={() => setActivePhoto(null)}
                  className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
