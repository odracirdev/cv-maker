import { Send } from 'lucide-react'
import React from 'react'

type SenderButtonProps = {
  /** Indica si el botón esta desactivado o no. Por defecto es `false`. */
  disabled?: boolean
}

const SenderButton: React.FC<SenderButtonProps> = ({ disabled = false }) => {
  const handleSend = () => {
    // Lógica para enviar texto
    console.log('Texto enviado')
  }

  return (
    <button
      disabled={disabled}
      onClick={handleSend}
      className="bg-black text-white py-2 px-4 hover:text-slate-700 disabled:text-slate-900"
    >
      <Send />
    </button>
  )
}

export default SenderButton
