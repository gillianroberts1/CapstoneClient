import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'
import { AuthContext } from '../context/AuthContext'


const Home = () => {
  const { user, setUser } = useContext(UserContext)
  const { uid } = useContext(AuthContext)

  useEffect(() => {
    fetch(`http://localhost:8080/api/users/uid/${uid}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error:', error));
  }, [uid]);

  const logout = () => {
    setUser(null); // Clear the user context
  }

  return (
    <div>
      <p>Welcome to Wiggle Waggle Waddles, {user ? user.firstName : 'User'}</p>
      <button className='enter'>
        <Link to="/login">Get Started</Link>
      </button>
      {user && <button onClick={logout}>Logout</button>}

      
    </div>
  )
}

export default Home
