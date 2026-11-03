'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const palette = ['bg-blue-600', 'bg-blue-600', 'bg-indigo-600', 'bg-cyan-700', 'bg-purple-600', 'bg-amber-600', 'bg-sky-600', 'bg-rose-600']

type Bi = { id: string; en: string }

const projects: { number: string; title: Bi; description: Bi; framework: Bi; techStack: string[] }[] = [
  {
    number: '01',
    title: { id: 'Penilaian Level of Service (LoS) & Inspeksi Fasilitas', en: 'Level of Service (LoS) Assessments & Facility Inspections' },
    description: {
      id: 'Inspeksi fasilitas landside dan terminal untuk mendukung kualitas layanan dan standar operasional, serta penilaian LoS di area check-in, bagasi, imigrasi, dan bea cukai.',
      en: 'Inspections of landside and terminal facilities to support service quality and operational standards, and LoS assessments across check-in, baggage, immigration, and customs areas.',
    },
    framework: { id: 'OPERASIONAL BANDARA — YOGYAKARTA INTERNATIONAL AIRPORT', en: 'AIRPORT OPERATIONS — YOGYAKARTA INTERNATIONAL AIRPORT' },
    techStack: ['Airport Operations', 'Level of Service', 'Facility Inspection'],
  },
  {
    number: '02',
    title: { id: 'Pemantauan Pergerakan Penumpang & Waktu Bagasi', en: 'Passenger Movement Monitoring & Baggage Times' },
    description: {
      id: 'Memantau pergerakan penumpang domestik dan internasional, termasuk proses penanganan bagasi, serta mengukur waktu pengantaran First Baggage dan Last Baggage.',
      en: 'Monitored domestic and international passenger movements, including baggage handling processes, and measured First Baggage and Last Baggage delivery times.',
    },
    framework: { id: 'OPERASIONAL TERMINAL — INJOURNEY AIRPORTS', en: 'TERMINAL OPERATIONS — INJOURNEY AIRPORTS' },
    techStack: ['Passenger Movement', 'Baggage Delivery Time', 'Terminal Operations'],
  },
  {
    number: '03',
    title: { id: 'Dukungan Administrasi & Korespondensi (NADIA)', en: 'Administrative & Correspondence Support (NADIA)' },
    description: {
      id: 'Membantu Head of AOLT dalam tugas administrasi, termasuk pengelolaan surat dan dokumen resmi melalui NADIA (Naskah Dinas InJourney Airports), serta koordinasi dan pelaporan unit.',
      en: 'Assisted the Head of AOLT with administrative tasks, including managing official correspondence and documents through NADIA (Naskah Dinas InJourney Airports), plus unit coordination and reporting.',
    },
    framework: { id: 'ADMINISTRASI — UNIT AOLT', en: 'ADMINISTRATION — AOLT UNIT' },
    techStack: ['Administrative Management', 'Operational Coordination', 'Reporting'],
  },
  {
    number: '04',
    title: { id: 'Bantuan Sistem Deklarasi Terpadu All Indonesia', en: 'All Indonesia Integrated Declaration Assistance' },
    description: {
      id: 'Membantu penumpang internasional yang tiba dalam menggunakan sistem deklarasi terpadu All Indonesia.',
      en: 'Assisted international arriving passengers with the All Indonesia integrated declaration system.',
    },
    framework: { id: 'LAYANAN PENUMPANG — YOGYAKARTA INTERNATIONAL AIRPORT', en: 'PASSENGER SERVICE — YOGYAKARTA INTERNATIONAL AIRPORT' },
    techStack: ['Passenger Assistance', 'All Indonesia System', 'Customer Service'],
  },
  {
    number: '05',
    title: { id: 'Liaison Officer Artis pada HUT PKP GPIB', en: 'Artist Liaison Officer at the PKP GPIB Anniversary' },
    description: {
      id: 'Liaison Officer untuk artis Marcello Tahitoe, Ronnie Sianturi, Harsya Riewpassa, dan Oma Rete pada perayaan HUT PKP GPIB.',
      en: 'Liaison Officer for artists Marcello Tahitoe, Ronnie Sianturi, Harsya Riewpassa, and Oma Rete at the PKP GPIB Anniversary Celebration.',
    },
    framework: { id: 'ACARA — METTRIP VACATIONS', en: 'EVENTS — METTRIP VACATIONS' },
    techStack: ['Liaison Officer (LO)', 'Event Support', 'Coordination'],
  },
  {
    number: '06',
    title: { id: 'Tour Leader, Runner & Facilitator Guide untuk Acara Korporat', en: 'Tour Leader, Runner & Facilitator Guide for Corporate Events' },
    description: {
      id: 'Tour Leader, Runner, dan Assistant Project Officer pada HUT PT Logindo; Runner dan Tour Leader pada Program Pelatihan dan Pembentukan Reuni Jaksa ’98; Facilitator Guide dan LO untuk Company Outing PT Ship Management Indonesia.',
      en: "Tour Leader, Runner, and Assistant Project Officer for PT Logindo's Anniversary; Runner and Tour Leader for the Reunion of '98 Prosecutor Training and Formation Program; Facilitator Guide and LO for PT Ship Management Indonesia's Company Outing.",
    },
    framework: { id: 'TUR & ACARA — METTRIP VACATIONS', en: 'TOURS & EVENTS — METTRIP VACATIONS' },
    techStack: ['Tour Leader', 'Facilitator Guide', 'Event Support'],
  },
  {
    number: '07',
    title: { id: 'Katalog Paket Tur, Itinerary & Penawaran Harga', en: 'Tour Package Catalogs, Itineraries & Quotations' },
    description: {
      id: 'Membuat katalog paket tur (Seoul, Jepang, Hong Kong-Makau, Thailand, Vietnam, Singapura, Malaysia) serta itinerary dan penawaran harga terperinci untuk Company Gathering PT Logindo.',
      en: "Created tour package catalogs (Seoul, Japan, Hong Kong-Macau, Thailand, Vietnam, Singapore, Malaysia) and detailed itineraries and quotations for PT Logindo's Company Gathering.",
    },
    framework: { id: 'PERENCANAAN TUR — METTRIP VACATIONS', en: 'TOUR PLANNING — METTRIP VACATIONS' },
    techStack: ['Tour Planner', 'Itinerary & Quotation', 'Tour Package Catalogs'],
  },
  {
    number: '08',
    title: { id: 'Paket Tur Karimunjawa & Video Rekap Peserta', en: 'Karimunjawa Tour Package & Participant Video Recaps' },
    description: {
      id: 'Membuat katalog paket tur Karimunjawa, konsep pemasaran, konten video media sosial, proposal paket tur, dan video rekap peserta tur Karimunjawa.',
      en: 'Created a Karimunjawa tour package catalog, marketing concepts, social media video content, tour package proposals, and video recaps of Karimunjawa tour participants.',
    },
    framework: { id: 'PERENCANAAN TUR — PANORAMA WISATA SEMARANG', en: 'TOUR PLANNING — PANORAMA WISATA SEMARANG' },
    techStack: ['Tour Planner', 'Karimunjawa Catalog', 'Video Content'],
  },
  {
    number: '09',
    title: { id: 'Program Kerja KKN-PPM UGM Mengukir Samosir 2025', en: 'KKN-PPM UGM Mengukir Samosir 2025 Work Programs' },
    description: {
      id: 'Beach Clean Up Pasir Putih Parbaba, edukasi Sustainable Tourism and Travel Smart, brosur standardisasi homestay, Tourism Go Digital, Explore Indonesia Destination with Young Tour Guides, Aksi Jomput Sampah, dan LO Tao Toba Jou Jou Festival.',
      en: 'Pasir Putih Parbaba Beach Clean Up, Sustainable Tourism and Travel Smart Education, a homestay standardization brochure, Tourism Go Digital, Explore Indonesia Destination with Young Tour Guides, the Jomput Sampah Action, and LO at the Tao Toba Jou Jou Festival.',
    },
    framework: { id: 'PARIWISATA BERBASIS MASYARAKAT — KABUPATEN SAMOSIR', en: 'COMMUNITY-BASED TOURISM — SAMOSIR REGENCY' },
    techStack: ['Community Empowerment', 'Tourism Education', 'Destination Promotion'],
  },
  {
    number: '10',
    title: { id: 'Penelitian & Pengabdian Masyarakat Desa Wisata Kemiriombo', en: 'Kemiriombo Tourism Village Research & Community Service' },
    description: {
      id: 'Video profil desa di kanal YouTube “Desa Wisata Kemiriombo”, rancangan paket wisata, dan kontribusi pada laporan akhir yang dipublikasikan di jurnal akademik.',
      en: 'A village profile video on the YouTube channel “Desa Wisata Kemiriombo”, a tour package design, and a contribution to the final report published in an academic journal.',
    },
    framework: { id: 'PENGABDIAN MASYARAKAT — UNIVERSITAS GADJAH MADA', en: 'COMMUNITY SERVICE — UNIVERSITAS GADJAH MADA' },
    techStack: ['Project Coordination', 'Research Skills', 'Tour Package Design'],
  },
  {
    number: '11',
    title: { id: 'Facilitator Guide Tourism Explore Camp', en: 'Tourism Explore Camp Facilitator Guide' },
    description: {
      id: 'Facilitator Guide untuk camp 2 hari 1 malam bagi siswa SMA PGRI 1 Bogor di Yogyakarta: live-in Desa Wisata Krebet, pertunjukan Kuda Lumping, serta kunjungan ke Prambanan, Keraton Yogyakarta, dan Malioboro.',
      en: 'Facilitator Guide for a 2-day, 1-night camp for SMA PGRI 1 Bogor students in Yogyakarta: a Krebet Tourism Village live-in, a Kuda Lumping performance, and visits to Prambanan, Keraton Yogyakarta, and Malioboro.',
    },
    framework: { id: 'FASILITASI — KALA TOUR & ORGANIZER', en: 'FACILITATION — KALA TOUR & ORGANIZER' },
    techStack: ['Facilitator Guide', 'Student Services', 'Guided Tours'],
  },
  {
    number: '12',
    title: { id: 'Ketua Panitia Gendhing Budaya 2024', en: 'Chairman of the Committee, Gendhing Budaya 2024' },
    description: {
      id: 'Mengoordinasikan Gendhing Budaya, pertunjukan seni tari dan musik oleh mahasiswa Bisnis Perjalanan Wisata, dari awal hingga akhir acara.',
      en: 'Coordinated Gendhing Budaya, a dance and musical arts performance by Tour and Travel Business students, from the beginning to the end of the event.',
    },
    framework: { id: 'KEPANITIAAN — BISNIS PERJALANAN WISATA UGM', en: 'COMMITTEE — TOUR AND TRAVEL BUSINESS UGM' },
    techStack: ['Committee Chair', 'Event Coordination', 'Performing Arts'],
  },
]

export default function ProjectList() {
  const { lang } = useLanguage()
  const copy = {
    label: { id: 'PORTOFOLIO PARIWISATA & PENGALAMAN', en: 'TOURISM PORTFOLIO & EXPERIENCE' },
    title: { id: 'Bandara, Tur, Acara & Komunitas', en: 'Airport, Tours, Events & Community' },
    sub: {
      id: 'Dokumentasi rekam jejak operasional bandara, perencanaan dan pemanduan tur, dukungan acara, pariwisata berbasis masyarakat, dan kepemimpinan kemahasiswaan.',
      en: 'A record of airport operations, tour planning and guiding, event support, community-based tourism, and student leadership.',
    },
  }

  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{copy.label[lang]}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{copy.title[lang]}</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">{copy.sub[lang]}</p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300 cursor-pointer"
            >
              {/* Number */}
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">
                {project.number}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1 group-hover:text-[var(--foreground)] transition-colors">
                  {project.title[lang]}
                </h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">
                  {project.description[lang]}
                </p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">
                  {project.framework[lang]}
                </p>
                {/* Tag badges */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${palette[(Number(project.number) + i) % palette.length]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status icon */}
              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
