import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import roomData from '../components/fetches/roomdata'
import { useState } from 'react'

const roomCollection = () => {
    const [collection, setCollection] = useState(null)
    useEffect(() => {
      const data = roomData(collection=true)
    }
    ,[])
  return (
    <div>
      {
        collection?<div>  </div>:'Loading'
      }
    </div>
  )
}

export default roomCollection
