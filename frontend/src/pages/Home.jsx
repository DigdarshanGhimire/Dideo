import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import checkValidation from "../components/functions/CheckValidation";
import LogOut from "../components/LogOut";
import { useState, useEffect, useContext} from "react";
import profileData from "../components/fetches/profiledata";
import { ConnectedContext } from "../components/context/globalcontext";
import { connectRoom } from "../components/functions/connectRoom";
import { SocketContext } from '../components/sockets/socketContext';

const Home = () => {


  checkValidation();
  const {connected, setConnected} = useContext(ConnectedContext)
  
  const [profile, setProfile] = useState(null);
  
  const socket = useContext(SocketContext)
  useEffect(() => {
    
      connectRoom(socket,setProfile)
    }, []);
    
  

 
  


  return (
    <div>
      <div className="text-3xl font-bold justify-center items-center flex">{profile?profile.username:'Loading...'}</div>

      <div className="anchors grid">
        <Link to="/conference">Conference</Link>
        <Link to="/login">LogIn</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to='/profile/id'>Profile</Link>
        <Link to='/createroom'>Create Room</Link>
        <Link to='/room/collections/'></Link>
      </div>

      {
        profile?profile.rooms.map((room,index) => {
          
          <Link  to={`/room/${room}`} key={index}>{room}</Link>
        }
      ):'Loading...'
    }

    {profile?console.log(profile.rooms[0]):''}
    
    </div>
  );
};

export default Home;
