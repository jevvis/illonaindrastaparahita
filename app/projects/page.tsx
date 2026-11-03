import Navbar from '@/components/Navbar'
import ProjectList from '@/components/ProjectList'

export const metadata = {
  title: 'Pengalaman & Portofolio | Illona Indrasta Parahita',
  description: 'Pengalaman operasional bandara, perencanaan tur, pemanduan, dan pariwisata berbasis masyarakat',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <ProjectList />
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-[var(--card-border)] mt-20">
        <p className="text-[var(--muted)] text-sm">
          © {new Date().getFullYear()} Illona Indrasta Parahita. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
