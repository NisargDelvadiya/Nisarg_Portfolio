'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('#components').then((mod) => mod.Navbar), { ssr: false })
const Welcome = dynamic(() => import('#components').then((mod) => mod.Welcome), { ssr: false })
const Dock = dynamic(() => import('#components').then((mod) => mod.Dock), { ssr: false })
const CookieNotification = dynamic(() => import('#components').then((mod) => mod.CookieNotification), { ssr: false })
const GlowCursor = dynamic(() => import('#components').then((mod) => mod.GlowCursor), { ssr: false })
const Finder = dynamic(() => import('#windows').then((mod) => mod.Finder), { ssr: false })
const Safari = dynamic(() => import('#windows').then((mod) => mod.Safari), { ssr: false })
const Photos = dynamic(() => import('#windows').then((mod) => mod.Photos), { ssr: false })
const Contact = dynamic(() => import('#windows').then((mod) => mod.Contact), { ssr: false })
const Terminal = dynamic(() => import('#windows').then((mod) => mod.Terminal), { ssr: false })
const Resume = dynamic(() => import('#windows').then((mod) => mod.Resume), { ssr: false })
const TxtFile = dynamic(() => import('#windows').then((mod) => mod.TxtFile), { ssr: false })
const ImgFile = dynamic(() => import('#windows').then((mod) => mod.ImgFile), { ssr: false })
const PdfViewer = dynamic(() => import('#windows').then((mod) => mod.PdfViewer), { ssr: false })
const Translate = dynamic(() => import('#windows').then((mod) => mod.Translate), { ssr: false })
const Notes = dynamic(() => import('#windows').then((mod) => mod.Notes), { ssr: false })

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <main className="w-dvw h-dvh overflow-hidden select-none" />
  }

  return (
    <main className="w-dvw h-dvh overflow-hidden select-none relative">
      {/* WebGL Fluid GlowCursor Trail */}
      <GlowCursor
        className="pointer-events-none fixed inset-0 z-30"
        color="#67E8F9"
        secondaryColor="#A78BFA"
        trailLength={38}
        trailWidth={7.5}
        trailTaper={0.82}
        followSpeed={0.18}
        glowIntensity={1.85}
        glowSpread={1.2}
        hotspot={0.65}
        brightness={1.2}
        opacity={0.88}
        idleFade={true}
        idleTimeout={650}
        fadeDuration={800}
      />

      <Navbar />

      {/* Boundary container to prevent windows from going above navbar */}
      <div id="desktop-bounds" className="absolute top-11 left-0 right-0 bottom-0 pointer-events-none" />

      {/* macOS Top-Right Cookie Consent Notification */}
      <CookieNotification />

      <Welcome />
      <Dock />

      {/* Windows */}
      <Finder />
      <Safari />
      <Photos />
      <Contact />
      <Terminal />
      <Resume />
      <TxtFile />
      <ImgFile />
      <PdfViewer />
      <Notes />
      <Translate />
    </main>
  )
}
