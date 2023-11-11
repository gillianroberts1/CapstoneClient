import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'
import { AuthContext } from '../context/AuthContext'


const Home = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div>
    <p>Welcome to Wiggle Waggle Waddles, {currentUser && `${currentUser.firstName} ${currentUser.lastName}`}</p>      
    <button className='enter'>
        <Link to="/login">Get Started</Link>
    </button>
      
    </div>
  )
}

export default Home
