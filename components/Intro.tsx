'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

/**
 * Layar pembuka: globe tergambar garis demi garis, lalu pesawat muncul, nama muncul, lalu layar terbelah ke atas-bawah
 * dan hero terungkap bertahap (lihat .hero-anim di globals.css).
 * - Tampil di setiap muat ulang dan kunjungan baru; dilewati hanya bila datang dari halaman lain di situs ini (skrip di <head> di layout.tsx menyembunyikannya sebelum cat pertama).
 * - Bisa dilewati: klik, Esc, atau Enter.
 * - Pengaman: bila JavaScript gagal, CSS menyembunyikan layar ini sendiri setelah beberapa detik.
 */
const OPEN_AT_MS = 1900 // kapan layar mulai terbelah (setelah globe + nama selesai)
const HERO_AFTER_MS = 200 // hero mulai terungkap sesaat setelah layar mulai terbelah
const DONE_AFTER_MS = 1100 // layar disembunyikan setelah animasi belah selesai

export default function Intro() {
  const { lang } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = document.documentElement
    if (root.classList.contains('intro-done')) return // sudah dilihat di sesi ini

    root.classList.add('intro-lock')
    const timers: number[] = []
    let opened = false

    const open = () => {
      if (opened) return
      opened = true
      ref.current?.classList.add('is-open')
      timers.push(window.setTimeout(() => root.classList.add('hero-go'), HERO_AFTER_MS))
      timers.push(
        window.setTimeout(() => {
          root.classList.add('intro-done')
          root.classList.remove('intro-lock')
        }, DONE_AFTER_MS)
      )
    }

    const openTimer = window.setTimeout(open, OPEN_AT_MS)
    const skip = () => {
      window.clearTimeout(openTimer)
      open()
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') skip()
    }
    window.addEventListener('keydown', onKey)
    const el = ref.current
    el?.addEventListener('click', skip)

    return () => {
      window.clearTimeout(openTimer)
      timers.forEach((t) => window.clearTimeout(t))
      window.removeEventListener('keydown', onKey)
      el?.removeEventListener('click', skip)
      root.classList.remove('intro-lock')
    }
  }, [])

  return (
    <div ref={ref} data-intro className="intro" role="presentation" aria-hidden="true">
      <div className="intro-panel intro-top" />
      <div className="intro-panel intro-bottom" />

      <div className="intro-content">
        <svg className="intro-globe" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <circle className="intro-cap-fill-right" cx="50" cy="50" r="44" />
          <circle className="intro-cap-line" cx="50" cy="50" r="44" pathLength="100" />
          <ellipse className="intro-cap-mid" cx="50" cy="50" rx="18" ry="44" pathLength="100" />
          <path className="intro-cap-mid" d="M6 50h88M13 30h74M13 70h74" pathLength="100" />
          <path
            className="intro-cap-fill-left"
            transform="translate(24 24) scale(2.2)"
            stroke="#eff6ff"
            strokeWidth="0.6"
            strokeLinejoin="round"
            d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
          />
        </svg>
        <p className="intro-name">Illona Indrasta Parahita</p>
        <p className="intro-role">TOUR &amp; TRAVEL BUSINESS</p>
      </div>

      <p className="intro-skip">{lang === 'en' ? 'Click to skip' : 'Klik untuk melewati'}</p>
    </div>
  )
}
