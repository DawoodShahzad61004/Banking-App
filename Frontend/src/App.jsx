import { useState } from 'react'
import './App.css'
import LoginPage from './containers/loginScreens/login_page'
import LandingPage from './containers/loginScreens/Landing_page'
import { Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default App
