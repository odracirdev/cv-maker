/* eslint-disable react/react-in-jsx-scope */

export default function Institute() {
  return (
    <>
      <div className="flex justify-between">
        <p className="font-bold text-lg">Nombre de la institución</p>
        <p className="font-semibold">Ubicación</p>
      </div>
      <div className="flex justify-between">
        <p>Carrera</p>
        <p>
          <span>Desde</span> — <span>Hasta</span>
        </p>
      </div>
      <ul className="list-disc list-inside space-y-2">
        <li>
          Lorem ipsum dolor sit amet consectetur. Quam amet ut egestas aenean in
          magna. Eu commodo pharetra cras interdum enim dignissim suscipit.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur. Quam amet ut egestas aenean in
          magna. Eu commodo pharetra cras interdum enim dignissim suscipit.{' '}
        </li>
      </ul>
    </>
  )
}
