import { generateText } from 'ai'
import { ollama } from 'ollama-ai-provider'
import { error } from '../utils/logger.js'
import { addToHistory, getContext, getHistory } from './db.service.js'

const model = ollama('llama3')

export const ask = async prompt => {
  const context = await getContext()
  const history = await getHistory()

  addToHistory({ role: 'user', content: prompt })

  try {
    // Hacer consulta a la IA
    const result = await generateText({
      model,
      system: context,
      messages: history,
    })
    const response = result.text

    // Escribir el historial en la bd
    addToHistory({ role: 'assistant', content: response })

    return response
  } catch (err) {
    error('Error al generar texto:', err)
  }
}
