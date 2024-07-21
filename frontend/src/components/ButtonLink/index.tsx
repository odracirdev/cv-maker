;
/* eslint-disable react/react-in-jsx-scope, react/prop-types */

import { Link } from 'react-router-dom'

interface ButtonLinkProps {
  text: string
  href: string
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ text, href }) => {
  return (
    <Link
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors inline-block"
      to={href}
    >
      {text}
    </Link>
  )
}

export default ButtonLink
