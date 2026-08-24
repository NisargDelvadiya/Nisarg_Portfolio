'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('#components').then((mod) => mod.Navbar), { ssr: false })
const Welcome = dynamic(() => import('#components').then((mod) => mod.Welcome), { ssr: false })
const Dock = dynamic(() => import('#components').then((mod) => mod.Dock), { ssr: false })
const Finder = dynamic(() => import('#windows').then((mod) => mod.Finder), { ssr: false })
const Safari = dynamic(() => import('#windows').then((mod) => mod.Safari), { ssr: false })
const Photos = dynamic(() => import('#windows').then((mod) => mod.Photos), { ssr: false })
const Contact = dynamic(() => import('#windows').then((mod) => mod.Contact), { ssr: false })
const Terminal = dynamic(() => import('#windows').then((mod) => mod.Terminal), { ssr: false })
const Resume = dynamic(() => import('#windows').then((mod) => mod.Resume), { ssr: false })
const TxtFile = dynamic(() => import('#windows').then((mod) => mod.TxtFile), { ssr: false })
const ImgFile = dynamic(() => import('#windows').then((mod) => mod.ImgFile), { ssr: false })

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
      <Navbar />

      {/* Boundary container to prevent windows from going above navbar */}
      <div id="desktop-bounds" className="absolute top-16 md:top-11 left-0 right-0 bottom-0 pointer-events-none" />

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
    </main>
  )
}
