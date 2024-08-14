import React from 'react'
import checkValidation from '../components/functions/CheckValidation.js';

const Chat = () => {

  const start = async () => {
    navigator.getUserMedia({
      video:{
        frameRate:23,
        width:{
          min:480, ideal:720, max: 800
        }
      },
      audio:true
    },(stream) => {
      localStream = stream
    }
    )
  }
  
  checkValidation();
  return (
    <div>
      <button onClick={start}>Start the conference</button>
    </div>
  )
}

export default Chat
