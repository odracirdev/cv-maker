/* eslint-disable react/react-in-jsx-scope */

import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-6 border-t border-neutral-800">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          className="font-bold text-2xl hover:text-blue-500 transition-colors"
          to="/"
        >
          <svg fill="none" viewBox="0 0 140 24" width={140}>
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M7.3 0a12.6 12.6 0 1 0 12.4 21.8L7.3 0Z"
              clip-rule="evenodd"
            />
            <path
              fill="currentColor"
              d="M26 21c-.6.9-2 .9-2.5 0L12.6 2.1c-.5-1 .2-2.2 1.3-2.2h21.6c1.2 0 1.9 1.2 1.3 2.2L26 20.9ZM129.8 23.6V6.2h4v3h.2a4.3 4.3 0 0 1 4.3-3.2 9.5 9.5 0 0 1 1.4 0V10l-.8-.2h-1c-.8 0-1.5 0-2 .4a3.6 3.6 0 0 0-2 3.3v10.2h-4.1ZM118.6 24a9 9 0 0 1-4.6-1.1 7.4 7.4 0 0 1-2.9-3.1c-.7-1.4-1-3-1-4.8 0-1.8.3-3.3 1-4.7a7.7 7.7 0 0 1 7.3-4.3c1 0 2 .2 3 .5 1 .4 1.8.9 2.5 1.6.8.7 1.4 1.6 1.8 2.7.4 1.2.6 2.5.6 4v1.3H112v-2.8h10.4c0-.8-.2-1.5-.5-2.1-.4-.6-.8-1.1-1.4-1.5a4 4 0 0 0-2-.5 4 4 0 0 0-2.3.6c-.6.4-1.1 1-1.5 1.6-.3.6-.5 1.4-.5 2.1V16c0 1 .2 1.8.5 2.6a4 4 0 0 0 1.6 1.6 5 5 0 0 0 4 .3 3.2 3.2 0 0 0 2-2l3.9.5a6 6 0 0 1-1.4 2.6c-.7.8-1.6 1.4-2.6 1.8-1 .4-2.3.6-3.6.6ZM97.1 18.2v-5h.7l6.2-7h4.8l-7.7 8.6h-.8L97 18.2Zm-3.7 5.4V.4h4v23.2h-4Zm11 0-5.8-7.9 2.8-2.9 7.8 10.8h-4.9ZM80 24c-1 0-2-.2-3-.6-.8-.4-1.5-1-2-1.8-.5-.7-.8-1.7-.8-2.8 0-1 .2-1.8.6-2.5.3-.6.8-1.1 1.4-1.5.7-.4 1.4-.7 2.2-.9.8-.2 1.6-.4 2.4-.4a97.4 97.4 0 0 0 3.9-.7c.3-.2.4-.5.4-1 0-.8-.2-1.5-.7-2-.5-.4-1.3-.7-2.2-.7a4 4 0 0 0-2.4.7c-.6.4-1 1-1.2 1.5l-3.8-.5a6.1 6.1 0 0 1 4-4.3 10.9 10.9 0 0 1 5.8-.2 7 7 0 0 1 2.4 1c.6.4 1.2 1 1.6 1.8.4.8.6 1.7.6 2.9v11.6h-3.9v-2.3h-.1a5 5 0 0 1-2.8 2.3c-.7.3-1.4.4-2.4.4Zm1.1-3c.8 0 1.6-.2 2.2-.5.6-.3 1-.8 1.4-1.3.3-.6.5-1.2.5-1.8v-2a2 2 0 0 1-.7.2l-1 .3a31.5 31.5 0 0 1-2.1.3c-.6 0-1.2.2-1.7.4l-1.1.8a2 2 0 0 0-.4 1.3c0 .7.3 1.3.8 1.7.6.4 1.3.6 2.1.6ZM46.3.4h5.1l6.9 16.8h.3L65.5.4h5.1v23.2h-4v-16h-.2l-6.4 16h-3l-6.5-16h-.2v16h-4V.4Z"
            />
          </svg>
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
