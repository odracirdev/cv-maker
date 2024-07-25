/* eslint-disable react/react-in-jsx-scope */

import { Route, Routes } from 'react-router-dom'
import Chat from './pages/Chat'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Route>
      </Routes>
    </>
  )
}
