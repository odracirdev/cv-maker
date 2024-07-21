import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import type { Message, RoleMessage } from '../contracts/messages.contract'

type ChatState = { messages: Message[] }

type ChatActions = { appendTextMessage(msg: string, role: RoleMessage): void }

type ChatStore = ChatState & ChatActions

const INITIAL_STATE: ChatState = {
  messages: [
    {
      role: 'assistant',
      content: { type: 'text', text: 'Hi, how can I help you today?' }
    }
  ]
}

const useChat = create<ChatStore>()(
  devtools(
    immer((set) => ({
      ...INITIAL_STATE,
      appendTextMessage: (msg, role) =>
        set(
          (state) => {
            state.messages.push({ role, content: { type: 'text', text: msg } })
          },
          false,
          'appendTextMessage'
        )
    }))
  )
)

export default useChat
