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
  init(): Promise<void>
}

type ChatStore = ChatState & ChatActions

const fetchMessages = (): Promise<Message[]> => {
  return fetch('http://localhost:3000/ai/messages')
    .then(res => res.json())
    .catch(err => {
      console.error('Error while fetching messages', err)
      return []
    })
}

const INITIAL_STATE: ChatState = {
  messages: [],
  loading: false
}

const useChat = create<ChatStore>()(
  devtools(
    immer((set) => ({
      ...INITIAL_STATE,
      appendTextMessage: (msg, role) =>
        set(
          (state) => {
            state.messages.push({ role, content: msg })
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
        ),
      init: async () => {
        const messages = await fetchMessages()
        set((state) => {
          state.messages = messages
        },
          false,
          'initChat'
        )
      }
    }))
  )
)

export default useChat
