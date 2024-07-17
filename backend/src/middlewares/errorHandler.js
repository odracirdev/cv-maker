import { error } from '../utils/logger.js'

const errorHandler = (err, _req, res, _next) => {
  error(err.message)
  return res.status(err.status).send(err.message)
}

export default errorHandler
