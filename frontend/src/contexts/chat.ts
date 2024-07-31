import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import type { Message, RoleMessage } from '../contracts/messages.contract'

type ChatState = {
  messages: Message[]
  loading: boolean
}

type ChatActions = {
  appendTextMessage(msg: string, role: RoleMessage): void
  setLoading(loading: boolean): void
}

type ChatStore = ChatState & ChatActions

const INITIAL_STATE: ChatState = {
  messages: [
    {
      role: 'assistant',
      content: { type: 'text', text: 'Hola, ¿en qué puedo ayudarte hoy?' }
    }
  ],
  loading: false
}

const useChat = create<ChatStore>()(
  devtools(
    immer((set) => ({
      ...INITIAL_STATE,
      appendTextMessage: (msg, role) =>
        set(
          (state) => {
            state.messages.push({ role, content: { type: 'text', text: msg } })
            // state.loading = false
          },
          false,
          'appendTextMessage'
        ),
      setLoading: (loading) =>
        set(
          (state) => {
            state.loading = loading
          },
          false,
          'setLoading'
        )
    }))
  )
)

export default useChat
