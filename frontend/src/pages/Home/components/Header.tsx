/* eslint-disable react/react-in-jsx-scope */

import ButtonLink from '@/components/ButtonLink'

export default function Header() {
  return (
    <div className="relative">
      <div className="pt-36 pb-8 text-center lg:pt-72 lg:pb-[22.1875rem] space-y-12">
        <div className="space-y-9">
          <h1 className="text-4xl lg:text-[5.375rem] font-bold lg:max-w-[777px] mx-auto leading-[normal]">
            Background lights are cool you know.
          </h1>
          <p className="text-4xl">And this, is chemical burn.</p>
        </div>
        <ButtonLink
          href="/chat"
          text="Ir a la demo"
          className="w-full lg:w-fit"
        />
      </div>
    </div>
  )
}
