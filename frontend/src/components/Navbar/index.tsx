/* eslint-disable react/react-in-jsx-scope */

import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="container mx-auto px-4 flex justify-between py-11">
      <Link
        className="font-bold text-2xl hover:text-blue-500 transition-colors"
        to="/"
      >
        CV Maker
      </Link>
      <Link
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        to="/app"
      >
        Inicia ahora
      </Link>
    </nav>
  )
}
