import { GraduationCap, Award, CheckCircle } from "lucide-react";
import { portfolioData } from "@/data/content";

export default function About() {
  const { personal } = portfolioData;
  const { academic } = personal;

  return (
    <section id="tentang" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Bersih */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
            Tentang Saya
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
            Latar Belakang & Pendidikan
          </h2>
        </div>

        {/* 2 Kolom Ringkas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Kolom Profil */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Profil Singkat
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {personal.fullBio}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-teal-700">
              <Award className="w-4 h-4" />
              <span>Fokus: Pengelolaan Informasi & Sistem Komputer</span>
            </div>
          </div>

          {/* Kolom Pendidikan */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-teal-600 mb-2">
                <GraduationCap className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Pendidikan Formal
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900">
                {academic.major} ({academic.degree})
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                {academic.institution} • {academic.period}
              </p>

              <div className="mt-4 flex gap-3">
                <div className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-center flex-1">
                  <div className="text-[11px] text-slate-400">IPK</div>
                  <div className="text-lg font-extrabold text-amber-500">
                    {academic.gpa}
                  </div>
                </div>
                <div className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-center flex-1">
                  <div className="text-[11px] text-slate-400">Predikat</div>
                  <div className="text-lg font-extrabold text-teal-600">
                    {academic.honor}
                  </div>
                </div>
              </div>

              {/* Kompetensi Ringkas */}
              <div className="mt-4 space-y-1.5">
                {academic.competencies.map((comp, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-slate-600"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
