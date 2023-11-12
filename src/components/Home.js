import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


const Home = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div>
    <p>Welcome to Wiggle Waggle Waddles, {currentUser && `${currentUser.firstName} ${currentUser.lastName}`}</p>
    {currentUser && <img src={currentUser.photoURL} alt='' style={{ height: '200px', width: '200px', objectFit: 'cover', borderRadius: '50%'}}/>}<br></br>
    <button className='enter'>
        <Link to="/login">Get Started</Link>
    </button>
      
    </div>
  )
}

export default Home
