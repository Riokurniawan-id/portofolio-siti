import Image from "next/image";
import { ShieldCheck, CheckCircle2, Lock } from "lucide-react";
import { portfolioData } from "@/data/content";

export default function FeaturedProject() {
  const { featuredProject } = portfolioData;

  return (
    <section id="proyek" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Ringkas */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
            Proyek Unggulan
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
            Sistem Prediksi C4.5 Berbasis Website
          </h2>
        </div>

        {/* Card Utama Berisi Gambar Mockup & Info Ringkas */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm">
          
          {/* Gambar Mockup Antarmuka Sistem */}
          <div className="relative w-full h-56 sm:h-72 md:h-80 bg-slate-900 border-b border-slate-200">
            <Image
              src="/project-c45.svg"
              alt="Mockup Sistem Prediksi Waktu Tanam Padi C4.5"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Konten Teks yang Padat & Jelas */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-xs font-bold text-teal-700 bg-teal-100/70 px-2.5 py-1 rounded-md">
                Tugas Akhir • Rulung Sari, Natar, Lampung Selatan
              </span>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-md">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                HKI No. 001220064 (Kemenkumham RI)
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              {featuredProject.description}
            </p>

            {/* Poin Kontribusi Singkat */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Klasifikasi Algoritma C4.5 (Decision Tree)</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Enkripsi AES pada data berkas unggahan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Otomatisasi pengolahan data cuaca & panen</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Hak Cipta Resmi Surat Pencatatan Ciptaan</span>
              </div>
            </div>

            {/* Badges Teknologi */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200">
              {featuredProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded text-xs font-medium bg-white border border-slate-200 text-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
