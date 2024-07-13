import cors from 'cors'
import express from 'express'
import { VARS } from './config.js'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(VARS.PORT, () => console.log(`Server started on port ${VARS.PORT}!`))
