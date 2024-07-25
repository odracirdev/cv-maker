import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import About from './components/About'
import Features from './components/Features'
import Header from './components/Header'
import Repository from './components/Repository'

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4">
        <Header />
        <Features />
        <Repository />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default Home
