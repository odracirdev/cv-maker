import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div>
      <Link
        to="/chat"
        className="relative top-40 bg-black rounded-full text-white font-semibold p-4"
      >
        Go to chat
      </Link>
    </div>
  )
}

export default Home
