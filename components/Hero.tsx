import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/content";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-teal-50/50 via-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* Sisi Kiri: Teks Ringkas & To the Point */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/70 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold mb-5">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Sarjana Komputer</span>
            </div>

            {/* Nama & Gelar */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {personal.name}
              <span className="text-teal-600">, S.Kom.</span>
            </h1>

            {/* Sub-judul Ringkas */}
            <p className="mt-2 text-base sm:text-lg font-medium text-slate-600">
              Fresh Graduate Teknik Informatika • Pengembang Web & Pengolah Data
            </p>

            {/* Ringkasan Profil Bersih */}
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              Lulusan S1 Teknik Informatika IIB Darmajaya berpredikat{" "}
              <strong className="text-slate-800">Cumlaude (IPK 3,81)</strong>.
              Berpengalaman membangun aplikasi web, pengolahan data Python/C4.5,
              serta digitalisasi UMKM.
            </p>

            {/* Mini Highlights */}
            <div className="mt-5 flex flex-wrap gap-2 justify-center lg:justify-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-medium shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                IPK 3,81 (Cumlaude)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-medium shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                Karya Ber-HKI Resmi
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-medium shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Sertifikasi BNSP / LSP
              </span>
            </div>

            {/* Tombol Aksi */}
            <div className="mt-7 flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="#proyek"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-md shadow-teal-600/20 transition-all hover:scale-[1.02]"
              >
                Lihat Proyek Utama
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-all"
              >
                Hubungi Saya
              </a>
            </div>
          </div>

          {/* Sisi Kanan: Foto Profil Elegan & Rapi (Tanpa Tumpukan Teks) */}
          <div className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 shrink-0 relative">
            <div className="absolute inset-0 bg-teal-200/40 rounded-3xl blur-xl" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-white p-2">
              <Image
                src="/siti-nur.jpeg"
                alt="Foto Profil Siti Nurhasanah"
                fill
                priority
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
