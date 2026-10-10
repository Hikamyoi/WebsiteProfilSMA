"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { DATA_SEKOLAH, BERITA_LIST, GALERI_LIST } from "@/data/sekolah";
import BeritaCard from "@/components/BeritaCard";

export default function HomePage() {
  const semuaBerita = BERITA_LIST || [];

  // State untuk Slider Berita Geser
  const [slideIndex, setSlideIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // 2 berita per tampilan slider
  const itemsPerPage = 2;
  const totalPages = Math.max(1, Math.ceil(semuaBerita.length / itemsPerPage));

  // Geser otomatis tiap 5 detik jika mouse tidak sedang menunjuk kartu
  useEffect(() => {
    if (!isAutoPlay || isHovered || totalPages <= 1) return;
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay, isHovered, totalPages]);

  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % totalPages);
  const prevSlide = () =>
    setSlideIndex((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <div className="space-y-14 pb-16 bg-slate-50">
      {/* 0. RUNNING TEXT WARTA BERJALAN (MARQUEE GESER) */}
      <div className="bg-[#0b3b60] text-white text-xs py-2 px-4 border-b border-[#082d4a] overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-amber-400 shrink-0 bg-[#082d4a] px-2.5 py-0.5 rounded text-[11px] border border-amber-400/20">
            <span>🔔 Berita Terkini:</span>
          </div>
          <div className="overflow-hidden whitespace-nowrap flex-1">
            <div className="inline-flex animate-marquee gap-8 cursor-pointer">
              <div className="flex items-center gap-8 shrink-0">
                {semuaBerita.map((b) => (
                  <Link
                    key={"m1-" + b.id}
                    href={`/berita/${b.slug || b.id}`}
                    className="hover:text-amber-300 transition"
                  >
                    <span className="text-amber-400 font-bold">
                      [{b.kategori}]
                    </span>{" "}
                    {b.judul} ·
                  </Link>
                ))}
              </div>
              <div
                className="flex items-center gap-8 shrink-0"
                aria-hidden="true"
              >
                {semuaBerita.map((b) => (
                  <Link
                    key={"m2-" + b.id}
                    href={`/berita/${b.slug || b.id}`}
                    className="hover:text-amber-300 transition"
                  >
                    <span className="text-amber-400 font-bold">
                      [{b.kategori}]
                    </span>{" "}
                    {b.judul} ·
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 1. HERO SECTION DENGAN FOTO ASLI GEDUNG DEPAN */}
      <section className="relative bg-[#082d4a] text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Teks Sambutan Kiri */}
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-block px-3 py-1 bg-[#f59e0b] text-slate-950 text-xs font-bold uppercase rounded">
              Selamat Datang di Website Resmi
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight text-white font-serif">
              SMA ISLAM TA&apos;ALLUMUL HUDA BUMIAYU
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
              &quot;
              {DATA_SEKOLAH?.slogan ||
                "Unggul dalam Imtaq, Berprestasi dalam Iptek, dan Berakhlakul Karimah"}
              &quot;
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Lembaga pendidikan menengah atas bernafaskan nilai-nilai Islam di
              bawah naungan{" "}
              {DATA_SEKOLAH?.yayasan ||
                "Yayasan Wakaf Perguruan Ta'allumul Huda"}
              , membina generasi cerdas, berprestasi, dan berakhlakul karimah.
            </p>
          </div>

          {/* Visual Kanan: FOTO ASLI GEDUNG DEPAN SEKOLAH */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border-4 border-white/20 shadow-xl aspect-16/10 bg-slate-800">
              <img
                src="/images/fotodepan.jpg"
                alt="Gedung Depan SMA Islam Ta'allumul Huda Bumiayu"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-slate-950/80 p-2 text-center text-xs text-slate-200">
                Pintu Gerbang & Papan Monumen SMA Islam Ta&apos;allumul Huda
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATISTIK & IDENTITAS SEKOLAH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs text-center">
            <p className="text-2xl font-black text-[#0b3b60]">A</p>
            <p className="text-xs text-slate-500 font-medium">
              Status Akreditasi
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              BAN-S/M Terakreditasi Unggul
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs text-center">
            <p className="text-2xl font-black text-[#0b3b60]">
              {DATA_SEKOLAH?.npsn || "20326442"}
            </p>
            <p className="text-xs text-slate-500 font-medium">
              Nomor Pokok Sekolah (NPSN)
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Resmi Kemendikbudristek
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs text-center">
            <p className="text-2xl font-black text-[#0b3b60]">37+</p>
            <p className="text-xs text-slate-500 font-medium">Tahun Mengabdi</p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Berdiri Sejak 1987
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs text-center">
            <p className="text-2xl font-black text-[#0b3b60]">1000+</p>
            <p className="text-xs text-slate-500 font-medium">
              Alumni Berprestasi
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Tersebar di PTN & Kedinasan
            </p>
          </div>
        </div>
      </section>

      {/* 3. SAMBUTAN KEPALA SEKOLAH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* FOTO KEPALA SEKOLAH */}
          <div className="md:col-span-4 flex flex-col items-center text-center">
            <div className="w-full rounded-xl overflow-hidden border-2 border-slate-200 shadow-md bg-slate-100 mb-3 aspect-16/10">
              <img
                src="/images/kepseksmai.jpeg"
                alt="Kepala Sekolah SMA Islam Ta'allumul Huda"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* NAMA KEPALA SEKOLAH */}
            <h4 className="font-bold text-slate-900 text-sm">
              {DATA_SEKOLAH?.kepalaSekolah || "Arie Endra Purnamasari, S.Pd."}
            </h4>
            <p className="text-xs text-slate-500">
              Kepala SMA Islam Ta'allumul Huda Bumiayu
            </p>
          </div>

          {/* TEKS SAMBUTAN */}
          <div className="md:col-span-8 space-y-3 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8">
            <span className="text-xs font-bold text-[#0b3b60] uppercase tracking-wider">
              Sambutan Pimpinan Sekolah
            </span>
            <h3 className="text-xl font-bold text-slate-900 font-serif">
              Membentuk Generasi Berkarakter Islami &amp; Berdaya Saing Global
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              &quot;Assalamu&apos;alaikum Warahmatullahi Wabarakatuh. Puji
              syukur kita panjatkan ke hadirat Allah SWT. SMA Islam
              Ta&apos;allumul Huda Bumiayu senantiasa berkomitmen
              menyelenggarakan pendidikan bermutu yang memadukan keunggulan
              akademik, sains, dan teknologi dengan pondasi aqidah, ibadah,
              serta akhlakul karimah yang kokoh.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* 4. BERITA & WARTA TERBARU (HEADER BERSIH DENGAN TOMBOL PANAH SAMPING KIRI & KANAN) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Header Bersih */}
        <div className="pb-3 border-b-2 border-[#0b3b60]">
          <span className="text-xs font-bold text-[#0b3b60] uppercase tracking-wider">
            Berita & Prestasi Terkini
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif mt-1">
            Berita Kegiatan Sekolah
          </h2>
        </div>

        {/* Konten Slider Berita dengan Tombol Panah Mengambang di Kiri & Kanan */}
        <div
          className="relative group pt-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Tombol Panah Kiri di Samping Berita */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Geser Berita Sebelumnya"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white text-slate-700 hover:text-[#0b3b60] shadow-md hover:shadow-lg border border-slate-200 flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
          >
            ←
          </button>

          {/* Tombol Panah Kanan di Samping Berita */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Geser Berita Selanjutnya"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white text-slate-700 hover:text-[#0b3b60] shadow-md hover:shadow-lg border border-slate-200 flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
          >
            →
          </button>

          {/* Kartu Berita yang Digeser (2 Berita per Tampilan) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-300">
            {semuaBerita
              .slice(
                slideIndex * itemsPerPage,
                slideIndex * itemsPerPage + itemsPerPage,
              )
              .map((berita) => (
                <div key={"slider-item-" + berita.id} className="h-full">
                  <BeritaCard berita={berita} />
                </div>
              ))}
          </div>

          {/* Indikator Titik (Dots) di Bawah Kartu Berita */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 pt-5">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={"dot-" + idx}
                  type="button"
                  onClick={() => setSlideIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    slideIndex === idx
                      ? "w-7 bg-[#0b3b60]"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Pindah ke slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. FASILITAS UNGGULAN SEKOLAH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 pb-3 border-b border-slate-200">
          <span className="text-xs font-bold text-[#0b3b60] uppercase tracking-wider">
            Sarana & Prasarana
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif mt-1">
            Fasilitas Pembelajaran Modern
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-2xs hover:shadow-sm transition">
            <div className="h-36 bg-slate-800">
              <img
                src="/images/masjidsmai.jpeg"
                alt="Masjid Sekolah"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm text-slate-900">
                Masjid Sekolah
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Pusat pembinaan ibadah shalat berjamaah, tadarus, dan kajian
                keislaman.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-2xs hover:shadow-sm transition">
            <div className="h-36 bg-slate-800">
              <img
                src="/images/labkomputersmai.jpeg"
                alt="Laboratorium Komputer"
                className="w-full h-40 object-cover object-bottom"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm text-slate-900">
                Lab Komputer & TI
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Ruang komputer multimedia berpendingin AC dan koneksi internet
                cepat.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-2xs hover:shadow-sm transition">
            <div className="h-36 bg-slate-800">
              <img
                src="/images/perpussmai.jpeg"
                alt="Perpustakaan Sekolah"
                className="w-full h-40 object-cover object-bottom"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm text-slate-900">
                Perpustakaan Literasi
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Koleksi ribuan buku referensi, karya ilmiah, dan ruang baca
                nyaman.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-2xs hover:shadow-sm transition">
            <div className="h-36 bg-slate-800">
              <img
                src="/images/lapangansmai.jpeg"
                alt="Lapangan Olahraga & Upacara"
                className="w-full h-40 object-cover object-bottom"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm text-slate-900">
                Lapangan Olahraga & Upacara
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Sarana apel bendera, basket, voli, futsal, dan kegiatan
                ekstrakurikuler.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
