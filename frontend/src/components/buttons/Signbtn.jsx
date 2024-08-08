import React from 'react'

const Signbtn = ({name,onclick}) => {
  return (
    <div className='p-2 m-1'>
      <button onClick={onclick} className='text-bold p-2 text-center outline outline-1 bg-green-400 rounded-xl text-2xl'>{name}</button>
    </div>
  )
}

export default Signbtn
