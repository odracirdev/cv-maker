import { Router } from 'express'
import { askToIA, getMessages } from '../controllers/ai.controller.js'

const AIRouter = Router()

AIRouter.post('/ai/ask', askToIA)
AIRouter.get('/ai/messages', getMessages)

export default AIRouter
