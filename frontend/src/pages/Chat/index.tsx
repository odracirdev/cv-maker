/* eslint-disable react/react-in-jsx-scope */

import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AuroraBackground } from '@/components/ui/aurora-background'
import ChatBox from '../../components/ChatBox'
import ChatBubble from '../../components/ChatBubble'
import useChat from '../../contexts/chat'
import useSpeechRecognition from '../../contexts/speech-recognition'
import './index.css'

export default function Chat() {
  const initSpeechRecognition = useSpeechRecognition((state) => state.init)
  const messages = useChat((state) => state.messages)

  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    initSpeechRecognition()
  }, [])

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    })
  }, [messages.length])

  return (
    <>
      <AuroraBackground
        className="absolute w-full h-screen top-0 left-0 opacity-80 pointer-events-none"
        pause={true}
      />

      <div className="h-screen w-screen overflow-hidden grid grid-cols-2 divide-x divide-neutral-700">
        <section>
          <div>
            <section className="py-7 px-9 border-b border-neutral-700">
              <Link
                to="/"
                className="text-neutral-400 flex items-center gap-4 hover:text-white transition-colors"
              >
                <span>
                  <svg width={32} height={32} fill="none">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M25.3 16H6.7M16 25.3 6.7 16 16 6.7"
                    />
                  </svg>
                </span>
                <p>Salir</p>
              </Link>
            </section>

            <div className="p-6 pt-0 chat-container">
              <div className="space-y-4 overflow-x-hidden" ref={chatRef}>
                {messages.map(({ role, content: { text } }, index) => (
                  <ChatBubble
                    key={`msg-${role}-${index}`}
                    text={text}
                    alignment={role === 'assistant' ? 'left' : 'right'}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center px-6 py-4">
            <ChatBox />
          </div>
        </section>

        <section>
          <p>CV</p>
        </section>
      </div>
    </>
  )
}
