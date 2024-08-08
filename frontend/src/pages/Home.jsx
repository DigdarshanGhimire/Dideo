import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import checkValidation from "../components/functions/CheckValidation";
import LogOut from "../components/LogOut";
import { useState, useEffect} from "react";

const Home = () => {


  checkValidation();

  const [username, setUsername] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/profiledata',{credentials:"include"}).then(async (res) => {
      const data = await res.json();
      if(data.loggedIn){setUsername(data.username)}
    }
    )
    }, []);
    
  

 
  


  return (
    <div>
      <div className="text-3xl font-bold justify-center items-center flex">{username}</div>

      <div className="anchors grid">
        <Link to="/conference">Conference</Link>
        <Link to="/login">LogIn</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to='/profile/id'>Profile</Link>
      </div>

      <LogOut/>
    </div>
  );
};

export default Home;
