import { FileBadge2, CheckCircle2, ExternalLink } from "lucide-react";
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
          {certifications.map((cert, idx) => {
            const hasLink = Boolean(cert.link && cert.link !== "#");
            const Component = hasLink ? "a" : "div";
            const linkProps = hasLink
              ? {
                  href: cert.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <Component
                key={idx}
                {...linkProps}
                className={`p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5 transition-all group ${
                  hasLink
                    ? "hover:border-teal-400 hover:shadow-md hover:bg-slate-50/80 cursor-pointer"
                    : "hover:border-teal-300"
                }`}
              >
                <div className="p-2.5 rounded-xl bg-white text-teal-600 border border-slate-200 shrink-0 shadow-xs group-hover:bg-teal-50 transition-colors">
                  <FileBadge2 className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors flex items-center gap-1.5">
                      {cert.title}
                      {hasLink && (
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-600 transition-colors shrink-0" />
                      )}
                    </h3>
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
                  {hasLink && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-600 mt-3 group-hover:underline">
                      Lihat Sertifikat
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  )}
                </div>
              </Component>
            );
          })}
        </div>

      </div>
    </section>
  );
}
