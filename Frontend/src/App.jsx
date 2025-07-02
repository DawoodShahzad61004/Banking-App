import { useState } from "react";
import "./App.css";
import LoginPage from "./containers/loginScreens/login_page";
import SignupStepper from "./containers/loginScreens/SignupStepper";
import LandingPage from "./containers/loginScreens/Landing_page";
import Home from "./containers/appstack/Dashboard/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (

    // <Routes>
    //   <Route path="/" element={<LandingPage />} />
    //   <Route path="/login" element={<LoginPage />} />
    //   <Route path="/signup" element={<SignupStepper />} />
    // </Routes>
    <Home />
  );
}

export default App;
