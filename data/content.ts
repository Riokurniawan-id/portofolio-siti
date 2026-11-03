export interface SkillItem {
  name: string;
  level?: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

export interface ProjectDetail {
  title: string;
  role: string;
  location: string;
  description: string;
  highlights: string[];
  workflow: string[];
  hki: {
    status: string;
    number: string;
    reqNumber: string;
    date: string;
    publisher: string;
    note: string;
  };
  technologies: string[];
}

export interface ExperienceItem {
  category: "Proyek PKPM" | "Pengalaman Kerja" | "Organisasi";
  title: string;
  organization: string;
  location?: string;
  period?: string;
  description?: string;
  points: string[];
  result?: string;
  badge: string;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  category: string;
  description: string;
  details?: string;
  verified: boolean;
}

export const portfolioData = {
  personal: {
    name: "SITI NURHASANAH",
    title: "Fresh Graduate S1 Teknik Informatika",
    subtitle: "Calon Peserta MagangHub – Pranata Komputer",
    tagline: "INFORMATION TECHNOLOGY | DATA PROCESSING | WEB DEVELOPMENT",
    summary:
      "Mendukung pengelolaan informasi digital, pengembangan sistem berbasis website, pengolahan data, serta dokumentasi untuk menunjang efektivitas pekerjaan organisasi.",
    fullBio:
      "Saya merupakan lulusan S1 Teknik Informatika Institut Informatika dan Bisnis Darmajaya dengan IPK 3,81/4,00 dan predikat Cumlaude. Memiliki minat dan kompetensi dalam pengembangan website, pengolahan data, pengelolaan informasi digital, serta pemanfaatan teknologi. Memiliki pengalaman mengembangkan sistem informasi berbasis website, mendukung digitalisasi UMKM, dan melakukan pencatatan administrasi persediaan. Terbiasa bekerja secara terstruktur, mengelola informasi, menyusun dokumentasi, serta memeriksa data dengan teliti.",
    academic: {
      degree: "Sarjana Komputer (S.Kom.)",
      major: "S1 Teknik Informatika",
      institution: "Institut Informatika dan Bisnis Darmajaya, Bandar Lampung",
      period: "September 2022 – Mei 2026",
      gpa: "3,81 / 4,00",
      honor: "Cumlaude",
      competencies: [
        "Pengembangan sistem dan aplikasi berbasis website.",
        "Pengolahan data dan penerapan algoritma.",
        "Analisis kebutuhan sistem dan pemecahan masalah.",
        "Penyusunan dokumentasi proyek dan pemanfaatan teknologi digital.",
      ],
    },
    closingStatement:
      "Saya memiliki ketertarikan untuk mengembangkan kemampuan di bidang teknologi informasi, khususnya pengelolaan data, pengembangan sistem, administrasi digital, dan pengelolaan informasi. Melalui kesempatan MagangHub pada posisi Pranata Komputer, saya berharap dapat menerapkan pengetahuan akademik, mengembangkan keterampilan teknis, serta memberikan kontribusi dalam mendukung pengelolaan teknologi informasi dan pelayanan organisasi.",
  },

  skillsCategories: [
    {
      title: "Pengembangan Website",
      icon: "Code2",
      description:
        "Memahami proses pengembangan website modern, penyusunan arsitektur fitur, dan implementasi sistem sesuai kebutuhan pengguna.",
      skills: [
        "HTML5 & CSS3",
        "JavaScript",
        "Next.js & React",
        "Tailwind CSS",
        "PHP & Web Architecture",
      ],
    },
    {
      title: "Pengolahan Data & Data Science",
      icon: "Database",
      description:
        "Pengalaman mengumpulkan, membersihkan, mengolah, menganalisis, dan memvisualisasikan data menggunakan Python.",
      skills: [
        "Python Data Processing",
        "Pembersihan & Preprocessing Data",
        "Algoritma Machine Learning (C4.5)",
        "Visualisasi Data",
        "Analisis Eksploratif",
      ],
    },
    {
      title: "Artificial Intelligence (AI)",
      icon: "Sparkles",
      description:
        "Memanfaatkan tools AI seperti ChatGPT untuk akselerasi ide, problem solving materi, dan produktivitas dengan verifikasi hasil mendalam.",
      skills: [
        "Prompt Engineering",
        "ChatGPT Productivity",
        "Pemeriksaan & Validasi Hasil AI",
        "AI-assisted Workflows",
      ],
    },
    {
      title: "Administrasi Digital & Perkantoran",
      icon: "FileSpreadsheet",
      description:
        "Pencatatan informasi tertata, pengelolaan dokumen, verifikasi data, dan pengoperasian software perkantoran.",
      skills: [
        "Microsoft Word",
        "Microsoft PowerPoint",
        "Microsoft Excel (SUM, AVERAGE, COUNT, MIN, MAX)",
        "Pencatatan Stok & Inventaris",
        "Penyusunan Laporan",
      ],
    },
    {
      title: "Kemampuan Pendukung (Soft Skills)",
      icon: "Users",
      description:
        "Karakter kerja profesional yang siap beradaptasi dalam lingkungan kerja dinamis dan kolaboratif.",
      skills: [
        "Teliti & Detail Oriented",
        "Komunikatif",
        "Disiplin & Terorganisasi",
        "Kerja Sama Tim",
        "Adaptif & Bertanggung Jawab",
      ],
    },
  ],

  featuredProject: {
    title:
      "Sistem Prediksi Waktu Tanam Padi Menggunakan Algoritma C4.5 Berbasis Website",
    badge: "Tugas Akhir Ber-HKI Resmi",
    role: "Pengembang Proyek Tugas Akhir",
    location: "Rulung Sari, Natar, Lampung Selatan",
    description:
      "Mengembangkan sistem informasi berbasis website untuk membantu memprediksi waktu tanam padi secara presisi berdasarkan data cuaca dan historis panen. Sistem dirancang untuk mendukung pengelolaan data oleh admin/BPP (Balai Penyuluhan Pertanian) serta menyediakan fitur simulasi prediksi yang ramah pengguna bagi petani.",
    highlights: [
      "Mengidentifikasi kebutuhan dan merancang alur sistem terintegrasi.",
      "Mengolah data cuaca: curah hujan, suhu, kelembapan, dan historis panen wilayah setempat.",
      "Menerapkan algoritma klasifikasi pohon keputusan C4.5 untuk akurasi prediksi.",
      "Mengembangkan fitur pengelolaan data dan simulasi prediksi interaktif berbasis web.",
      "Menerapkan enkripsi AES (Advanced Encryption Standard) pada data yang diunggah untuk keamanan berkas.",
      "Menampilkan hasil prediksi dalam bentuk informasi rekomendasi bulan/waktu tanam optimal.",
    ],
    workflow: [
      "Data Cuaca & Historis Panen",
      "Pembersihan & Pengolahan Data",
      "Klasifikasi Algoritma C4.5",
      "Hasil Rekomendasi Waktu Tanam",
    ],
    hki: {
      status: "Tercatat Resmi di Kemenkumham RI",
      number: "001220064",
      reqNumber: "EC002026059119",
      date: "5 Mei 2026",
      publisher: "Kementerian Hukum Republik Indonesia",
      note: "Program komputer ini telah memperoleh Surat Pencatatan Ciptaan (HKI) sebagai karya program komputer resmi (Pencatatan Ciptaan Bersama).",
    },
    technologies: [
      "Algoritma C4.5",
      "Website Architecture",
      "AES Encryption",
      "Data Processing",
      "UI/UX Simplicity",
    ],
  },

  experiences: [
    {
      category: "Proyek PKPM",
      badge: "Pengabdian Mahasiswa",
      title: "Digitalisasi UMKM Emping Semoga Jaya",
      organization: "Program PKPM IIB Darmajaya",
      location: "Desa Buah Berak, Kalianda, Lampung Selatan",
      points: [
        "Mendukung pembuatan website profil dan informasi UMKM agar mudah dijangkau pelanggan luas.",
        "Membantu penyusunan katalog produk digital yang profesional dan terstruktur.",
        "Mendukung optimalisasi pemanfaatan WhatsApp Business dan platform marketplace.",
        "Berpartisipasi dalam pendampingan digitalisasi serta penataan administrasi pelaku usaha.",
      ],
      result:
        "Mendukung tersedianya media informasi digital untuk memperkenalkan usaha dan produk UMKM secara luas dan berkelanjutan.",
    },
    {
      category: "Pengalaman Kerja",
      badge: "1 Tahun 5 Bulan",
      title: "Staff Gudang",
      organization: "Penyimpanan & Distribusi Produk",
      period: "1 Tahun 5 Bulan",
      points: [
        "Melakukan pengecekan dan pencatatan stok secara manual secara konsisten sekitar 3 kali seminggu pada kurang lebih 15 jenis produk.",
        "Membantu proses penerimaan, penyimpanan teratur, dan pengeluaran barang dengan standar akurat.",
        "Memperbarui catatan persediaan secara berkala serta memeriksa kesesuaian informasi fisik dengan catatan.",
        "Menjaga kerapian administrasi inventaris dan mendukung kelancaran operasional rantai pasok.",
      ],
      result:
        "Membentuk ketelitian tingkat tinggi, disiplin administrasi logistik, dan konsistensi rekonsiliasi data fisik vs dokumen.",
    },
    {
      category: "Organisasi",
      badge: "Pengembangan Diri",
      title: "Anggota Divisi IPTEK",
      organization:
        "Himpunan Mahasiswa Teknik Informatika (HMTI) IIB Darmajaya",
      points: [
        "Berpartisipasi aktif dalam perencanaan dan pelaksanaan program kerja himpunan berbasis teknologi.",
        "Bekerja sama secara solid dalam tim lintas angkatan untuk menyukseskan berbagai kegiatan kemahasiswaan.",
        "Mendukung komunikasi internal dan eksternal organisasi serta pelaksanaan lokakarya edukatif.",
      ],
      result:
        "Meningkatkan kemampuan komunikasi interpersonal, kepemimpinan, dan kerja sama tim yang adaptif.",
    },
  ],

  certifications: [
    {
      title: "Junior Web Developer",
      issuer: "LSP BPPTIK",
      category: "Web Development",
      description:
        "Sertifikasi kompetensi nasional di bidang pengembangan website, sebagai bukti penguasaan standar kompetensi industri dalam pengembangan aplikasi web.",
      verified: true,
    },
    {
      title: "Junior Web Development",
      issuer: "LSP IIB Darmajaya",
      category: "Web Development",
      description:
        "Sertifikasi kompetensi di bidang pengembangan website, mencakup implementasi user interface, penggunaan bahasa pemrograman, penyusunan fungsi, penulisan kode sesuai best practices, serta penggunaan library atau komponen.",
      verified: true,
    },
    {
      title: "Darmajaya English Proficiency Test",
      issuer: "Institut Informatika dan Bisnis Darmajaya",
      category: "Bahasa & Komunikasi",
      details: "Skor: 470",
      description:
        "Memperoleh skor keseluruhan 470 melalui uji kompetensi terstandarisasi mencakup Listening Comprehension, Structure & Written Expression, dan Reading Comprehension.",
      verified: true,
    },
    {
      title: "Sertifikat Hak Kekayaan Intelektual (HKI) Ciptaan",
      issuer: "Kementerian Hukum Republik Indonesia",
      category: "Kekayaan Intelektual",
      details: "No. Pencatatan: 001220064 | No. Permohonan: EC002026059119",
      description:
        "Surat Pencatatan Ciptaan Jenis Program Komputer resmi atas karya 'Sistem Prediksi Waktu Tanam Padi Menggunakan Algoritma C4.5 Berbasis Website'.",
      verified: true,
    },
  ],
};
