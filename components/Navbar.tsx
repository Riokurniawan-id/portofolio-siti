"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Award,
  FileCode2,
  Briefcase,
  GraduationCap,
  Mail,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Tentang", href: "#tentang", icon: GraduationCap },
    { name: "Keahlian", href: "#keahlian", icon: FileCode2 },
    { name: "Proyek HKI", href: "#proyek", icon: Award },
    { name: "Pengalaman", href: "#pengalaman", icon: Briefcase },
    { name: "Sertifikasi", href: "#sertifikasi", icon: Award },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl  flex items-center justify-center text-white font-bold text-lg  group-hover:scale-105 transition-transform">
              {/* SN */}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-800 text-base sm:text-lg tracking-tight group-hover:text-teal-600 transition-colors">
                SITI NURHASANAH
              </span>
              <span className="text-xs text-slate-500 font-medium">
                S.Kom. • Sarjana Komputer
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-teal-600 hover:bg-teal-50/60 transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#kontak"
              className="ml-2 inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 shadow-sm shadow-teal-500/25 transition-all hover:shadow hover:scale-[1.02]"
            >
              Rekrut / Kontak
            </a>
          </nav>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-teal-600 hover:bg-slate-100 focus:outline-none"
              aria-label="Buka menu navigasi"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50 transition-colors"
              >
                <Icon className="w-5 h-5 text-teal-600" />
                {link.name}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#kontak"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-2.5 rounded-lg font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-md shadow-teal-600/20"
            >
              Hubungi / MagangHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
