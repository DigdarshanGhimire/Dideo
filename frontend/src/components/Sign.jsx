import React from 'react'
import { useState, useEffect } from 'react'

const Sign = ({form,name, placeholder,type='text'}) => {
  const [identity, setIdentity] = useState('')

  const handleChange = (e) => {
    setIdentity(e.target.value);
    form.current = {...form.current, [name]:e.target.value};
  }
  
  return (
    <div className=''>
      <div className='p-2 m-1'>
      <input className='rounded-lg p-2 outline outline-2' type={type} name={name} value={identity} placeholder={placeholder} onChange={handleChange}/>
      </div>
    </div>
  )
}

export default Sign
