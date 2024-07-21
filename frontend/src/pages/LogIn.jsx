import React from 'react'
import Sign from '../components/Sign'

const LogIn = () => {
  return (
    <div className='p-5'>
      <div className="phone testborder w-[720px] h-[350px] rounded-2xl bg-gray-900 p-3 flex justify-center items-center">
        <div className="main w-[690px] h-[320px] rounded-xl bg-white">
          <div className="signbox">
              <Sign></Sign>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LogIn
