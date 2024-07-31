/* eslint-disable react/react-in-jsx-scope */

import About from './About'
import Education from './Education'
import Experience from './Experience'

export default function CVView() {
  return (
    <div className="bg-stone-900 border border-neutral-800 p-6 rounded-[8px] space-y-12">
      <About />
      <Experience />
      <Education />
    </div>
  )
}
