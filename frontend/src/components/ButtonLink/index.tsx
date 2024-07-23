/* eslint-disable react/react-in-jsx-scope, react/prop-types */

import { Link } from 'react-router-dom'

interface ButtonLinkProps {
  text: string
  href: string
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ text, href }) => {
  return (
    <Link
      className="bg-white text-black py-2 px-4 rounded-[0.375rem] font-medium inline-block"
      to={href}
    >
      {text}
    </Link>
  )
}

export default ButtonLink
