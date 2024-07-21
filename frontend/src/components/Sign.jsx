import React from 'react'
import { useState } from 'react'

const Sign = () => {
  const [form, setForm] = useState({"email":"","password":""});
  const handleChange = (e) => {
    setForm({...form,[e.target.name]:e.target.value});
  }
  
  return (
    <div>
      <div className="inputarea">

      <input type="text" name="email" onChange={handleChange} value={form.email}/>
      </div>
  
      <div className="inputarea">

      <input type="text" name="password" onChange={handleChange} value={form.password}/>
      </div>
    </div>
  )
}

export default Sign
