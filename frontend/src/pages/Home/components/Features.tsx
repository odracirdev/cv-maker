/* eslint-disable react/react-in-jsx-scope */

export default function Features() {
  return (
    <article className="py-16 space-y-24">
      <h2 className="text-5xl text-center font-bold">Características</h2>
      <div className="grid grid-cols-2 gap-y-16 gap-x-8 items-center">
        <section className="space-y-4">
          <h3 className="text-4xl font-bold">Plantillas</h3>
          <p>
            Una variedad de plantillas de currículum prediseñadas y
            personalizables que se adaptan a diferentes sectores, funciones y
            preferencias de diseño.
          </p>
        </section>
        <div>
          <svg
            className="text-blue-500"
            fill="none"
            viewBox="0 0 360 176"
            width={450}
          >
            <path
              fill="currentColor"
              fillOpacity=".9"
              d="m174.1 104 1.4.5-1.4-.6Zm171.5 71c.5.6 1.4.8 2.1.3l11.3-7.8c.6-.5.8-1.4.4-2-.5-.7-1.5-.9-2.1-.4l-10 6.9-6.9-9.7c-.5-.7-1.4-.8-2-.3-.8.4-1 1.4-.5 2l7.7 11ZM1.4 33.7 2 35a64.5 64.5 0 0 1 2.7-1A413.1 413.1 0 0 1 39 21.4a354 354 0 0 1 76-17c26-2.2 49.2 1.2 61.5 15.4 12.2 14.1 14.3 39.7-3.8 83.5l2.8 1c18.1-44 16.7-71 3.3-86.5-13.3-15.3-37.9-18.6-64-16.3a357 357 0 0 0-76.7 17A538.7 538.7 0 0 0 .9 32.5l.5 1.4Zm171.3 69.6a219 219 0 0 0-9.4 26.6c-1.8 6.9-2.3 12-1.7 15.5.4 1.8 1 3.3 2.2 4.4a6.6 6.6 0 0 0 4.1 1.8c3 .3 7-1 11.3-3 8.8-4.3 20.5-12.6 33.6-22.3 13.2-9.8 27.9-21 42.7-31.4a267.5 267.5 0 0 1 43-25.5c13.6-6 25.5-8.3 34.5-5.2 8.9 3.1 15.5 11.8 18.2 29.2 2.7 17.5 1.2 43.4-5.8 80.3l3 .5c7-37 8.5-63.3 5.8-81.3s-9.8-27.8-20.1-31.5c-10.2-3.5-23-.8-36.7 5.2-13.8 6-28.8 15.6-43.7 26C239 103 224.1 114.2 211 124a243.1 243.1 0 0 1-33 22c-4.3 2-7.6 3-9.7 2.7-1 0-1.8-.4-2.4-1-.5-.5-1-1.4-1.3-2.8-.5-2.9-.1-7.4 1.6-14.2 1.8-6.7 4.8-15.3 9.3-26.2l-2.8-1.1Z"
            />
          </svg>
        </div>
        <div>
          <img src="/img/cv-template.jpg" alt="Plantilla de CV" />
        </div>
        <section className="space-y-4">
          <h3 className="text-4xl font-bold">Carta de presentación gratuita</h3>
          <p>
            Con cada una de nuestras plantillas de currículum profesionalmente
            diseñadas, recibirás GRATIS una plantilla de carta de presentación
            perfectamente adaptada al estilo de currículum que hayas elegido.
            Nuestras plantillas de cartas de presentación están diseñadas para
            ayudarte:
          </p>
        </section>
        <section className="space-y-4">
          <h3 className="text-4xl font-bold">Opciones de personalización</h3>
          <p>
            Posibilidad de personalizar las plantillas cambiando colores,
            diseños y añadiendo elementos de marca personal, función de
            arrastrar y soltar para reorganizar secciones y bloques de
            contenido.
          </p>
        </section>
        <div>
          <svg
            className="text-blue-500 -translate-y-24 translate-x-12"
            fill="none"
            viewBox="0 0 345 250"
            height={300}
          >
            <path
              fill="currentColor"
              fillOpacity=".9"
              d="M.9 227.2c-.7.4-1 1.3-.5 2l7.3 11.3c.5.7 1.4 1 2.1.5.7-.4 1-1.3.5-2l-6.5-10.1 10.3-6.2c.8-.4 1-1.3.5-2-.4-.7-1.4-.9-2-.5l-11.7 7ZM341.9.8c-16.5 112.4-41.8 182.6-92.5 218C198.7 254 122.2 254.7 2 227l-.7 2.8c120.1 28 198 27.5 249.8-8.7C303 185 328.4 113.6 345 1.2l-3-.4Z"
            />
          </svg>
        </div>
      </div>
    </article>
  )
}
