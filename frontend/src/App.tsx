/* eslint-disable react/react-in-jsx-scope */

import { Route, Routes } from 'react-router-dom'
import Chat from './components/Chat/Chat'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Route>
      </Routes>

      <Footer />
    </>
  )
}
