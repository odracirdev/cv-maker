/* eslint-disable react/react-in-jsx-scope */

import './index.css'

export default function About() {
  return (
    <article className="pb-20 pt-32 space-y-[104px]">
      <h2 className="text-[2.5rem] leading-[normal] font-bold bg-gradient-to-r from-white to-[#949494] bg-clip-text text-transparent max-w-[906px] mx-auto text-center">
        Lorem ipsum dolor sit amet consectetur. Quis orci molestie sed lacus
        mauris tellus.
      </h2>
      <section className="grid grid-cols-2 gap-x-[72px] max-w-[920px] mx-auto contributors-container relative">
        <div className="flex gap-[10px] items-center py-6 px-4 border-t border-neutral-800">
          <img className="rounded-[4px]" src="/img/ana.png" alt="Ana" />
          <div className="space-y-2.5">
            <p className="text-xl">
              Ana Rangel <span className="text-neutral-400">UX Designer</span>
            </p>
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg fill="none" viewBox="0 0 24 24" width={28}>
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
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg fill="none" viewBox="0 0 24 24" width={28}>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 19.5c-4.3 1.4-4.3-2.5-6-3m12 5V18c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6 0-1.2-.5-2.3-1.3-3.2.4-1 .4-2.2-.1-3.2 0 0-1.1-.3-3.5 1.3-2-.5-4.2-.5-6.2 0-2.4-1.6-3.5-1.3-3.5-1.3-.5 1-.5 2.2-.1 3.2-.8.9-1.3 2-1.3 3.2 0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2v3.5"
                  />
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg fill="none" viewBox="0 0 24 24" width={28}>
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
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-[10px] items-center py-6 px-4 border-t border-neutral-800">
          <img className="rounded-[4px]" src="/img/ana.png" alt="Ana" />
          <div className="space-y-2.5">
            <p className="text-xl">
              Ana Rangel <span className="text-neutral-400">UX Designer</span>
            </p>
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg fill="none" viewBox="0 0 24 24" width={28}>
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
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg fill="none" viewBox="0 0 24 24" width={28}>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 19.5c-4.3 1.4-4.3-2.5-6-3m12 5V18c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6 0-1.2-.5-2.3-1.3-3.2.4-1 .4-2.2-.1-3.2 0 0-1.1-.3-3.5 1.3-2-.5-4.2-.5-6.2 0-2.4-1.6-3.5-1.3-3.5-1.3-.5 1-.5 2.2-.1 3.2-.8.9-1.3 2-1.3 3.2 0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2v3.5"
                  />
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg fill="none" viewBox="0 0 24 24" width={28}>
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
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-[10px] items-center py-6 px-4 border-y border-neutral-800">
          <img className="rounded-[4px]" src="/img/ana.png" alt="Ana" />
          <div className="space-y-2.5">
            <p className="text-xl">
              Ana Rangel <span className="text-neutral-400">UX Designer</span>
            </p>
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg fill="none" viewBox="0 0 24 24" width={28}>
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
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg fill="none" viewBox="0 0 24 24" width={28}>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 19.5c-4.3 1.4-4.3-2.5-6-3m12 5V18c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6 0-1.2-.5-2.3-1.3-3.2.4-1 .4-2.2-.1-3.2 0 0-1.1-.3-3.5 1.3-2-.5-4.2-.5-6.2 0-2.4-1.6-3.5-1.3-3.5-1.3-.5 1-.5 2.2-.1 3.2-.8.9-1.3 2-1.3 3.2 0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2v3.5"
                  />
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg fill="none" viewBox="0 0 24 24" width={28}>
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
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-[10px] items-center py-6 px-4 border-y border-neutral-800">
          <img className="rounded-[4px]" src="/img/ana.png" alt="Ana" />
          <div className="space-y-2.5">
            <p className="text-xl">
              Ana Rangel <span className="text-neutral-400">UX Designer</span>
            </p>
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg fill="none" viewBox="0 0 24 24" width={28}>
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
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg fill="none" viewBox="0 0 24 24" width={28}>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 19.5c-4.3 1.4-4.3-2.5-6-3m12 5V18c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6 0-1.2-.5-2.3-1.3-3.2.4-1 .4-2.2-.1-3.2 0 0-1.1-.3-3.5 1.3-2-.5-4.2-.5-6.2 0-2.4-1.6-3.5-1.3-3.5-1.3-.5 1-.5 2.2-.1 3.2-.8.9-1.3 2-1.3 3.2 0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2v3.5"
                  />
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg fill="none" viewBox="0 0 24 24" width={28}>
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
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-[10px] items-center py-6 px-4">
          <img className="rounded-[4px]" src="/img/ana.png" alt="Ana" />
          <div className="space-y-2.5">
            <p className="text-xl">
              Ana Rangel <span className="text-neutral-400">UX Designer</span>
            </p>
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg fill="none" viewBox="0 0 24 24" width={28}>
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
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg fill="none" viewBox="0 0 24 24" width={28}>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 19.5c-4.3 1.4-4.3-2.5-6-3m12 5V18c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6 0-1.2-.5-2.3-1.3-3.2.4-1 .4-2.2-.1-3.2 0 0-1.1-.3-3.5 1.3-2-.5-4.2-.5-6.2 0-2.4-1.6-3.5-1.3-3.5-1.3-.5 1-.5 2.2-.1 3.2-.8.9-1.3 2-1.3 3.2 0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2v3.5"
                  />
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg fill="none" viewBox="0 0 24 24" width={28}>
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
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-[10px] items-center py-6 px-4">
          <img className="rounded-[4px]" src="/img/ana.png" alt="Ana" />
          <div className="space-y-2.5">
            <p className="text-xl">
              Ana Rangel <span className="text-neutral-400">UX Designer</span>
            </p>
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg fill="none" viewBox="0 0 24 24" width={28}>
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
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg fill="none" viewBox="0 0 24 24" width={28}>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 19.5c-4.3 1.4-4.3-2.5-6-3m12 5V18c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6 0-1.2-.5-2.3-1.3-3.2.4-1 .4-2.2-.1-3.2 0 0-1.1-.3-3.5 1.3-2-.5-4.2-.5-6.2 0-2.4-1.6-3.5-1.3-3.5-1.3-.5 1-.5 2.2-.1 3.2-.8.9-1.3 2-1.3 3.2 0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2v3.5"
                  />
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg fill="none" viewBox="0 0 24 24" width={28}>
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
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-[10px] items-center py-6 px-4 border-y border-neutral-800">
          <img className="rounded-[4px]" src="/img/ana.png" alt="Ana" />
          <div className="space-y-2.5">
            <p className="text-xl">
              Ana Rangel <span className="text-neutral-400">UX Designer</span>
            </p>
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg fill="none" viewBox="0 0 24 24" width={28}>
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
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg fill="none" viewBox="0 0 24 24" width={28}>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 19.5c-4.3 1.4-4.3-2.5-6-3m12 5V18c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6 0-1.2-.5-2.3-1.3-3.2.4-1 .4-2.2-.1-3.2 0 0-1.1-.3-3.5 1.3-2-.5-4.2-.5-6.2 0-2.4-1.6-3.5-1.3-3.5-1.3-.5 1-.5 2.2-.1 3.2-.8.9-1.3 2-1.3 3.2 0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2v3.5"
                  />
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg fill="none" viewBox="0 0 24 24" width={28}>
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
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-[10px] items-center py-6 px-4 border-y border-neutral-800">
          <p className="flex items-center gap-2 text-xl font-medium">
            <span className="bg-gradient-to-r from-white to-[#949494] bg-clip-text text-transparent">
              Hecho con
            </span>
            <img
              width={24}
              src="/img/emoji-heart-fire.webp"
              alt="Emoji Heart Fire"
            />
            <span className="bg-gradient-to-r from-white to-[#949494] bg-clip-text text-transparent">
              por la comunidad
            </span>
          </p>
        </div>
      </section>
    </article>
  )
}
