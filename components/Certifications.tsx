import { FileBadge2, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/content";

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="sertifikasi" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
            Sertifikasi
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
            Lisensi & Sertifikat Resmi
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5 hover:border-teal-300 transition-colors"
            >
              <div className="p-2.5 rounded-xl bg-white text-teal-600 border border-slate-200 shrink-0 shadow-xs">
                <FileBadge2 className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-bold text-slate-900">{cert.title}</h3>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                </div>
                <div className="text-xs font-medium text-teal-700 mt-0.5">{cert.issuer}</div>
                {cert.details && (
                  <div className="text-[11px] font-semibold text-slate-500 mt-1">
                    {cert.details}
                  </div>
                )}
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
