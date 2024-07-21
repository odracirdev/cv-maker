export type RoleMessage = 'assistant' | 'user'

export type MessageContent = {
  type: 'text'
  text: string
}

export type Message = {
  role: RoleMessage
  content: MessageContent
}
