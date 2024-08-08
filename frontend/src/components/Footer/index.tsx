/* eslint-disable react/react-in-jsx-scope */

import { Link } from 'react-router-dom'
import Logo from '../Logo'

export default function Footer() {
  return (
    <footer className="lg:py-6 py-4 border-t border-neutral-800">
      <div className="container lg:mx-auto flex max-[800px]:flex-col items-center justify-between">
        <Link
          className="pb-4 font-bold text-2xl hover:text-blue-500 transition-colors"
          to={import.meta.env.PROD === true ? '/cv-maker' : '/'}
        >
          <Logo />
        </Link>
        <div className="flex gap-4">
          <span>
            <svg fill="none" viewBox="0 0 24 24" width={32}>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12.5a9 9 0 1 0 18 0 9 9 0 0 0-18 0ZM3.6 9.5h16.8M3.6 15.5h16.8"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.5 3.5a17 17 0 0 0 0 18M12.5 3.5a17 17 0 0 1 0 18"
              />
            </svg>
          </span>
          <span>
            <svg fill="none" viewBox="0 0 24 24" width={32}>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 19.5c-4.3 1.4-4.3-2.5-6-3m12 5V18c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6 0-1.2-.5-2.3-1.3-3.2.4-1 .4-2.2-.1-3.2 0 0-1.1-.3-3.5 1.3-2-.5-4.2-.5-6.2 0-2.4-1.6-3.5-1.3-3.5-1.3-.5 1-.5 2.2-.1 3.2-.8.9-1.3 2-1.3 3.2 0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2v3.5"
              />
            </svg>
          </span>
          <span>
            <svg fill="none" viewBox="0 0 24 24" width={32}>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-12ZM8 11.5v5M8 8.5v0M12 16.5v-5"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 16.5v-3a2 2 0 0 0-4 0"
              />
            </svg>
          </span>
        </div>
      </div>
    </footer>
  )
}
