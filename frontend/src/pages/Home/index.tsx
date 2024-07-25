import React from 'react'
import Contributors from './components/Contributors'
import Features from './components/Features'
import Footer from '../../components/Footer'
import Header from './components/Header'
import Navbar from '../../components/Navbar'
import Repository from './components/Repository'

const Home: React.FC = () => {
  return (
    <>
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

export default Home
