/* eslint-disable react/react-in-jsx-scope */

import { Link } from 'react-router-dom'
import ButtonLink from '../ButtonLink'

export default function Navbar() {
  return (
    <nav className="sticky top-0 py-6">
      <div className="container mx-auto px-4 flex justify-between">
        <Link
          className="font-bold text-2xl hover:text-blue-500 transition-colors"
          to="/"
        >
          CV Maker
        </Link>
        <ButtonLink href="/app" text="Inicia Ahora" />
      </div>
    </nav>
  )
}
