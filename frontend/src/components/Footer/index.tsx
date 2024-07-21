/* eslint-disable react/react-in-jsx-scope */

import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-16 border-t border-neutral-800">
      <div className="container mx-auto px-3 text-center">
        <Link
          className="font-bold text-2xl hover:text-blue-500 transition-colors"
          to="/"
        >
          CV Maker
        </Link>
      </div>
    </footer>
  )
}
