/* eslint-disable react/react-in-jsx-scope */

import './index.css'

export default function Repository() {
  return (
    <article className="repository py-16 space-y-24 text-center relative">
      <div className="max-w-2xl mx-auto">
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">Participa en CV Maker</h2>
            <p>
              Estamos encantados de que puedas colaborar en CV Maker, ¡donde
              comienza su viaje hacia la elaboración de currículos
              excepcionales!
            </p>
          </div>
          <a
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors inline-block"
            href="#"
            rel="noopener noreferrer"
          >
            Repositorio de GitHub
          </a>
        </section>
      </div>
    </article>
  )
}
