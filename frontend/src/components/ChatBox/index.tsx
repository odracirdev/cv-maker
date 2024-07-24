/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useMemo, useState, type FormEvent } from 'react'
import useChat from '../../contexts/chat'
import useSpeechRecognition from '../../contexts/speech-recognition'
import RecorderButton from './RecorderButton'
import SenderButton from './SenderButton'

type ChatMode = 'text' | 'audio'

const ChatBox = () => {
  const [loading, setLoading] = useState(false)
  const [inputText, setInputText] = useState('')
  const initialMode = useMemo<ChatMode>(
    () => (inputText ? 'text' : 'audio'),
    [inputText]
  )
  const sendMessage = useChat((state) => state.appendTextMessage)

  const recognitionText = useSpeechRecognition((state) => state.text)
  const hasRecognitionSupport = useSpeechRecognition(
    (state) => state.hasRecognitionSupport
  )

  const showRecorder = useMemo(
    () => hasRecognitionSupport && initialMode === 'audio',
    [hasRecognitionSupport, initialMode]
  )

  useEffect(() => {
    if (recognitionText) {
      setInputText(recognitionText)
    }
  }, [recognitionText])

  const askToAPI = async (prompt: string) => {
    const res = await fetch(`http://localhost:3000/ai/ask`, {
      method: 'POST',
      body: JSON.stringify({
        prompt
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    return data.response
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    sendMessage(inputText, 'user')
    setInputText('')

    setLoading(true)
    askToAPI(inputText)
      .then((res) => sendMessage(res, 'assistant'))
      .finally(() => setLoading(false))
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full items-center space-x-2"
    >
      <div className="flex flex-row w-full">
        <input
          className="flex h-10 w-full rounded-xl border px-3 py-2 text-sm file:border-0 text-white file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 flex-1 bg-transparent"
          id="message"
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
          maxLength={1000}
          disabled={loading}
        />
        {showRecorder ? (
          <RecorderButton />
        ) : (
          <SenderButton disabled={!inputText} />
        )}
      </div>
    </form>
  )
}

export default ChatBox
