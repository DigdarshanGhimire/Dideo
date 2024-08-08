import React from 'react'
import Sign from '../components/Sign'
import { useState, useRef } from 'react';
import { redirect } from 'react-router-dom';
import checkValidation from '../components/functions/CheckValidation';
import Signbtn from '../components/buttons/Signbtn';


const SignUp = () => {

  const form = useRef({});


  checkValidation('/','sign')
  async function submitForm(e){
    console.log(form.current)
    const raw = await fetch('http://localhost:3000/form/submit/signup',
  {
    method:'POST',
    headers:{"Content-Type" : "application/json"},
    body:JSON.stringify(form.current),
  });
  const data = await raw.json();

  console.log(data);

  }


  return (
    <div className='flex justify-center items-center m-4  mt-5'>
      <div className='testborder rounded-xl p-10'>
      <div>

      <Sign form={form} name='name' placeholder='Name'></Sign>
      <Sign form={form} name='email' placeholder='Email' type='email'></Sign>
      <Sign form={form} name='phone' placeholder='Phone'></Sign>
      <Sign form={form} name='password' placeholder='Password' type='password'></Sign>
      </div>
      <div className='flex justify-center'>

      <Signbtn name="Sign Up" onclick={submitForm}/>
      </div>
      </div>
    </div>

    
  )
}

export default SignUp
