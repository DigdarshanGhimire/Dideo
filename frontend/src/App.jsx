import React from "react";
import './output.css';
import CLayout from "./components/CLayout";
import { useState } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Conference from './pages/Conference'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Profile from "./pages/Profile";
import CreateRoom from "./pages/CreateRoom";
import Room from "./pages/Room";
import checkValidation from "./components/functions/CheckValidation";
import { SocketContext } from "./components/sockets/socketContext";
import socket from "./components/sockets/socket";
import { ConnectedContext } from "./components/context/globalcontext";



const App = () => {

  const [connected, setConnected] = useState(false)


  return(
    <ConnectedContext.Provider value={{connected,setConnected}}>
    <SocketContext.Provider value={socket}>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/conference" element={<Conference />}/>
        <Route path="/login" element={<LogIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/profile/id" element={<Profile />}/>
        <Route path="/createroom" element={<CreateRoom />}/>
        <Route path="/room/:roomid" element={<Room />}/>
        
      </Routes>
    </BrowserRouter>
    </SocketContext.Provider>
    </ConnectedContext.Provider>
  )
};

export default App;
