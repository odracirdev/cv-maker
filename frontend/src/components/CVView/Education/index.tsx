/* eslint-disable react/react-in-jsx-scope */

import Institute from './Institute'

export default function Education() {
  return (
    <section className="space-y-3">
      <p className="font-semibold text-xl border-b border-white pb-3">
        Educación
      </p>
      <Institute />
      <Institute />
    </section>
  )
}
