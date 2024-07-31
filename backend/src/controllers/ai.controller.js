import createError from 'http-errors'
import { ask } from '../services/ai.service.js'
import { getHistory } from '../services/db.service.js'

export const askToIA = async (req, res, next) => {
  try {
    const { prompt } = req.body
    if (!prompt) {
      throw createError(400, 'Prompt is required')
    }
    const response = await ask(prompt)
    if (!response) {
      throw createError(500, 'Failed to generate response')
    }
    res.status(200).json({ response })
  } catch (error) {
    next(error)
  }
}

export const getMessages = async (req, res, next) => {
  try {
    const history = await getHistory()
    res.status(200).json(history)
  } catch (error) {
    next(error)
  }
}
