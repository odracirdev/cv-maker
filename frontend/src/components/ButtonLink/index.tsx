/* eslint-disable react/react-in-jsx-scope, react/prop-types */

import { Link } from 'react-router-dom'

export default function ButtonLink({ text, href }) {
  return (
    <Link
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors inline-block"
      to={href}
    >
      {text}
    </Link>
  )
}
