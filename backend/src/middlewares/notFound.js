const NotFound = (_req, res) => {
  return res.status(404).json({ error: 'Endpoint Not Found'})
}

export default NotFound
