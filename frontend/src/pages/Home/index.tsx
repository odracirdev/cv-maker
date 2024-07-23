import React from 'react'
import Contributors from './components/Contributors'
import Features from './components/Features'
import Header from './components/Header'
import Repository from './components/Repository'

const Home: React.FC = () => {
  return (
    <main className="container mx-auto px-4">
      <Header />
      <Features />
      <Repository />
      <Contributors />
    </main>
  )
}

export default Home
