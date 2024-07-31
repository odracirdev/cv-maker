import React from 'react'
import './style.css'

const Loader: React.FC = () => {
  return (
    <section id="loader" className="dots-container">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </section>
  )
}

export default Loader
