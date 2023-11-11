import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <p>Welcome to Wiggle Waggle Waddles</p>
      <button className='enter'>
        <Link to="/login">Get Started</Link>
      </button>

      
    </div>
  )
}

export default Home
