import Image from "next/image";
import { Store, Warehouse, Users2, Check } from "lucide-react";
import { portfolioData } from "@/data/content";

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section
      id="pengalaman"
      className="py-16 bg-slate-50 border-t border-slate-200/60"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
            Pengalaman
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
            Proyek, Kerja & Organisasi
          </h2>
        </div>

        {/* Highlight Proyek UMKM dengan Gambar Visual */}
        <div className="mb-6 rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-5 h-48 md:h-full relative bg-amber-50">
            <Image
              src="/emping1.png"
              alt="Digitalisasi UMKM Emping Semoga Jaya"
              fill
              className="object-cover object-center p-2"
            />
          </div>
          <div className="md:col-span-7 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded">
                PKPM • Pengabdian
              </span>
              <span className="text-xs text-slate-500">
                Kalianda, Lampung Selatan
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Digitalisasi UMKM Emping Semoga Jaya
            </h3>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Membangun website profil, pembuatan katalog digital, serta
              optimalisasi WhatsApp Business untuk memperluas jangkauan
              pemasaran UMKM.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-teal-600" /> Katalog Digital
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-teal-600" /> Profil Web
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-teal-600" /> WhatsApp
                Business
              </span>
            </div>
          </div>
        </div>

        {/* 2 Kolom untuk Pengalaman Gudang & Organisasi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Staff Gudang */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                  Pengalaman Kerja
                </span>
                <span className="text-xs text-slate-500">1 Tahun 5 Bulan</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">
                Staff Gudang - Pempers Mbak Isti
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Pemeriksaan dan pencatatan stok berkala 3x seminggu pada 15
                jenis produk. Menjaga akurasi rekonsiliasi data fisik dan
                administrasi barang.
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
              Keahlian: Ketelitian tinggi & administrasi logistik
            </div>
          </div>

          {/* Organisasi */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                  Organisasi
                </span>
                <span className="text-xs text-slate-500">IIB Darmajaya</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">
                Anggota Divisi IPTEK - HIMA TI
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Himpunan Mahasiswa Teknik Informatika (HMTI). Berkolaborasi
                aktif dalam tim untuk pelaksanaan program teknologi dan
                kemahasiswaan.
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
              Keahlian: Kerja sama tim, adaptif & komunikasi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
