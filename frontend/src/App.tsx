/* eslint-disable react/react-in-jsx-scope */

import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

const App: React.FC = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route>
          <Route index element={<div>Home page</div>} />
          <Route path="/app" element={<div>App page</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
