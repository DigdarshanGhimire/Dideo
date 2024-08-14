import React from 'react'
import { useState, useEffect } from 'react';

const Profile = () => {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch('http://localhost:3000/api/profiledata',{credentials:"include"}).then(async (res) => {
            const data = await res.json();
            if(data.loggedIn){setData(data.content)}
        }
        )
        }, []);

    return (
        <div>
        Profile of a user
        </div>
  )
}

export default Profile
