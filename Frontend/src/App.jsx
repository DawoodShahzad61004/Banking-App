import { useState } from 'react'
import './App.css'
import LoginPage from './containers/loginScreens/login_page'
import SignupPage from './containers/loginScreens/signup_page'
import SignupStepper from './containers/loginScreens/SignupStepper'

function App() {
  const [count, setCount] = useState(0)

  return (
      // <LoginPage/>
      // <SignupPage/> 
      <SignupStepper/>
  )
}

export default App
