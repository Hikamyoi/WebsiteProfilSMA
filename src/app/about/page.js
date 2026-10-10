export const metadata = {
  title: "Tentang Sekolah | SMA Islam Ta'allumul Huda Bumiayu",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Judul Halaman & Logo */}
      <div className="flex flex-col items-center text-center space-y-3">
        {/* Logo Sekolah */}
        <img
          src="/images/LOGOSMAI2.png"
          alt="Logo SMA Islam Ta'allumul Huda Bumiayu"
          className="w-24 h-28 object-contain drop-shadow-sm"
        />
        <h1 className="text-3xl font-extrabold text-slate-900">
          Tentang SMA Islam Ta'allumul Huda
        </h1>
        <p className="text-sm text-slate-600">
          Profil, sejarah, visi misi, dan fasilitas pendidikan di Bumiayu,
          Brebes
        </p>
      </div>

      {/* Profil Sekolah + Foto Bersama Dewan Guru */}
      <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <h2 className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
          Profil Sekolah
        </h2>

        <div className="rounded-xl overflow-hidden border border-slate-200 my-4 max-h-80">
          <img
            src="/images/Foto guruguru.jpeg"
            alt="Dewan Guru SMA Islam Ta'allumul Huda"
            className="w-full h-72 object-cover"
          />
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          SMA Islam Ta'allumul Huda Bumiayu didirikan di bawah naungan Yayasan
          Wakaf Perguruan Ta'allumul Huda Bumiayu. Sekolah ini memadukan
          kurikulum pendidikan nasional dengan kurikulum kepesantrenan terpadu,
          tahfidzul Qur'an, dan pembiasaan adab 5S (Senyum, Sapa, Salam, Sopan,
          Santun).
        </p>
      </section>

      {/* Sejarah Singkat */}
      <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <h2 className="text-xl font-bold text-slate-900 border-l-4 border-amber-500 pl-3">
          Sejarah Singkat
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Berawal dari inisiatif para ulama, pendidik, dan tokoh masyarakat
          Bumiayu yang mewakafkan tanah serta mendirikan Yayasan Ta'allumul Huda
          pada tahun 1984. Kata &quot;Ta&apos;allumul Huda&quot; memiliki arti
          &quot;Mempelajari Petunjuk (Al-Qur&apos;an)&quot;. Selama puluhan
          tahun, sekolah telah meluluskan ribuan alumni yang berkiprah di
          perguruan tinggi negeri ternama, instansi pemerintah, dan dunia
          kewirausahaan.
        </p>
      </section>

      {/* Visi & Misi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
            Visi
          </h2>
          <blockquote className="p-4 bg-blue-50 text-blue-950 font-semibold italic text-sm rounded-xl">
            &quot;Mewujudkan generasi yang bertakwa, berakhlakul karimah,
            berilmu, berdaya saing dan berwawasan lingkungan dalam semangat
            Pancasila.&quot;
          </blockquote>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-xl font-bold text-slate-900 border-l-4 border-emerald-600 pl-3">
            Misi
          </h2>
          <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 space-y-2 leading-relaxed">
            <li>
              Mewujudkan peserta didik yang beriman dan bertakwa kepada Tuhan
              Yang Maha Esa.
            </li>
            <li>
              Memiliki kesadaran dan keyakinan dalam pengamalan agama Islam.
            </li>
            <li>
              Membudayakan karakter disiplin, gotong royong, tanggung jawab,
              mandiri dan empati seluruh warga sekolah.
            </li>
            <li>
              Membentuk karakter peserta didik yang santun dan berkebinekaan
              global.
            </li>
            <li>Menumbuhkembangkan sikap keteladanan dan kepemimpinan.</li>
            <li>
              Menciptakan pembelajaran yang menyenangkan, interaktif dan
              kolaboratif berbasis teknologi digital yang mampu memfasilitasi
              peserta didik sesuai bakat dan minatnya.{" "}
            </li>
            <li>
              Mendorong peserta didik untuk aktif, kreatif, inovatif dan
              bernalar kritis dalam setiap kegiatan akademis dan non akademis.
            </li>
            <li>
              Mendorong dan melatih semangat berprestasi, berwawasan nasional,
              serta kemampuan berkompetisi dalam menghadapi persaingan global.
            </li>
            <li>
              Mewujudkan lingkungan sekolah yang bersih, hijau, sejuk, aman, dan
              nyaman untuk proses pembelajaran.
            </li>
            <li>
              Memenuhi standar sarana dan prasarana secara bertahap dan terukur
              untuk mendukung pencapaian prestasi sekolah bidang akademis dan
              non akademis.
            </li>
          </ul>
        </div>
      </div>

      {/* Alamat Sekolah */}
      <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-3">
        <h2 className="text-xl font-bold text-slate-900 border-l-4 border-red-500 pl-3">
          Alamat Sekolah
        </h2>
        <p className="text-sm text-slate-700">
          <strong>Lokasi:</strong> Jl. K.H. Ahmad Dahlan, Krajan Dua, Kalierang,
          Kec. Bumiayu, Kabupaten Brebes, Jawa Tengah 52273
        </p>
        <p className="text-xs text-slate-500">
          Telepon: (0289) 432497 · Email: info@smaithudabumiayu.sch.id
        </p>
      </section>
    </div>
  );
}
