/* eslint-disable react/react-in-jsx-scope */
import type { FC } from 'react'
import { cn } from '../../lib/utils'

type ChatBubbleProps = { text: string; alignment?: 'left' | 'right' }

const ChatBubble: FC<ChatBubbleProps> = ({ alignment = 'left', text }) => {
  return (
    <div
      className={cn(
        'flex w-max max-w-[75%] flex-col gap-2 px-3 py-2 text-sm rounded-xl break-words text-pretty',
        alignment === 'right'
          ? 'ml-auto bg-white text-black'
          : 'bg-gray-700 text-white'
      )}
    >
      <p>{text}</p>
    </div>
  )
}

export default ChatBubble
