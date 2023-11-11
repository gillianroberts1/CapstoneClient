import React from 'react'
import { Link } from 'react-router-dom'

const DogDetail = () => {
  return (
    <>
    <div>DogDetail</div>
    <button><Link to="/newDog">Add Dog</Link></button>
    </>
  )
}

export default DogDetail