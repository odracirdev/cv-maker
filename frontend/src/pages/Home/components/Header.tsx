/* eslint-disable react/react-in-jsx-scope */

import ButtonLink from '@/components/ButtonLink'

export default function Header() {
  return (
    <div className="grid grid-cols-2 items-center gap-16 py-16">
      <section className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-7xl font-bold">
            <span className="text-blue-500">CV&nbsp;</span>
            Maker
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            impedit necessitatibus! Sed culpa tempora neque amet, praesentium
            vero molestias nulla ipsum facere sequi rerum, illo nostrum
            mollitia! Illo, dolorum nam!
          </p>
        </div>
        <ButtonLink href="/app" text="¡Crea tu CV gratis!" />
      </section>
      <section>
        <img className="rounded mx-auto" src="/img/cv.jpg" alt="CV" />
      </section>
    </div>
  )
}
