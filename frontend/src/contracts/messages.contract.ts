export type RoleMessage = 'assistant' | 'user'

export type Message = {
  role: RoleMessage
  content: string
}
