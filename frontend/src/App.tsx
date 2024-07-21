import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Chat from './components/Chat/Chat'
import Home from './pages/home/Home'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  )
}

export default App
