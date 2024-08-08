import React from "react";
import './output.css';
import CLayout from "./components/CLayout";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Conference from './pages/Conference'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Profile from "./pages/Profile";
import checkValidation from "./components/functions/CheckValidation";


const App = () => {

  checkValidation();
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/conference" element={<Conference />}/>
        <Route path="/login" element={<LogIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/profile/id" element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
