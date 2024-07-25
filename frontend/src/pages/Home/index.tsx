/* eslint-disable react/react-in-jsx-scope */

import { AuroraBackground } from '@/components/ui/aurora-background'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Contributors from './components/Contributors'
import Features from './components/Features'
import Header from './components/Header'
import Repository from './components/Repository'

export default function Home() {
  return (
    <>
      <AuroraBackground className="absolute w-full h-screen top-0 left-0 opacity-80" />

      <Navbar />

      <main className="container mx-auto px-4">
        <Header />
        <Features />
        <Repository />
        <Contributors />
      </main>

      <Footer />
    </>
  )
}
