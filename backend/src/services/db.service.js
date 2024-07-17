import { JSONFilePreset } from 'lowdb/node'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import INITIAL_CONTEXT from '../ollama/initialContext.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
// Archivo que se usará para la bd
const file = join(__dirname, `../ollama/db.json`)

const dbTemplate = {
  context: INITIAL_CONTEXT,
  messages: []
}

// Crear la bd. Si no existe la inicializa con `dbTemplate`
export const db = await JSONFilePreset(file, dbTemplate)

// Cargar el contexto desde la bd
export const getContext = async () => {
  return await db.data.context
}

// Leer el historial desde la bd 
export const getHistory = async () => {
  return await db.data.messages
}

// Añadir al historial de la bd
export const addToHistory = async (item) => {
  db.data.messages.push(item)
  await db.write()
}
