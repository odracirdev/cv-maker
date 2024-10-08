/* eslint-disable react/react-in-jsx-scope */

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import './index.css'

export default function Repository() {
  return (
    <article className="pt-16 lg:pb-32 space-y-24 relative lg:responsive">
      <h2 className="text-[2.5rem] leading-[normal] font-bold bg-gradient-to-r from-white to-[#949494] bg-clip-text text-transparent lg:max-w-[906px] mx-auto text-center">
        Lorem ipsum dolor sit amet consectetur. Quis orci molestie sed lacus
        mauris tellus.
      </h2>
      <div className="space-y-12">
        <div className="gap-8 flex flex-col lg:grid lg:grid-cols-[2fr_1fr] lg:gap-12">
          <section className="bg-neutral-900 flex-col lg:py-12 lg:px-9 rounded-[8px] flex lg:items-center lg:justify-between border border-neutral-800 py-8 items-center">
            <div className="space-y-6 text-center py-6">
              <h3 className="text-4xl bg-gradient-to-r from-white to-[#949494] bg-clip-text text-transparent font-bold">
                Participa por CV maker
              </h3>
              <a
                href="#"
                className={cn(
                  'w-[90%] md:w-[30%] flex gap-1.5 !rounded-[8px] hover:!bg-neutral-800 transition-colors',
                  buttonVariants({ variant: 'outline' })
                )}
              >
                <span>
                  <svg fill="none" viewBox="0 0 24 24" width={24}>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 19.5c-4.3 1.4-4.3-2.5-6-3m12 5V18c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6 0-1.2-.5-2.3-1.3-3.2.4-1 .4-2.2-.1-3.2 0 0-1.1-.3-3.5 1.3-2-.5-4.2-.5-6.2 0-2.4-1.6-3.5-1.3-3.5-1.3-.5 1-.5 2.2-.1 3.2-.8.9-1.3 2-1.3 3.2 0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2v3.5"
                    />
                  </svg>
                </span>
                <span>GitHub</span>
              </a>
            </div>
            <div className="bg-black flex rounded-[8px] w-[278px] h-[175px] lg:w-[352px] lg:h-[222px]"></div>
          </section>
          <section className="bg-neutral-900 py-12 px-9 rounded-[8px] border border-neutral-800 space-y-6">
            <h3 className="text-4xl bg-gradient-to-r from-white to-[#949494] bg-clip-text text-transparent font-bold">
              Accede a nuestra comunidad de discord
            </h3>
            <a
              href="#"
              className={cn(
                'w-[90%] md:w-fit flex gap-1.5 !rounded-[8px] hover:!bg-neutral-800 transition-colors',
                buttonVariants({ variant: 'outline' })
              )}
            >
              <span>
                <svg width={24} viewBox="0 0 14 14">
                  <g fill="none" stroke="currentColor">
                    <path d="M4.112 6.5a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0m4.5 0a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M.858 9.864c0-2.401.858-5.574 1.715-6.861c0 0 .858-.429 4.289-.429c3.43 0 4.288.43 4.288.43c.858 1.286 1.716 4.459 1.716 6.86c-.286.43-1.287 1.373-3.002 1.716l-1.51-1.886a6.586 6.586 0 0 1-2.985 0L3.86 11.58c-1.715-.343-2.716-1.287-3.002-1.716"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.86 9.007c.261.261.81.523 1.509.687a6.586 6.586 0 0 0 2.986 0c.699-.164 1.247-.426 1.509-.687"
                    />
                  </g>
                </svg>
              </span>
              <span>Discord</span>
            </a>
          </section>
        </div>
        <div className="bg-neutral-900 py-12 px-9 md:px-5 rounded-[8px] border border-neutral-800 lg:grid lg:grid-cols-2 items-center">
          <div className="lg:space-y-6 text-center py-4">
            <h3 className="pb-4 text-4xl bg-gradient-to-r from-white to-[#949494] bg-clip-text text-transparent font-bold">
              Sobre CV Maker
            </h3>
            <p className="text-neutral-400 text-center">
              Lorem ipsum dolor sit amet consectetur. Rhoncus pretium amet
              sodales ut egestas. Mattis sem faucibus orci lorem sagittis velit
              cursus tempor. Odio aenean amet sed cursus enim at nullam nunc
              volutpat. Pellentesque orci enim cursus elit auctor orci malesuada
              tortor. Nibh magna faucibus tellus nulla morbi sodales risus.
              Fames mus id aliquet ut aliquam.
            </p>
          </div>
          <div className="bg-black rounded-[8px] lg:w-[485px] lg:h-[318px] mx-auto w-[278px] h-[182px] lg:w-"></div>
        </div>
      </div>
    </article>
  )
}
