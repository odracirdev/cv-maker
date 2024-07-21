/* eslint-disable react/react-in-jsx-scope */

import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/index.tsx'
import Navbar from './components/Navbar'
import Home from './pages/Home/index.tsx'

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="/app" element={<div>App page</div>} />
        </Route>
      </Routes>

      <Footer />
    </>
  )
}
