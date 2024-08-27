import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';

const Room = () => {
    const {roomid} = useParams();
    const [id, setid] = useState(roomid)
  return (
    <div>
      {id}
    </div>
  )
}

export default Room
