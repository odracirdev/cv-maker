/* eslint-disable react/react-in-jsx-scope */

import type { FC } from 'react'
import { cn } from '../../lib/utils'

type ChatBubbleProps = { text: string; alignment?: 'left' | 'right' }

const ChatBubble: FC<ChatBubbleProps> = ({ alignment = 'left', text }) => {
  return (
    <section
      className={cn('grid gap-4 px-3 py-2 text-sm break-words text-pretty', {
        'grid-cols-[1fr_36px] text-right': alignment === 'right',
        'text-white grid-cols-[36px_1fr]': alignment !== 'right'
      })}
    >
      <img
        className={cn({
          'order-1 border border-neutral-700 rounded-full':
            alignment === 'right',
          'order-[0]': alignment !== 'right'
        })}
        src={alignment === 'right' ? '/img/avatar.png' : '/img/logo.png'}
        alt="Logo"
        width={36}
        height={36}
      />
      <p
        className={cn({
          'bg-zinc-800 text-white p-4 rounded-[6px] w-fit ml-auto':
            alignment === 'right'
        })}
      >
        {text}
      </p>
    </section>
  )
}

export default ChatBubble
