import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogOut = () => {
    const navigate = useNavigate();
    const logout = (e) => {
      fetch('http://localhost:3000/api/logout',{
        credentials: "include",
        method:"POST"
      }).then((d) => {
        d.json().then(
            (r) => {
              console.log(r.loggedOut);
              navigate('/');
            }
            
        );
        }
      
      )
    }
    
  return (
    <div>
      <button onClick={logout}>Log Out</button>
    </div>
  )
}

export default LogOut
