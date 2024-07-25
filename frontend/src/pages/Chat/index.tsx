/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useRef } from 'react'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import './index.css'
import ChatBox from '../../components/ChatBox'
import ChatBubble from '../../components/ChatBubble'
import useChat from '../../contexts/chat'
import useSpeechRecognition from '../../contexts/speech-recognition'

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
      >
        <div />
      </AuroraBackground>
      <div className="h-screen w-screen overflow-hidden">
        <section className="w-1/2 max-h-screen bg-zinc-950 flex flex-col justify-between overflow-hidden">
          <div>
            <div className="space-y-1.5 p-6 flex flex-row items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none text-white">
                    Elena Banana
                  </p>
                  <p className="text-sm text-gray-400">m@example.com</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="text-white flex items-center justify-center whitespace-nowrap rounded-full h-10 w-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"
                  />
                </svg>
              </Button>
            </div>

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
      </div>
    </>
  )
}
