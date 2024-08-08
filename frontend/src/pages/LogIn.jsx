import React from 'react'
import Sign from '../components/Sign'
import { useState, useRef } from 'react';
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import checkValidation from '../components/functions/CheckValidation.js';
import Signbtn from '../components/buttons/Signbtn.jsx';


const LogIn = () => {  
  const form = useRef({'email':'','password':''});

  checkValidation('/','sign');

  const navigate = useNavigate();
  async function submitForm(e){
    
    const raw = await fetch('http://localhost:3000/form/submit/login',
  {
    credentials:'include',
    method:'POST',
    headers:{"Content-Type" : "application/json"},
    body:JSON.stringify(form.current),
  });
  
  const data = await raw.json();
  console.log(data)
  if(data.loggedIn){
    navigate('/');
  }

  }


  return (

    <div className='flex justify-center items-center'>


      <div>
      <div>

      <Sign form={form} name='email' placeholder='Email'></Sign>
      <Sign form={form} name='password' placeholder='Password'></Sign>
      </div>
    
      <Signbtn name="Log In" onclick={submitForm}/>
      </div>
    </div>

    
  )
}

export default LogIn;
