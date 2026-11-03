'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'id' | 'en'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'id',
  setLang: () => {},
  t: (key) => key,
})

export function useLanguage() {
  return useContext(LanguageContext)
}

// ─── KAMUS DWIBAHASA: Illona Indrasta Parahita ───
// Sumber isi: CV (Inggris), LinkedIn, dan deskripsi KKN dari klien. Terjemahan ID/EN yang bukan teks asli ditulis oleh pembuat situs.
const translations: Record<Language, Record<string, string>> = {
  id: {
    // ── Navbar
    'nav.about': "TENTANG SAYA",
    'nav.education': "PENDIDIKAN",
    'nav.work': "PENGALAMAN",
    'nav.org': "ORGANISASI",
    'nav.achievements': "PRESTASI",
    'nav.awards': "SERTIFIKAT",
    'nav.skills': "KEAHLIAN",
    'nav.projects': "KARYA",
    'nav.contact': "HUBUNGI SAYA",
    'ui.changePhoto': "Ganti foto",
    'ui.viewPhoto': "Lihat foto",
    'ui.photo': "foto",
    'ui.orgClick': "Klik untuk berganti foto",
    'ui.orgDocs': "Dokumentasi (3 foto):",
    'ui.orgView': "Lihat foto",

    // ── Hero
    'hero.scroll': "GULIR KE BAWAH",
    'hero.hey': "Hai, saya",
    'hero.tagline': "Layanan pelanggan, operasional bandara, dan perencanaan perjalanan dengan pola pikir yang berorientasi pada pelanggan.",
    'hero.based1': "LULUSAN SARJANA TERAPAN",
    'hero.based2': "UNIVERSITAS GADJAH MADA",
    'hero.role1': "Travel Consultant Bersertifikat BNSP",
    'hero.role2': "Lulusan Cum Laude Bisnis Perjalanan Wisata UGM",
    'hero.badge.major': "Bisnis Perjalanan Wisata UGM",
    'hero.badge.medal': "IPK 3.80 · Cum Laude",
    'hero.badge.event': "Universitas Gadjah Mada",

    // ── About Section
    'about.label': "TENTANG SAYA",
    'about.title': "Pariwisata. Layanan. Operasional.",
    'about.ipk': "IPK",
    'about.honors': "Predikat",
    'about.year': "Lulus",
    'about.bio1': "Lulusan Sarjana Terapan Bisnis Perjalanan Wisata Universitas Gadjah Mada dengan IPK 3.80/4.00 dan predikat Cum Laude. Berpengalaman dalam layanan pelanggan dan operasional bandara melalui magang di Yogyakarta International Airport, mendukung penanganan penumpang, pemantauan pergerakan penumpang, pemeriksaan kualitas layanan, dan operasional terminal. Berpengalaman membantu pelanggan dalam kegiatan perjalanan, acara, dan pariwisata, serta dalam perencanaan tur, pemanduan, dan pariwisata berbasis masyarakat melalui KKN-PPM UGM di Samosir. Terampil dalam komunikasi pelanggan, mendengarkan aktif, pemecahan masalah, service recovery, koordinasi, serta penyampaian informasi yang akurat. Travel Consultant bersertifikat BNSP (ASEAN Occupation for Travel Consultant) dengan komunikasi bahasa Inggris yang kuat dan pola pikir berorientasi pada pelanggan.",
    'about.cv.prompt': "Ingin tahu lebih lanjut?",
    'about.cv.link': "Unduh CV saya",
    'about.current.label': "BIDANG FOKUS",
    'about.current.1.title': "Operasional Bandara",
    'about.current.1.sub': "Magang di Yogyakarta International Airport",
    'about.current.2.title': "Tur & Acara",
    'about.current.2.sub': "Tour Planner, Tour Leader & Liaison Officer",
    'about.current.3.title': "Pariwisata Berbasis Masyarakat",
    'about.current.3.sub': "KKN Samosir & Desa Wisata Kemiriombo",

    // ── Trait Deck
    'trait.card.label': "KARAKTER KERJA",
    'trait.change': "Ganti",
    'trait.hint': "Klik untuk melihat karakter kerja lainnya",
    'trait.1.title': "Peduli",
    'trait.1.sub': "Layanan Pelanggan & Bantuan Penumpang",
    'trait.1.tag': "Berorientasi Pelanggan",
    'trait.1.desc': "Membantu penumpang dan pelanggan dalam kegiatan perjalanan, acara, dan pariwisata dengan pola pikir berorientasi pada pelanggan serta penanganan keluhan yang tenang.",
    'trait.2.title': "Komunikatif",
    'trait.2.sub': "Komunikasi & Mendengarkan Aktif",
    'trait.2.tag': "Informasi Akurat",
    'trait.2.desc': "Menyampaikan informasi yang jelas dan akurat kepada penumpang, peserta tur, dan klien, sambil mendengarkan kebutuhan mereka dengan saksama.",
    'trait.3.title': "Teliti",
    'trait.3.sub': "Ketelitian & Kualitas Layanan",
    'trait.3.tag': "Perhatian pada Detail",
    'trait.3.desc': "Cermat dalam inspeksi fasilitas, penilaian Level of Service (LoS), serta penyusunan itinerary dan penawaran harga.",
    'trait.4.title': "Adaptif",
    'trait.4.sub': "Bandara, Tur & Pariwisata Komunitas",
    'trait.4.tag': "Cepat Menyesuaikan Diri",
    'trait.4.desc': "Cepat menyesuaikan diri di berbagai lingkungan: operasional bandara, tur dan acara, hingga program pariwisata berbasis masyarakat.",

    // ── Quote (kalimat ringkasan dari profil CV, bukan motto dari klien)
    'about.quote': "“Berorientasi pada pelanggan, jelas dalam berkomunikasi, dan akurat dalam setiap informasi yang disampaikan.”",

    // ── Metrics
    'metric.gpa': "IPK",
    'metric.gpa.sub': "Universitas Gadjah Mada (3.80 / 4.00)",
    'metric.exp': "PENGALAMAN",
    'metric.exp.sub': "Magang, KKN, pemanduan & fasilitasi tur",
    'metric.org': "ORGANISASI & RELAWAN",
    'metric.org.sub': "Organisasi, kepanitiaan & program relawan",
    'metric.cert': "SERTIFIKAT",
    'metric.cert.sub': "BNSP, magang, kepanitiaan & pelatihan",

    // ── Education Section
    'education.label': "RIWAYAT AKADEMIK",
    'education.title': "Pendidikan",
    'education.degreeLabel': "Gelar",
    'education.highlights.label': "Pengalaman & Aktivitas Utama",

    'education.1.institution': "Universitas Gadjah Mada",
    'education.1.program': "Bisnis Perjalanan Wisata",
    'education.1.degree': "Sarjana Terapan Bisnis Perjalanan Wisata",
    'education.1.period': "Agu 2022 — Agu 2026",
    'education.1.gpa': "3.80 / 4.00",
    'education.1.status': "Cum Laude",
    'education.1.desc': "Menempuh pendidikan Sarjana Terapan Bisnis Perjalanan Wisata di Universitas Gadjah Mada dan lulus dengan IPK 3.80/4.00 (Cum Laude). Dilengkapi praktik industri di bandara internasional, biro perjalanan, dan museum, serta pengalaman organisasi, kepanitiaan, dan kegiatan relawan.",
    'education.1.tag': "Pendidikan Sarjana Terapan",
    'education.1.caption': "Wisuda Universitas Gadjah Mada",
    'education.1.h1': "Magang Airport Operation Landside and Terminal di Yogyakarta International Airport (InJourney Airports)",
    'education.1.h2': "Tour planner, tour leader, dan liaison officer di Mettrip Vacations dan Panorama Wisata Semarang",
    'education.1.h3': "KKN-PPM UGM “Mengukir Samosir” 2025 dan proyek pengabdian Desa Wisata Kemiriombo",
    'education.1.h4': "Ketua Panitia Gendhing Budaya 2024; aktif di KAMADIPA, PELITA Gadjah Mada, dan HIPMI PT UGM",

    // ── Work Section
    'work.label': "PENGALAMAN",
    'work.title': "Pengalaman Profesional",
    'work.subtitle': "Operasional bandara, perencanaan tur, pemanduan, dan program pariwisata berbasis masyarakat.",
    'work.cta': "Lihat Semua Pengalaman",

    // ── Karya & Proyek
    'projects.label': "KARYA & PROYEK",
    'projects.title': "Karya & Proyek",
    'projects.sub': "Materi dan hasil kerja dari pengalaman magang, proyek pengabdian, dan penelitian.",
    'projects.open': "Lihat ukuran penuh →",
    'proj.1.cat': "PAKET TUR · METTRIP VACATIONS",
    'proj.1.title': "Poster Open Trip Yogyakarta",
    'proj.1.desc': "Materi paket open trip Mettrip Vacations: 3 hari 2 malam di Yogyakarta, 3—5 April 2025.",
    'proj.2.cat': "PAKET TUR · PANORAMA WISATA SEMARANG",
    'proj.2.title': "Paket Tur Explore Karimunjawa",
    'proj.2.desc': "Materi paket tur Karimunjawa dengan itinerary 3 hari, dari pengalaman membuat katalog dan itinerary di Panorama Wisata Semarang.",
    'proj.3.cat': "VIDEO · DESA WISATA KEMIRIOMBO",
    'proj.3.title': "Video Profil Desa Wisata Kemiriombo",
    'proj.3.desc': "Video profil desa yang dipublikasikan di kanal YouTube “Desa Wisata Kemiriombo”, bagian dari proyek penelitian dan pengabdian masyarakat.",
    'proj.4.cat': "JURNAL · DESA WISATA KEMIRIOMBO",
    'proj.4.title': "Herbal Tourism Package to Increase Tourist Visits in Kemiriombo Tourism Village",
    'proj.4.desc': "Abstrak artikel jurnal dari penelitian dan pengabdian masyarakat Desa Wisata Kemiriombo; Illona tercantum sebagai salah satu penulis.",
    'proj.5.cat': "OPERASIONAL BANDARA · YOGYAKARTA INTERNATIONAL AIRPORT",
    'proj.5.title': "Informasi Delay Management",
    'proj.5.desc': "Papan informasi penanganan keterlambatan penerbangan berdasarkan PM 89 Tahun 2015, bagian dari dokumentasi magang di unit AOLT.",

    'work.1.role': "Airport Operation Landside and Terminal (Magang)",
    'work.1.inst': "YOGYAKARTA INTERNATIONAL AIRPORT",
    'work.1.loc': "InJourney Airports",
    'work.1.period': "Agu 2025 — Des 2025",
    'work.1.sub': "Operasional Landside & Terminal, Kualitas Layanan",
    'work.1.desc': "Melakukan inspeksi fasilitas landside dan terminal untuk mendukung kualitas layanan dan standar operasional, serta penilaian Level of Service (LoS) di area check-in, bagasi, imigrasi, dan bea cukai. Memantau pergerakan penumpang domestik dan internasional, termasuk proses penanganan bagasi, dan mengukur waktu pengantaran First Baggage dan Last Baggage. Membantu Head of AOLT dalam tugas administrasi, termasuk pengelolaan surat dan dokumen resmi melalui NADIA (Naskah Dinas InJourney Airports), serta mendukung koordinasi operasional dan pelaporan di unit AOLT. Membantu penumpang internasional yang tiba dengan sistem deklarasi terpadu All Indonesia.",

    'work.2.role': "Peserta KKN-PPM UGM",
    'work.2.inst': "KKN-PPM UGM MENGUKIR SAMOSIR 2025",
    'work.2.loc': "Kabupaten Samosir, Sumatera Utara",
    'work.2.period': "2025",
    'work.2.sub': "Pengembangan Pariwisata Berbasis Masyarakat",
    'work.2.desc': "Berpartisipasi dalam pengembangan potensi pariwisata lokal melalui pemberdayaan masyarakat, promosi destinasi, edukasi pariwisata, dan kegiatan berbasis komunitas. Program kerja: Beach Clean Up di Pasir Putih Parbaba bersama masyarakat, Dinas Pariwisata, Dinas Lingkungan Hidup, dan perangkat desa; Edukasi Sustainable Tourism and Travel Smart untuk masyarakat dan pelajar; penyusunan Brosur Standardisasi Homestay (pelayanan, fasilitas, kebersihan, dan kenyamanan); Tourism Go Digital: promosi pariwisata berbasis digital; Explore Indonesia Destination with Young Tour Guides, pengenalan pariwisata dan dasar pemanduan untuk anak-anak melalui menggambar dan mewarnai; Aksi Jomput Sampah; serta Liaison Officer (LO) untuk Agro Parade dan perlombaan di Tao Toba Jou Jou Festival.",

    'work.3.role': "Tour Planner, Tour Leader & Liaison Officer",
    'work.3.inst': "METTRIP VACATIONS",
    'work.3.loc': "CV. Mettrip Indonesia Mendunia",
    'work.3.period': "Jan 2025 — Mei 2025",
    'work.3.sub': "Perencanaan Tur, Dukungan Acara & Liaison",
    'work.3.desc': "Bertugas sebagai Tour Leader, Runner, dan Assistant Project Officer pada perayaan HUT PT Logindo, serta Liaison Officer untuk artis Marcello Tahitoe, Ronnie Sianturi, Harsya Riewpassa, dan Oma Rete pada perayaan HUT PKP GPIB. Bertugas sebagai Runner dan Tour Leader pada Program Pelatihan dan Pembentukan Reuni Jaksa ’98, serta Facilitator Guide dan Liaison Officer untuk Company Outing PT Ship Management Indonesia. Menyusun itinerary dan penawaran harga terperinci untuk Company Gathering PT Logindo, membuat katalog paket tur (Seoul, Jepang, Hong Kong-Makau, Thailand, Vietnam, Singapura, Malaysia), menghasilkan ide konten pemasaran, dan tampil sebagai content talent di media sosial perusahaan.",

    'work.4.role': "Proyek Penelitian & Pengabdian Masyarakat",
    'work.4.inst': "DESA WISATA KEMIRIOMBO",
    'work.4.loc': "Universitas Gadjah Mada",
    'work.4.period': "Agu 2024 — Nov 2024",
    'work.4.sub': "Promosi Desa Wisata & Rancangan Paket Wisata",
    'work.4.desc': "Membuat video profil desa yang dipublikasikan di kanal YouTube “Desa Wisata Kemiriombo”, merancang paket wisata, serta berkontribusi pada laporan akhir penelitian dan pengabdian masyarakat yang dipublikasikan di jurnal akademik.",

    'work.5.role': "Tour Planner (Magang)",
    'work.5.inst': "PANORAMA WISATA SEMARANG",
    'work.5.loc': "PT Wardhana Group",
    'work.5.period': "Jul 2024",
    'work.5.sub': "Pengembangan Paket Tur & Konten Pemasaran",
    'work.5.desc': "Membuat katalog paket tur Karimunjawa, mengembangkan konsep pemasaran dan memproduksi konten video untuk media sosial perusahaan. Menyusun itinerary dan penawaran harga paket tur wilayah Jawa Tengah dan Jakarta-Bandung, menyiapkan dan menawarkan proposal paket tur kepada calon pelanggan, serta membuat video rekap peserta tur pada program tur Karimunjawa. Juga bertugas sebagai Tour Leader pada tur satu hari ke Dieng.",

    'work.6.role': "Project Facilitator (Lepas)",
    'work.6.inst': "KALA TOUR & ORGANIZER",
    'work.6.loc': "Yogyakarta",
    'work.6.period': "18 — 19 Mei 2024",
    'work.6.sub': "Tourism Explore Camp, SMA PGRI 1 Bogor",
    'work.6.desc': "Facilitator Guide untuk Tourism Explore Camp 2 hari 1 malam bagi siswa SMA PGRI 1 Bogor di Yogyakarta. Program mencakup live-in di Desa Wisata Krebet (kerajinan batik dan tanah liat), pertunjukan budaya Kuda Lumping, mengajar anak-anak setempat, serta kunjungan ke Candi Prambanan, Keraton Yogyakarta, dan Malioboro.",

    'work.7.role': "Tour Guide",
    'work.7.inst': "MUSEUM DIRGANTARA MANDALA",
    'work.7.loc': "Museum Pusat TNI AU",
    'work.7.period': "Sep 2023",
    'work.7.sub': "Pemanduan Sesuai Standar Kompetensi Nasional",
    'work.7.desc': "Memandu peserta tur dengan memberikan informasi yang jelas dan mengoordinasikan kegiatan kelompok. Menyampaikan informasi tur berdasarkan Standar Kompetensi Nasional untuk Pemanduan Wisata, serta mengomunikasikan sejarah, fasilitas, dan informasi penting setiap destinasi. Memperoleh penilaian positif dari pemandu wisata profesional dan dosen mata kuliah pemanduan wisata atas komunikasi, pelayanan, dan penyampaian tur.",

    'work.8.role': "Campus Tour Guide",
    'work.8.inst': "UNIVERSITAS GADJAH MADA",
    'work.8.loc': "Kampus UGM",
    'work.8.period': "Jun 2023",
    'work.8.sub': "Tur Kampus (Musiman)",
    'work.8.desc': "Memandu tur kampus UGM, memperkenalkan sejarah, fasilitas, dan lingkungan akademik universitas sesuai Standar Kompetensi Nasional untuk Pemanduan Wisata, dan memperoleh penilaian positif dari dosen mata kuliah pemanduan wisata.",

    // ── Organizations Section
    'trainings.label': "PENGALAMAN ORGANISASI",
    'trainings.title': "Organisasi, Kepanitiaan & Relawan",
    'trainings.campus': "UNIVERSITAS GADJAH MADA",

    'org.1.role': "Divisi Seni",
    'org.1.inst': "KAMADIPA BPW UGM",
    'org.1.period': "Feb 2023 — 2025",
    'org.1.loc': "Organisasi",
    'org.1.desc': "KAMADIPA adalah organisasi himpunan di Departemen Bisnis Perjalanan Wisata. Bagian dari divisi Seni.",

    'org.2.role': "Leadership Talent",
    'org.2.inst': "PELITA Gadjah Mada",
    'org.2.period': "Mar 2024 — Jun 2024",
    'org.2.loc': "Program Kepemimpinan",
    'org.2.desc': "Program akselerasi kepemimpinan strategis mahasiswa yang diselenggarakan oleh subdirektorat pembinaan karakter mahasiswa Universitas Gadjah Mada. Bagian dari leadership talent.",

    'org.3.role': "Anggota",
    'org.3.inst': "HIPMI PT UGM",
    'org.3.period': "Apr 2023 — Des 2023",
    'org.3.loc': "Organisasi",
    'org.3.desc': "Anggota HIPMI PT UGM (Himpunan Pengusaha Muda Indonesia), organisasi yang berkomitmen memajukan dan mengembangkan potensi pengusaha muda di UGM. Mengikuti program pengembangan dan pelatihan yang diselenggarakan pengurus HIPMI PT UGM.",

    'org.4.role': "Ketua Panitia",
    'org.4.inst': "Gendhing Budaya 2024",
    'org.4.period': "Agu 2024 — Des 2024",
    'org.4.loc': "Kepanitiaan",
    'org.4.desc': "Pertunjukan seni tari dan musik oleh mahasiswa Bisnis Perjalanan Wisata untuk memenuhi mata kuliah praktik kesenian. Mengoordinasikan Gendhing Budaya dari awal hingga akhir acara.",

    'org.5.role': "Koordinator Lomba Tari Kreasi",
    'org.5.inst': "Olimpiade Pariwisata Nasional #12",
    'org.5.period': "Agu 2023 — Okt 2023",
    'org.5.loc': "Kepanitiaan",
    'org.5.desc': "Olimpiade Pariwisata Nasional adalah kompetisi yang diselenggarakan departemen Bisnis Perjalanan Wisata untuk siswa SMA yang tertarik pada pariwisata. Mengoordinasikan lomba tari kreasi.",

    'org.6.role': "Relawan World Tourism Day: Clean Up Action!",
    'org.6.inst': "SOSMAS KAMADIPA BPW UGM",
    'org.6.period': "1 Okt 2023",
    'org.6.loc': "Relawan",
    'org.6.desc': "Salah satu program kerja sosial SOSMAS KAMADIPA untuk memperingati World Tourism Day melalui aksi relawan membersihkan sampah di Alun-Alun Kidul Yogyakarta, disertai diskusi tentang isu lingkungan.",

    'org.7.role': "Relawan SOASIC (Sosmas and Society Interactive Coastal)",
    'org.7.inst': "BEM KM SV UGM",
    'org.7.period': "24 Jun 2023",
    'org.7.loc': "Relawan",
    'org.7.desc': "SOASIC adalah salah satu program kerja sosial SOSMAS BEM KM SV UGM untuk mewujudkan kepedulian terhadap ekosistem laut, khususnya kawasan pesisir. Kegiatan meliputi pembersihan pantai, penanaman pandan laut, pelepasan tukik, dan edukasi ecobrick.",

    // ── Prestasi & Pencapaian
    'achv.label': "PRESTASI & PENCAPAIAN",
    'achv.title': "Prestasi & Pencapaian",
    'achv.1.badge': "CUM LAUDE",
    'achv.1.title': "Lulus Cum Laude Program Sarjana Terapan Bisnis Perjalanan Wisata",
    'achv.1.inst': "Universitas Gadjah Mada",
    'achv.1.period': "Agu 2022 — Agu 2026",
    'achv.1.gpa': "IPK 3.80/4.00",

    // ── Awards Section
    'awards.label': "SERTIFIKASI & SERTIFIKAT",
    'awards.title': "Sertifikasi & Sertifikat",
    'awards.sub': "Sertifikasi kompetensi nasional serta sertifikat magang, kepanitiaan, organisasi, dan pelatihan.",
    'awards.openDoc': "Buka Sertifikat",
    'awards.issuer': "Penerbit",
    'awards.viewOriginal': "Lihat Dokumen Asli →",

    'award.1.title': "BNSP — ASEAN Occupation for Travel Consultant",
    'award.1.issuer': "Badan Nasional Sertifikasi Profesi (BNSP) melalui LSP Universitas Gadjah Mada",
    'award.1.cat': "SERTIFIKASI KOMPETENSI NASIONAL",
    'award.1.year': "Apr 2026",
    'award.1.desc': "Sertifikat kompetensi Okupasi ASEAN Konsultan Perjalanan (Travel Consultant) di bidang agen perjalanan wisata, diterbitkan April 2026 dan berlaku tiga tahun.",

    'award.2.title': "Sertifikat Praktik Kerja Lapangan",
    'award.2.issuer': "InJourney Airports, Yogyakarta International Airport",
    'award.2.cat': "SERTIFIKAT MAGANG",
    'award.2.year': "2025",
    'award.2.desc': "Sertifikat penyelesaian praktik kerja lapangan di unit Airport Operation Landside & Terminal, 25 Agustus — 20 Desember 2025.",

    'award.3.title': "Program Kepemimpinan PELITA Gadjah Mada",
    'award.3.issuer': "Direktorat Kemahasiswaan Universitas Gadjah Mada",
    'award.3.cat': "PROGRAM KEPEMIMPINAN",
    'award.3.year': "2024",
    'award.3.desc': "Sertifikat peserta Program Akselerasi Kepemimpinan Strategis Mahasiswa (PELITA) Gadjah Mada 2024 bertema “Gadjah Mada Leadership Talents”, Maret — Juni 2024, dinyatakan lulus.",

    'award.4.title': "Table Manner Course",
    'award.4.issuer': "Luxury Malioboro Hotel",
    'award.4.cat': "PELATIHAN",
    'award.4.year': "2023",
    'award.4.desc': "Sertifikat penyelesaian kursus Table Manner di Luxury Malioboro Hotel, 27—28 Oktober 2023.",

    'award.5.title': "Sertifikat Apresiasi Magang",
    'award.5.issuer': "Mettrip Vacations (CV. Mettrip Indonesia Mendunia)",
    'award.5.cat': "SERTIFIKAT APRESIASI",
    'award.5.year': "2025",
    'award.5.desc': "Sertifikat apresiasi sebagai Internship Employee atas penyelesaian magang di Mettrip Vacations.",

    'award.6.title': "Sertifikat Magang Industri",
    'award.6.issuer': "PT Panorama Wardhana Group, Panorama Wisata Semarang",
    'award.6.cat': "SERTIFIKAT MAGANG",
    'award.6.year': "2024",
    'award.6.desc': "Sertifikat partisipasi sebagai mahasiswa magang industri pada 1—31 Juli 2024 dengan hasil sangat baik.",

    'award.7.title': "Sertifikat Apresiasi Mentor",
    'award.7.issuer': "Kala Tour & Organizer (PT Jaya Kala Abadi)",
    'award.7.cat': "SERTIFIKAT APRESIASI",
    'award.7.year': "2024",
    'award.7.desc': "Sertifikat apresiasi atas partisipasi sebagai Mentor pada Tourism Explore Camp di Yogyakarta, 18—19 Mei 2024.",

    'award.8.title': "Staf Divisi Kesenian KAMADIPA",
    'award.8.issuer': "Sekolah Vokasi Universitas Gadjah Mada",
    'award.8.cat': "SERTIFIKAT ORGANISASI",
    'award.8.year': "2023",
    'award.8.desc': "Sertifikat sebagai Staf Divisi Kesenian Komunitas Mahasiswa Diploma Pariwisata (KAMADIPA) Sekolah Vokasi UGM periode 2023.",

    'award.9.title': "Olimpiade Pariwisata Tingkat Nasional ke-12",
    'award.9.issuer': "Sekolah Vokasi Universitas Gadjah Mada",
    'award.9.cat': "SERTIFIKAT KEPANITIAAN",
    'award.9.year': "2023",
    'award.9.desc': "Sertifikat sebagai Panitia Divisi Lomba Tari Kreasi pada Olimpiade Pariwisata Tingkat Nasional ke-12 untuk SMA/SMK sederajat, 29 Oktober 2023.",

    // ── Skills Section
    'skills.label': "KEAHLIAN & KOMPETENSI",
    'skills.title': "Keahlian Inti",
    'skills.desc': "Memadukan layanan pelanggan, koordinasi operasional, dan perencanaan tur untuk memberikan informasi yang akurat serta pelayanan yang mengutamakan orang.",
    'skills.card1.tag': "LAYANAN PELANGGAN & OPERASIONAL BANDARA",
    'skills.card1.desc': "Bantuan penumpang, pemeriksaan kualitas layanan, dan penilaian Level of Service di area check-in, bagasi, imigrasi, dan bea cukai; pemantauan pergerakan penumpang, pengukuran waktu pengantaran bagasi, dan penanganan keluhan di lingkungan terminal.",
    'skills.card2.tag': "PERENCANAAN TUR & KOORDINASI ACARA",
    'skills.card2.desc': "Penyusunan itinerary dan penawaran harga, katalog paket tur, memimpin tur, memandu, serta tugas liaison untuk acara korporat, program wisata, dan pariwisata berbasis masyarakat.",

    // ── Personal Skills Section
    'personal.label': "KEMAMPUAN PERSONAL & TEKNIS",
    'personal.title': "Soft Skills & Kemampuan Teknis",
    'personal.sub': "Kemampuan interpersonal yang mendukung pelayanan prima, ditambah keahlian teknis dan bahasa.",
    'personal.soft.label': "KEMAMPUAN INTERPERSONAL",
    'personal.soft.title': "Soft Skills",
    'personal.hard.label': "KEMAMPUAN TEKNIS & BAHASA",
    'personal.hard.title': "Technical Skills & Languages",
    'personal.orientation': "Karakter Layanan:",
    'personal.quality': "Berorientasi pada Pelanggan",
    'personal.app': "Bahasa:",
    'personal.ready': "Indonesia · Inggris",

    'personal.soft.1.t': "Communication",
    'personal.soft.1.d': "Menyampaikan informasi dengan jelas kepada penumpang, peserta tur, klien, dan tamu.",
    'personal.soft.2.t': "Customer Service",
    'personal.soft.2.d': "Membantu pelanggan dalam kegiatan perjalanan, acara, dan pariwisata.",
    'personal.soft.3.t': "Passenger Assistance",
    'personal.soft.3.d': "Membantu penumpang, termasuk kedatangan internasional dengan sistem deklarasi All Indonesia.",
    'personal.soft.4.t': "Problem Solving",
    'personal.soft.4.d': "Menyelesaikan kendala layanan dengan tenang dan berfokus pada service recovery.",
    'personal.soft.5.t': "Active Listening",
    'personal.soft.5.d': "Mendengarkan kebutuhan pelanggan dengan saksama sebelum memberi jawaban dan solusi.",
    'personal.soft.6.t': "Complaint Handling",
    'personal.soft.6.d': "Menanggapi keluhan dengan empati dan upaya pemulihan layanan.",
    'personal.soft.7.t': "Travel Consultation",
    'personal.soft.7.d': "Memberi saran kebutuhan dan pilihan perjalanan; bersertifikat BNSP sebagai Travel Consultant.",
    'personal.soft.8.t': "Information Delivery",
    'personal.soft.8.d': "Memberikan informasi yang akurat dan jelas kepada pelanggan dan peserta tur.",
    'personal.soft.9.t': "Attention to Detail",
    'personal.soft.9.d': "Cermat dalam inspeksi fasilitas, penilaian LoS, itinerary, dan penawaran harga.",
    'personal.soft.10.t': "Adaptability",
    'personal.soft.10.d': "Bekerja di berbagai lingkungan: bandara, tur, acara, dan komunitas.",

    'personal.hard.1.t': "Microsoft Office",
    'personal.hard.1.d': "Perangkat harian untuk dokumen, laporan, dan pekerjaan administrasi.",
    'personal.hard.2.t': "Operational Coordination",
    'personal.hard.2.d': "Mendukung koordinasi operasional dan pelaporan di unit AOLT, Yogyakarta International Airport.",
    'personal.hard.3.t': "Administrative Management",
    'personal.hard.3.d': "Mengelola surat dan dokumen resmi untuk Head of AOLT melalui NADIA.",
    'personal.hard.4.t': "Service Quality",
    'personal.hard.4.d': "Inspeksi fasilitas dan penilaian Level of Service di check-in, bagasi, imigrasi, dan bea cukai.",
    'personal.lang.1.t': "Bahasa Indonesia",
    'personal.lang.1.l': "Profesional",
    'personal.lang.2.t': "Bahasa Inggris",
    'personal.lang.2.l': "Menengah (Intermediate)",

    // ── Contact Section
    'contact.label': "KONTAK",
    'contact.title': "Hubungi Saya",
    'contact.tagline': "Lulusan Bisnis Perjalanan Wisata yang berorientasi pada pelanggan, berpengalaman di operasional bandara.",
    'contact.subtitle': "Terbuka untuk peluang di bidang layanan pelanggan, operasional bandara, serta tur dan perjalanan. Mari terhubung melalui email, WhatsApp, atau LinkedIn.",
    'contact.location': "LOKASI",
    'contact.phone': "TELEPON / WHATSAPP",
  },

  en: {
    // ── Navbar
    'nav.about': "ABOUT ME",
    'nav.education': "EDUCATION",
    'nav.work': "EXPERIENCE",
    'nav.org': "ORGANIZATIONS",
    'nav.achievements': "ACHIEVEMENTS",
    'nav.awards': "CERTIFICATES",
    'nav.skills': "SKILLS",
    'nav.projects': "WORKS",
    'nav.contact': "CONTACT ME",
    'ui.changePhoto': "Change photo",
    'ui.viewPhoto': "View photo",
    'ui.photo': "photo",
    'ui.orgClick': "Click to change photo",
    'ui.orgDocs': "Documentation (3 photos):",
    'ui.orgView': "View photo",

    // ── Hero
    'hero.scroll': "SCROLL DOWN",
    'hero.hey': "Hi, I'm",
    'hero.tagline': "Customer service, airport operations, and travel planning with a customer-oriented mindset.",
    'hero.based1': "APPLIED BACHELOR'S GRADUATE",
    'hero.based2': "UNIVERSITAS GADJAH MADA",
    'hero.role1': "BNSP-Certified Travel Consultant",
    'hero.role2': "Cum Laude Graduate, Tour and Travel Business UGM",
    'hero.badge.major': "Tour and Travel Business UGM",
    'hero.badge.medal': "GPA 3.80 · Cum Laude",
    'hero.badge.event': "Universitas Gadjah Mada",

    // ── About Section
    'about.label': "ABOUT ME",
    'about.title': "Tourism. Service. Operations.",
    'about.ipk': "GPA",
    'about.honors': "Honors",
    'about.year': "Graduated",
    'about.bio1': "Applied Bachelor's graduate in Tour and Travel Business from Universitas Gadjah Mada with a GPA of 3.80/4.00 and Cum Laude honors. Experienced in customer service and airport operations through an internship at Yogyakarta International Airport, supporting passenger handling, passenger movement monitoring, service quality checks, and terminal operations. Experienced in assisting customers through travel, event, and tourism activities, as well as in tour planning, guiding, and community-based tourism through KKN-PPM UGM in Samosir. Skilled in customer communication, active listening, problem solving, service recovery, coordination, and providing accurate information to customers. BNSP-certified ASEAN Occupation for Travel Consultant with strong English communication and a customer-oriented mindset.",
    'about.cv.prompt': "Want to know more?",
    'about.cv.link': "Download my CV",
    'about.current.label': "FOCUS AREAS",
    'about.current.1.title': "Airport Operations",
    'about.current.1.sub': "Internship at Yogyakarta International Airport",
    'about.current.2.title': "Tours & Events",
    'about.current.2.sub': "Tour Planner, Tour Leader & Liaison Officer",
    'about.current.3.title': "Community-Based Tourism",
    'about.current.3.sub': "KKN Samosir & Kemiriombo Tourism Village",

    // ── Trait Deck
    'trait.card.label': "WORK CHARACTER",
    'trait.change': "Next",
    'trait.hint': "Click to see another work character",
    'trait.1.title': "Caring",
    'trait.1.sub': "Customer Service & Passenger Assistance",
    'trait.1.tag': "Customer-Oriented",
    'trait.1.desc': "Assisting passengers and customers across travel, event, and tourism activities with a customer-oriented mindset and calm complaint handling.",
    'trait.2.title': "Communicative",
    'trait.2.sub': "Communication & Active Listening",
    'trait.2.tag': "Accurate Information",
    'trait.2.desc': "Delivering clear, accurate information to passengers, tour participants, and clients, while listening closely to their needs.",
    'trait.3.title': "Detail-Oriented",
    'trait.3.sub': "Accuracy & Service Quality",
    'trait.3.tag': "Attention to Detail",
    'trait.3.desc': "Careful in facility inspections, Level of Service (LoS) assessments, and in preparing itineraries and quotations.",
    'trait.4.title': "Adaptable",
    'trait.4.sub': "Airport, Tours & Community Tourism",
    'trait.4.tag': "Quick to Adjust",
    'trait.4.desc': "Quick to adapt across settings: airport operations, tours and events, and community-based tourism programs.",

    // ── Quote (ringkasan dari profil CV, bukan motto dari klien)
    'about.quote': "“Customer-oriented, clear in communication, and accurate in every piece of information delivered.”",

    // ── Metrics
    'metric.gpa': "GPA",
    'metric.gpa.sub': "Universitas Gadjah Mada (3.80 / 4.00)",
    'metric.exp': "EXPERIENCES",
    'metric.exp.sub': "Internships, KKN, tour guiding & facilitation",
    'metric.org': "ORGANIZATIONS & VOLUNTEERING",
    'metric.org.sub': "Organizations, committees & volunteer programs",
    'metric.cert': "CERTIFICATES",
    'metric.cert.sub': "BNSP, internship, committee & training",

    // ── Education Section
    'education.label': "ACADEMIC HISTORY",
    'education.title': "Education",
    'education.degreeLabel': "Degree",
    'education.highlights.label': "Key Experiences & Activities",

    'education.1.institution': "Universitas Gadjah Mada",
    'education.1.program': "Tour and Travel Business",
    'education.1.degree': "Bachelor of Applied Tour and Travel Business",
    'education.1.period': "Aug 2022 — Aug 2026",
    'education.1.gpa': "3.80 / 4.00",
    'education.1.status': "Cum Laude",
    'education.1.desc': "Studied for a Bachelor of Applied Tour and Travel Business at Universitas Gadjah Mada and graduated with a GPA of 3.80/4.00 (Cum Laude). Complemented by industry practice at an international airport, travel companies, and a museum, along with organizational, committee, and volunteer experience.",
    'education.1.tag': "Applied Bachelor's Degree",
    'education.1.caption': "Graduation, Universitas Gadjah Mada",
    'education.1.h1': "Airport Operation Landside and Terminal internship at Yogyakarta International Airport (InJourney Airports)",
    'education.1.h2': "Tour planner, tour leader, and liaison officer at Mettrip Vacations and Panorama Wisata Semarang",
    'education.1.h3': "KKN-PPM UGM “Mengukir Samosir” 2025 and the Kemiriombo Tourism Village community service project",
    'education.1.h4': "Chairman of the Committee of Gendhing Budaya 2024; active in KAMADIPA, PELITA Gadjah Mada, and HIPMI PT UGM",

    // ── Work Section
    'work.label': "EXPERIENCE",
    'work.title': "Professional Experience",
    'work.subtitle': "Airport operations, tour planning, guiding, and community-based tourism programs.",
    'work.cta': "View All Experience",

    // ── Karya & Proyek
    'projects.label': "WORKS & PROJECTS",
    'projects.title': "Works & Projects",
    'projects.sub': "Materials and outputs from internships, community service projects, and research.",
    'projects.open': "View full size →",
    'proj.1.cat': "TOUR PACKAGE · METTRIP VACATIONS",
    'proj.1.title': "Open Trip Yogyakarta Poster",
    'proj.1.desc': "Mettrip Vacations open trip package material: 3 days 2 nights in Yogyakarta, 3—5 April 2025.",
    'proj.2.cat': "TOUR PACKAGE · PANORAMA WISATA SEMARANG",
    'proj.2.title': "Explore Karimunjawa Tour Package",
    'proj.2.desc': "Karimunjawa tour package material with a 3-day itinerary, from the catalog and itinerary work at Panorama Wisata Semarang.",
    'proj.3.cat': "VIDEO · KEMIRIOMBO TOURISM VILLAGE",
    'proj.3.title': "Kemiriombo Tourism Village Profile Video",
    'proj.3.desc': "A village profile video published on the YouTube channel “Desa Wisata Kemiriombo”, part of the research and community service project.",
    'proj.4.cat': "JOURNAL · KEMIRIOMBO TOURISM VILLAGE",
    'proj.4.title': "Herbal Tourism Package to Increase Tourist Visits in Kemiriombo Tourism Village",
    'proj.4.desc': "Abstract of the journal article from the Kemiriombo Tourism Village research and community service; Illona is listed among the authors.",
    'proj.5.cat': "AIRPORT OPERATIONS · YOGYAKARTA INTERNATIONAL AIRPORT",
    'proj.5.title': "Delay Management Information",
    'proj.5.desc': "Information board on flight delay handling based on Regulation PM 89 of 2015, part of the documentation from the AOLT internship.",

    'work.1.role': "Airport Operation Landside and Terminal (Internship)",
    'work.1.inst': "YOGYAKARTA INTERNATIONAL AIRPORT",
    'work.1.loc': "InJourney Airports",
    'work.1.period': "Aug 2025 — Dec 2025",
    'work.1.sub': "Landside & Terminal Operations, Service Quality",
    'work.1.desc': "Conducted inspections of landside and terminal facilities to support service quality and operational standards, and Level of Service (LoS) assessments across check-in, baggage, immigration, and customs areas. Monitored domestic and international passenger movements, including baggage handling processes, and measured First Baggage and Last Baggage delivery times. Assisted the Head of AOLT with administrative tasks, including managing official correspondence and documents through NADIA (Naskah Dinas InJourney Airports), and supported operational coordination and reporting within the AOLT unit. Assisted international arriving passengers with the All Indonesia integrated declaration system.",

    'work.2.role': "KKN-PPM UGM Participant",
    'work.2.inst': "KKN-PPM UGM MENGUKIR SAMOSIR 2025",
    'work.2.loc': "Samosir Regency, North Sumatra",
    'work.2.period': "2025",
    'work.2.sub': "Community-Based Tourism Development",
    'work.2.desc': "Took part in developing local tourism potential through community empowerment, destination promotion, tourism education, and community-based activities. Work programs: Beach Clean Up at Pasir Putih Parbaba together with the community, the Tourism Office, the Environment Office, and village officials; Sustainable Tourism and Travel Smart Education for the community and students; a Homestay Standardization Brochure (service, facilities, cleanliness, and comfort); Tourism Go Digital: digital-based tourism promotion; Explore Indonesia Destination with Young Tour Guides, introducing tourism and basic guiding to children through drawing and coloring; the Jomput Sampah Action; and Liaison Officer (LO) for the Agro Parade and competitions at the Tao Toba Jou Jou Festival.",

    'work.3.role': "Tour Planner, Tour Leader & Liaison Officer",
    'work.3.inst': "METTRIP VACATIONS",
    'work.3.loc': "CV. Mettrip Indonesia Mendunia",
    'work.3.period': "Jan 2025 — May 2025",
    'work.3.sub': "Tour Planning, Event Support & Liaison",
    'work.3.desc': "Served as Tour Leader, Runner, and Assistant Project Officer for PT Logindo's Anniversary Celebration, and as Liaison Officer for artists Marcello Tahitoe, Ronnie Sianturi, Harsya Riewpassa, and Oma Rete at the PKP GPIB Anniversary Celebration. Served as Runner and Tour Leader for the Reunion of '98 Prosecutor Training and Formation Program, and as Facilitator Guide and Liaison Officer for PT Ship Management Indonesia's Company Outing. Prepared detailed itineraries and quotations for PT Logindo's Company Gathering, created tour package catalogs (Seoul, Japan, Hong Kong-Macau, Thailand, Vietnam, Singapore, Malaysia), generated marketing content ideas, and appeared as a content talent for the company's social media.",

    'work.4.role': "Research and Community Service Project",
    'work.4.inst': "KEMIRIOMBO TOURISM VILLAGE",
    'work.4.loc': "Universitas Gadjah Mada",
    'work.4.period': "Aug 2024 — Nov 2024",
    'work.4.sub': "Tourism Village Promotion & Tour Package Design",
    'work.4.desc': "Created a village profile video published on the YouTube channel “Desa Wisata Kemiriombo”, designed a tour package, and contributed to the final research and community service report, which was published in an academic journal.",

    'work.5.role': "Tour Planner (Internship)",
    'work.5.inst': "PANORAMA WISATA SEMARANG",
    'work.5.loc': "PT Wardhana Group",
    'work.5.period': "Jul 2024",
    'work.5.sub': "Tour Package Development & Marketing Content",
    'work.5.desc': "Created a Karimunjawa tour package catalog, developed marketing concepts, and produced video content for the company's social media. Created itineraries and quotations for tour packages covering Central Java and the Jakarta-Bandung regions, prepared and offered tour package proposals to potential customers, and created video recaps of tour participants during Karimunjawa tour programs. Also served as Tour Leader for a one-day tour to Dieng.",

    'work.6.role': "Project Facilitator (Freelance)",
    'work.6.inst': "KALA TOUR & ORGANIZER",
    'work.6.loc': "Yogyakarta",
    'work.6.period': "18 — 19 May 2024",
    'work.6.sub': "Tourism Explore Camp, SMA PGRI 1 Bogor",
    'work.6.desc': "Facilitator Guide for a 2-day, 1-night Tourism Explore Camp for students of SMA PGRI 1 Bogor in Yogyakarta. The program included a live-in at Krebet Tourism Village (batik and clay crafts), a Kuda Lumping cultural performance, teaching local children, and visits to Prambanan Temple, Keraton Yogyakarta, and Malioboro.",

    'work.7.role': "Tour Guide",
    'work.7.inst': "MUSEUM OF THE AIR FORCE DIRGANTARA MANDALA",
    'work.7.loc': "Museum Pusat TNI AU",
    'work.7.period': "Sep 2023",
    'work.7.sub': "Guiding per National Competency Standards",
    'work.7.desc': "Guided tour participants by providing clear information and coordinating group activities. Delivered tour information based on the National Competency Standards for Tour Guiding and effectively communicated the history, facilities, and key information of each destination. Received positive evaluations from professional tour guides and tour guiding course lecturers for communication, service, and tour delivery.",

    'work.8.role': "Campus Tour Guide",
    'work.8.inst': "UNIVERSITAS GADJAH MADA",
    'work.8.loc': "UGM Campus",
    'work.8.period': "Jun 2023",
    'work.8.sub': "Campus Tour (Seasonal)",
    'work.8.desc': "Guided UGM campus tours, introducing the university's history, facilities, and academic environment in line with the National Competency Standards for Tour Guiding, and received a positive assessment from the Tour Guiding Course lecturer.",

    // ── Organizations Section
    'trainings.label': "ORGANIZATIONAL EXPERIENCE",
    'trainings.title': "Organizations, Committees & Volunteering",
    'trainings.campus': "UNIVERSITAS GADJAH MADA",

    'org.1.role': "Art Division",
    'org.1.inst': "KAMADIPA BPW UGM",
    'org.1.period': "Feb 2023 — 2025",
    'org.1.loc': "Organization",
    'org.1.desc': "KAMADIPA is an association organization in the Tour and Travel Business department. Part of the Art division.",

    'org.2.role': "Leadership Talent",
    'org.2.inst': "PELITA Gadjah Mada",
    'org.2.period': "Mar 2024 — Jun 2024",
    'org.2.loc': "Leadership Program",
    'org.2.desc': "Student strategic leadership acceleration program organized by the sub-directorate of student character development at Universitas Gadjah Mada. Part of the leadership talent.",

    'org.3.role': "Member",
    'org.3.inst': "HIPMI PT UGM",
    'org.3.period': "Apr 2023 — Dec 2023",
    'org.3.loc': "Organization",
    'org.3.desc': "Member of HIPMI PT UGM (Himpunan Pengusaha Muda Indonesia), an organization committed to advancing and developing the potential of young entrepreneurs at UGM. Participated in development and training programs organized by the management of HIPMI PT UGM.",

    'org.4.role': "Chairman of the Committee",
    'org.4.inst': "Gendhing Budaya 2024",
    'org.4.period': "Aug 2024 — Dec 2024",
    'org.4.loc': "Committee",
    'org.4.desc': "Performances of dance and musical arts by Tour and Travel Business students to fulfill arts practice courses. Coordinated Gendhing Budaya from the beginning to the end of the event.",

    'org.5.role': "Creation Dance Competition Coordinator",
    'org.5.inst': "Olimpiade Pariwisata Nasional #12",
    'org.5.period': "Aug 2023 — Oct 2023",
    'org.5.loc': "Committee",
    'org.5.desc': "The National Tourism Olympiad is a competition held by the Tour and Travel Business department for high school students who are interested in tourism. Coordinated the creation dance competition.",

    'org.6.role': "Volunteer, World Tourism Day: Clean Up Action!",
    'org.6.inst': "SOSMAS KAMADIPA BPW UGM",
    'org.6.period': "1 Oct 2023",
    'org.6.loc': "Volunteer",
    'org.6.desc': "One of the social work programs of SOSMAS KAMADIPA to celebrate World Tourism Day through a volunteer action to clean up trash at Alun-Alun Kidul Yogyakarta, followed by a discussion on environmental issues.",

    'org.7.role': "Volunteer, SOASIC (Sosmas and Society Interactive Coastal)",
    'org.7.inst': "BEM KM SV UGM",
    'org.7.period': "24 Jun 2023",
    'org.7.loc': "Volunteer",
    'org.7.desc': "SOASIC is one of the social work programs of SOSMAS BEM KM SV UGM to realize a sense of concern for marine ecosystems, especially coastal areas. Activities included beach cleaning, planting sea pandanus, releasing hatchlings, and ecobrick education.",

    // ── Prestasi & Pencapaian
    'achv.label': "ACHIEVEMENTS",
    'achv.title': "Achievements",
    'achv.1.badge': "CUM LAUDE",
    'achv.1.title': "Graduated Cum Laude, Bachelor of Applied Tour and Travel Business",
    'achv.1.inst': "Universitas Gadjah Mada",
    'achv.1.period': "Aug 2022 — Aug 2026",
    'achv.1.gpa': "GPA 3.80/4.00",

    // ── Awards Section
    'awards.label': "CERTIFICATIONS & CERTIFICATES",
    'awards.title': "Certifications & Certificates",
    'awards.sub': "National competency certification, plus internship, committee, organization, and training certificates.",
    'awards.openDoc': "Open Certificate",
    'awards.issuer': "Issued by",
    'awards.viewOriginal': "View Original Document →",

    'award.1.title': "BNSP — ASEAN Occupation for Travel Consultant",
    'award.1.issuer': "Indonesian Professional Certification Authority (BNSP) via LSP Universitas Gadjah Mada",
    'award.1.cat': "NATIONAL COMPETENCY CERTIFICATION",
    'award.1.year': "Apr 2026",
    'award.1.desc': "Certificate of competence for the ASEAN Occupation for Travel Consultant in the travel agency sector, issued in April 2026 and valid for three years.",

    'award.2.title': "Field Work Practice Certificate",
    'award.2.issuer': "InJourney Airports, Yogyakarta International Airport",
    'award.2.cat': "INTERNSHIP CERTIFICATE",
    'award.2.year': "2025",
    'award.2.desc': "Certificate of completion of field work practice at the Airport Operation Landside & Terminal unit, 25 August — 20 December 2025.",

    'award.3.title': "PELITA Gadjah Mada Leadership Program",
    'award.3.issuer': "Directorate of Student Affairs, Universitas Gadjah Mada",
    'award.3.cat': "LEADERSHIP PROGRAM",
    'award.3.year': "2024",
    'award.3.desc': "Participant certificate for the Student Strategic Leadership Acceleration Program (PELITA) Gadjah Mada 2024, themed “Gadjah Mada Leadership Talents”, March — June 2024, declared passed.",

    'award.4.title': "Table Manner Course",
    'award.4.issuer': "Luxury Malioboro Hotel",
    'award.4.cat': "TRAINING",
    'award.4.year': "2023",
    'award.4.desc': "Certificate of accomplishment for the Table Manner Course at Luxury Malioboro Hotel, 27—28 October 2023.",

    'award.5.title': "Internship Appreciation Certificate",
    'award.5.issuer': "Mettrip Vacations (CV. Mettrip Indonesia Mendunia)",
    'award.5.cat': "APPRECIATION CERTIFICATE",
    'award.5.year': "2025",
    'award.5.desc': "Certificate of appreciation as Internship Employee for completing the internship at Mettrip Vacations.",

    'award.6.title': "Industry Internship Certificate",
    'award.6.issuer': "PT Panorama Wardhana Group, Panorama Wisata Semarang",
    'award.6.cat': "INTERNSHIP CERTIFICATE",
    'award.6.year': "2024",
    'award.6.desc': "Certificate of participation as an industry internship student, 1—31 July 2024, with a very good result.",

    'award.7.title': "Mentor Appreciation Certificate",
    'award.7.issuer': "Kala Tour & Organizer (PT Jaya Kala Abadi)",
    'award.7.cat': "APPRECIATION CERTIFICATE",
    'award.7.year': "2024",
    'award.7.desc': "Certificate of appreciation for participating as Mentor at the Tourism Explore Camp in Yogyakarta, 18—19 May 2024.",

    'award.8.title': "KAMADIPA Arts Division Staff",
    'award.8.issuer': "Vocational School, Universitas Gadjah Mada",
    'award.8.cat': "ORGANIZATION CERTIFICATE",
    'award.8.year': "2023",
    'award.8.desc': "Certificate as Staff of the Arts Division of the Tourism Diploma Student Community (KAMADIPA), UGM Vocational School, term 2023.",

    'award.9.title': "National Tourism Olympiad #12",
    'award.9.issuer': "Vocational School, Universitas Gadjah Mada",
    'award.9.cat': "COMMITTEE CERTIFICATE",
    'award.9.year': "2023",
    'award.9.desc': "Certificate as Committee Member of the Creation Dance Competition Division at the 12th National Tourism Olympiad for senior high school students, 29 October 2023.",

    // ── Skills Section
    'skills.label': "SKILLS & COMPETENCIES",
    'skills.title': "Core Skills",
    'skills.desc': "Combines customer service, operational coordination, and tour planning to provide accurate information and service that puts people first.",
    'skills.card1.tag': "CUSTOMER SERVICE & AIRPORT OPERATIONS",
    'skills.card1.desc': "Passenger assistance, service quality checks, and Level of Service assessments across check-in, baggage, immigration, and customs; passenger movement monitoring, baggage delivery time measurement, and complaint handling in a terminal environment.",
    'skills.card2.tag': "TOUR PLANNING & EVENT COORDINATION",
    'skills.card2.desc': "Itineraries and quotations, tour package catalogs, tour leading, guiding, and liaison work for corporate events, tourism programs, and community-based tourism.",

    // ── Personal Skills Section
    'personal.label': "PERSONAL & TECHNICAL SKILLS",
    'personal.title': "Soft Skills & Technical Skills",
    'personal.sub': "Interpersonal skills that support excellent service, plus technical skills and languages.",
    'personal.soft.label': "INTERPERSONAL SKILLS",
    'personal.soft.title': "Soft Skills",
    'personal.hard.label': "TECHNICAL SKILLS & LANGUAGES",
    'personal.hard.title': "Technical Skills & Languages",
    'personal.orientation': "Service Character:",
    'personal.quality': "Customer-Oriented",
    'personal.app': "Languages:",
    'personal.ready': "Indonesian · English",

    'personal.soft.1.t': "Communication",
    'personal.soft.1.d': "Delivering information clearly to passengers, tour participants, clients, and guests.",
    'personal.soft.2.t': "Customer Service",
    'personal.soft.2.d': "Assisting customers across travel, event, and tourism activities.",
    'personal.soft.3.t': "Passenger Assistance",
    'personal.soft.3.d': "Supporting passengers, including international arrivals with the All Indonesia declaration system.",
    'personal.soft.4.t': "Problem Solving",
    'personal.soft.4.d': "Resolving service issues calmly with a focus on service recovery.",
    'personal.soft.5.t': "Active Listening",
    'personal.soft.5.d': "Listening closely to customer needs before offering answers and solutions.",
    'personal.soft.6.t': "Complaint Handling",
    'personal.soft.6.d': "Responding to complaints with empathy and service recovery.",
    'personal.soft.7.t': "Travel Consultation",
    'personal.soft.7.d': "Advising on travel needs and options; BNSP-certified Travel Consultant.",
    'personal.soft.8.t': "Information Delivery",
    'personal.soft.8.d': "Providing accurate, clear information to customers and tour participants.",
    'personal.soft.9.t': "Attention to Detail",
    'personal.soft.9.d': "Careful in facility inspections, LoS assessments, itineraries, and quotations.",
    'personal.soft.10.t': "Adaptability",
    'personal.soft.10.d': "Working across airport, tour, event, and community settings.",

    'personal.hard.1.t': "Microsoft Office",
    'personal.hard.1.d': "Daily tool for documents, reports, and administrative work.",
    'personal.hard.2.t': "Operational Coordination",
    'personal.hard.2.d': "Supported operational coordination and reporting within the AOLT unit at Yogyakarta International Airport.",
    'personal.hard.3.t': "Administrative Management",
    'personal.hard.3.d': "Managed official correspondence and documents for the Head of AOLT through NADIA.",
    'personal.hard.4.t': "Service Quality",
    'personal.hard.4.d': "Facility inspections and Level of Service assessments across check-in, baggage, immigration, and customs.",
    'personal.lang.1.t': "Indonesian",
    'personal.lang.1.l': "Professional",
    'personal.lang.2.t': "English",
    'personal.lang.2.l': "Intermediate",

    // ── Contact Section
    'contact.label': "CONTACT",
    'contact.title': "Contact Me",
    'contact.tagline': "Customer-oriented Tour and Travel Business graduate with airport operations experience.",
    'contact.subtitle': "Open to opportunities in customer service, airport operations, and tour and travel. Let's connect by email, WhatsApp, or LinkedIn.",
    'contact.location': "LOCATION",
    'contact.phone': "PHONE / WHATSAPP",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('id')

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('site_language') as Language
      if (savedLang === 'id' || savedLang === 'en') {
        setLangState(savedLang)
        return
      }
      const userLang = navigator.language || (navigator as any).userLanguage || ''
      if (userLang.toLowerCase().startsWith('id')) {
        setLangState('id')
      } else {
        setLangState('en')
      }
    } catch {
      setLangState('id')
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    try {
      localStorage.setItem('site_language', newLang)
    } catch {}
  }

  const t = (key: string): string => {
    return translations[lang]?.[key] ?? translations['id']?.[key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
