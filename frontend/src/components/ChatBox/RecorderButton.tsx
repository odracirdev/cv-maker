import { Mic, Square } from 'lucide-react'
import React from 'react'
import useSpeechRecognition from '../../contexts/speech-recognition'

const RecorderButton: React.FC = () => {
  const startListening = useSpeechRecognition((state) => state.startListening)
  const stopListening = useSpeechRecognition((state) => state.stopListening)
  const isListening = useSpeechRecognition((state) => state.isListening)

  return (
    <button
      type="button"
      onClick={isListening ? stopListening : startListening}
      className={`py-2 px-4 rounded-full ${isListening ? 'bg-red-500' : 'bg-black'} text-white border-white`}
    >
      {isListening ? <Square /> : <Mic />}
    </button>
  )
}

export default RecorderButton
