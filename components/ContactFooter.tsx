"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { portfolioData } from "@/data/content";

export default function ContactFooter() {
  const { personal } = portfolioData;
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      const mailtoLink = `mailto:sitinurr.741@gmail.com?subject=Undangan Kerja/Magang - ${encodeURIComponent(
        formData.name,
      )}&body=${encodeURIComponent(
        `Pengirim: ${formData.name} (${formData.email})\n\nPesan:\n${formData.message}`,
      )}`;
      window.open(mailtoLink, "_blank");
    }, 400);
  };

  return (
    <footer
      id="kontak"
      className="bg-slate-900 text-white pt-14 pb-10 border-t border-slate-800"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pernyataan MagangHub Ringkas */}
        <div className="mb-10 p-6 rounded-2xl bg-slate-800/80 border border-slate-700 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
              Komitmen MagangHub 2026
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white mt-1">
              Siap Berkontribusi pada Posisi Pranata Komputer
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Menerapkan pengetahuan akademik, kemampuan pengolahan data, dan
              pengembangan web untuk efektivitas pelayanan organisasi.
            </p>
          </div>
          <a
            href="mailto:sitinurhasanah.ti@gmail.com"
            className="shrink-0 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-teal-600 hover:bg-teal-700 text-white transition-colors"
          >
            Hubungi Langsung
          </a>
        </div>

        {/* Form Kontak Ringkas & Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          <div className="md:col-span-5 space-y-4">
            <h4 className="text-base font-bold text-white">Informasi Kontak</h4>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
              <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Lampung Selatan, Lampung, Indonesia</span>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
              <Mail className="w-4 h-4 text-teal-400 shrink-0" />
              <span>sitinurr.741@gmail.com</span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pt-2">
              Terbuka untuk posisi Pranata Komputer, Pengembang Web, Pengolahan
              Data, atau Administrasi Digital.
            </p>
          </div>

          <div className="md:col-span-7">
            {formSent ? (
              <div className="p-4 rounded-xl bg-teal-900/40 border border-teal-600 text-center text-xs space-y-2">
                <CheckCircle className="w-6 h-6 text-teal-400 mx-auto" />
                <div className="text-sm font-bold text-white">
                  Pesan Disiapkan
                </div>
                <p className="text-slate-300">
                  Aplikasi email telah dibuka untuk mengirim pesan Anda.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="text-teal-400 underline font-semibold mt-1"
                >
                  Kirim lagi
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Nama / Instansi"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Anda"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                  />
                </div>
                <textarea
                  rows={3}
                  required
                  placeholder="Pesan Anda..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-teal-600 hover:bg-teal-700 text-white flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  Kirim Pesan
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <div>
            © {new Date().getFullYear()} {personal.name}, S.Kom.
          </div>
          <div>Dibuat dengan cinta ❤️</div>
        </div>
      </div>
    </footer>
  );
}
