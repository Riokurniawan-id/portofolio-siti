import { Code2, Database, Sparkles, FileSpreadsheet, Users } from "lucide-react";
import { portfolioData } from "@/data/content";

export default function Skills() {
  const { skillsCategories } = portfolioData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-teal-600" />;
      case "Database":
        return <Database className="w-5 h-5 text-blue-600" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case "FileSpreadsheet":
        return <FileSpreadsheet className="w-5 h-5 text-emerald-600" />;
      case "Users":
        return <Users className="w-5 h-5 text-indigo-600" />;
      default:
        return <Code2 className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section id="keahlian" className="py-16 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
            Keahlian
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
            Kompetensi Teknis
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsCategories.map((category) => (
            <div
              key={category.title}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-teal-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    {getIcon(category.icon)}
                  </div>
                  <h3 className="text-sm font-bold text-slate-800">{category.title}</h3>
                </div>

                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
