import { Router } from 'express'
import { askToIA } from '../controllers/ai.controller.js'

const AIRouter = Router()

AIRouter.post('/ai/ask', askToIA)

export default AIRouter
