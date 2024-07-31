/* eslint-disable react/react-in-jsx-scope */

export default function Job() {
  return (
    <>
      <div className="flex justify-between">
        <p className="font-bold text-lg">Nombre de la empresa</p>
        <p className="font-semibold">Ubicación</p>
      </div>
      <div className="flex justify-between">
        <p>Posición</p>
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
