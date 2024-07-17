import { generateText } from 'ai'
import { ollama } from 'ollama-ai-provider'
import { error } from '../utils/logger.js'
import { addToHistory, getContext, getHistory } from './db.service.js'

const model = ollama('llama3')

export const ask = async prompt => {
  const context = await getContext()
  const history = await getHistory()

  try {
    // Hacer consulta a la IA
    const result = await generateText({
      model,
      prompt,
      system: context,
      history
    })
    const response = result.text

    // Escribir el historial en la bd
    addToHistory({ role: 'user', content: prompt })
    addToHistory({ role: 'assistant', content: response })

    // Actualizar el contexto con la última respuesta 🚩❓
    return response
  } catch (err) {
    error('Error al generar texto:', err)
  }
}
