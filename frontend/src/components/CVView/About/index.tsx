/* eslint-disable react/react-in-jsx-scope */

export default function About() {
  return (
    <section className="space-y-4">
      <p className="text-center font-bold text-2xl">Nombre de Usuario</p>
      <div className="flex gap-4 justify-center border-b border-white pb-3">
        <p>Ciudad, Pais</p>
        <span>•</span>
        <a href="#">linkedin.com/in/usuario</a>
        <span>•</span>
        <a href="tel:+56900000000">+56.9.00000000</a>
        <span>•</span>
        <a href="mailto:loremipsum@gmail.com">loremipsum@gmail.com</a>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur. Quam amet ut egestas aenean in
        magna. Eu commodo pharetra cras interdum enim dignissim suscipit. Nunc
        viverra enim purus ipsum mattis ultrices lectus feugiat viverra. Non
        donec eu senectus nulla blandit tristique eu imperdiet vestibulum.
      </p>
    </section>
  )
}
