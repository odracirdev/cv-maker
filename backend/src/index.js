import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import { PORT } from './config.js'
import errorHandler from './middlewares/errorHandler.js'
import NotFound from './middlewares/notFound.js'
import AIRouter from './routes/ai.route.js'
import { success } from './utils/logger.js'

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use(AIRouter)
app.use('*', NotFound)
app.use(errorHandler)

app.listen(PORT, () => success(`Server started on port ${PORT}`))
