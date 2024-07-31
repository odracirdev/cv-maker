/* eslint-disable react/react-in-jsx-scope */

import { Link, NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import ButtonLink from '../ButtonLink'
import './styles.css'

export default function Navbar() {
  return (
    <>
      <header className="w-full md:w-fit flex items-center justify-between gap-6 px-6 py-6 md:py-3 md:mx-auto md:rounded-[8px] bg-black/40 md:bg-black/75 md:border md:border-[#404040] sticky top-0 md:top-5 backdrop-blur-md z-10">
        <Link to="/">
          <svg fill="none" viewBox="0 0 140 24" width={100}>
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M7.3 0a12.6 12.6 0 1 0 12.4 21.8L7.3 0Z"
              clipRule="evenodd"
            />
            <path
              fill="currentColor"
              d="M26 21c-.6.9-2 .9-2.5 0L12.6 2.1c-.5-1 .2-2.2 1.3-2.2h21.6c1.2 0 1.9 1.2 1.3 2.2L26 20.9ZM129.8 23.6V6.2h4v3h.2a4.3 4.3 0 0 1 4.3-3.2 9.5 9.5 0 0 1 1.4 0V10l-.8-.2h-1c-.8 0-1.5 0-2 .4a3.6 3.6 0 0 0-2 3.3v10.2h-4.1ZM118.6 24a9 9 0 0 1-4.6-1.1 7.4 7.4 0 0 1-2.9-3.1c-.7-1.4-1-3-1-4.8 0-1.8.3-3.3 1-4.7a7.7 7.7 0 0 1 7.3-4.3c1 0 2 .2 3 .5 1 .4 1.8.9 2.5 1.6.8.7 1.4 1.6 1.8 2.7.4 1.2.6 2.5.6 4v1.3H112v-2.8h10.4c0-.8-.2-1.5-.5-2.1-.4-.6-.8-1.1-1.4-1.5a4 4 0 0 0-2-.5 4 4 0 0 0-2.3.6c-.6.4-1.1 1-1.5 1.6-.3.6-.5 1.4-.5 2.1V16c0 1 .2 1.8.5 2.6a4 4 0 0 0 1.6 1.6 5 5 0 0 0 4 .3 3.2 3.2 0 0 0 2-2l3.9.5a6 6 0 0 1-1.4 2.6c-.7.8-1.6 1.4-2.6 1.8-1 .4-2.3.6-3.6.6ZM97.1 18.2v-5h.7l6.2-7h4.8l-7.7 8.6h-.8L97 18.2Zm-3.7 5.4V.4h4v23.2h-4Zm11 0-5.8-7.9 2.8-2.9 7.8 10.8h-4.9ZM80 24c-1 0-2-.2-3-.6-.8-.4-1.5-1-2-1.8-.5-.7-.8-1.7-.8-2.8 0-1 .2-1.8.6-2.5.3-.6.8-1.1 1.4-1.5.7-.4 1.4-.7 2.2-.9.8-.2 1.6-.4 2.4-.4a97.4 97.4 0 0 0 3.9-.7c.3-.2.4-.5.4-1 0-.8-.2-1.5-.7-2-.5-.4-1.3-.7-2.2-.7a4 4 0 0 0-2.4.7c-.6.4-1 1-1.2 1.5l-3.8-.5a6.1 6.1 0 0 1 4-4.3 10.9 10.9 0 0 1 5.8-.2 7 7 0 0 1 2.4 1c.6.4 1.2 1 1.6 1.8.4.8.6 1.7.6 2.9v11.6h-3.9v-2.3h-.1a5 5 0 0 1-2.8 2.3c-.7.3-1.4.4-2.4.4Zm1.1-3c.8 0 1.6-.2 2.2-.5.6-.3 1-.8 1.4-1.3.3-.6.5-1.2.5-1.8v-2a2 2 0 0 1-.7.2l-1 .3a31.5 31.5 0 0 1-2.1.3c-.6 0-1.2.2-1.7.4l-1.1.8a2 2 0 0 0-.4 1.3c0 .7.3 1.3.8 1.7.6.4 1.3.6 2.1.6ZM46.3.4h5.1l6.9 16.8h.3L65.5.4h5.1v23.2h-4v-16h-.2l-6.4 16h-3l-6.5-16h-.2v16h-4V.4Z"
            />
          </svg>
        </Link>

        <nav className="md:flex md:gap-2 md:items-center hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn([
                'p-2',
                {
                  active: isActive,
                  'text-neutral-500 hover:text-white transition-colors':
                    !isActive
                }
              ])
            }
          >
            Inicio
          </NavLink>
          <span>•</span>
          <NavLink
            to="/cv-maker"
            className={({ isActive }) =>
              cn([
                'p-2',
                {
                  active: isActive,
                  'text-neutral-500 hover:text-white transition-colors':
                    !isActive
                }
              ])
            }
          >
            Sobre CV Maker
          </NavLink>
        </nav>

        <div className="space-x-2 hidden md:block">
          <ButtonLink className="text-center" href="#" text="Discord" />
          <ButtonLink
            className="text-center"
            href="/chat"
            text="Iniciar ahora"
          />
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="active:text-neutral-500 transition-colors p-0 md:hidden"
              variant="ghost"
            >
              <svg width={26} viewBox="0 0 16 16">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
                ></path>
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-neutral-900 border-none flex flex-col gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn([
                  'p-2',
                  {
                    active: isActive,
                    'text-neutral-500 hover:text-white transition-colors':
                      !isActive
                  }
                ])
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/cv-maker"
              className={({ isActive }) =>
                cn([
                  'p-2',
                  {
                    active: isActive,
                    'text-neutral-500 hover:text-white transition-colors':
                      !isActive
                  }
                ])
              }
            >
              Sobre CV Maker
            </NavLink>
            <ButtonLink className="text-center" href="#" text="Discord" />
            <ButtonLink
              className="text-center"
              href="/chat"
              text="Iniciar ahora"
            />
          </SheetContent>
        </Sheet>
      </header>
    </>
  )
}
