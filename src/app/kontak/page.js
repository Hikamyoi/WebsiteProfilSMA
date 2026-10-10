import { DATA_SEKOLAH } from "@/data/sekolah";

export const metadata = {
  title: "Kontak & Alamat | SMA Islam Ta'allumul Huda Bumiayu",
  description:
    "Alamat lengkap, nomor telepon, dan formulir pesan SMA Islam Ta'allumul Huda Bumiayu.",
};

export default function KontakPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <p className="text-xs font-bold text-[#f59e0b] uppercase tracking-wider">
          Hubungi Kami
        </p>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0b3b60] font-serif">
          Kontak & Informasi Sekolah
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Layanan administrasi, informasi PPDB, dan kemitraan pendidikan
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Informasi Kontak */}
        <div className="lg:col-span-5 bg-white p-6 rounded-lg border border-slate-200 shadow-xs space-y-6">
          <h2 className="text-base font-bold text-[#0b3b60] border-b border-slate-100 pb-3">
            Informasi Sekretariat
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700">
            <div>
              <p className="font-bold text-slate-900">📍 Alamat Kampus:</p>
              <p className="text-slate-600 mt-0.5">{DATA_SEKOLAH.alamat}</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">📞 Telepon:</p>
              <p className="text-slate-600 mt-0.5">{DATA_SEKOLAH.telepon}</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">✉️ Email Resmi:</p>
              <p className="text-slate-600 mt-0.5">{DATA_SEKOLAH.email}</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">
                🕒 Jam Kerja Pelayanan:
              </p>
              <p className="text-slate-600 mt-0.5">{DATA_SEKOLAH.jamKerja}</p>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded border border-slate-200 text-xs text-slate-600 space-y-1">
            <p className="font-bold text-slate-800">
              Layanan Pendaftaran (PPDB):
            </p>
            <p>
              Dibuka setiap hari kerja di Ruang Sekretariat PPDB Kampus SMAI.
            </p>
          </div>
        </div>

        {/* Formulir Kirim Pesan */}
        <div className="lg:col-span-7 bg-white p-6 rounded-lg border border-slate-200 shadow-xs">
          <h2 className="text-base font-bold text-[#0b3b60] border-b border-slate-100 pb-3 mb-4">
            Kirim Pertanyaan / Pesan
          </h2>

          <form className="space-y-4 text-xs sm:text-sm">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                placeholder="Contoh: Muhammad Hikam"
                className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#0b3b60]"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Email / Nomor WhatsApp
              </label>
              <input
                type="text"
                placeholder="Contoh: 08123456789 atau email@domain.com"
                className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#0b3b60]"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Subjek Pertanyaan
              </label>
              <input
                type="text"
                placeholder="Contoh: Informasi PPDB / Biaya Pendidikan"
                className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#0b3b60]"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Isi Pesan
              </label>
              <textarea
                rows={4}
                placeholder="Tuliskan pertanyaan Anda..."
                className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#0b3b60]"
              ></textarea>
            </div>
            <button
              type="button"
              className="px-6 py-2.5 bg-[#0b3b60] hover:bg-blue-900 text-white font-bold rounded transition text-xs shadow-xs"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
