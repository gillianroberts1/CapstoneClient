import React, { useContext } from 'react'
import WalkieCard from '../walkies/WalkieCard'
import { AuthContext } from '../../context/AuthContext';

const Notification = () => {

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser.notifications[0].key)

  return (
    <>
    <div>Notification Centre</div>
    <p>Location: {currentUser.notifications[0].key}</p>
    <p>Message: {currentUser.notifications[0].value}</p>
    <button>View Invitation</button>
    <WalkieCard/>
    </>

  )
}

export default Notification