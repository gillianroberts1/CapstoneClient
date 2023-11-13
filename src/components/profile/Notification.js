import React, { useContext } from 'react'
import WalkieCard from '../walkies/WalkieCard'
import { AuthContext } from "../../firebase/context/AuthContext"
import "./css/Notifications.css"


const Notification = () => {

  const { currentUser } = useContext(AuthContext);

  
  return (
    <>
    <h2>Notification Centre</h2>
    
    {currentUser && currentUser.notifications.length > 0 ? (
    <div>
    <p>Location: {currentUser.notifications[0].entries.Location}</p>
    <p>Date: {currentUser.notifications[0].entries.Date}</p>
    <p>Message: {currentUser.notifications[0].entries.Message}</p>
    <button>Accept</button>
    <button>Reject</button>

    </div>
    ) : (
      <p>No notifications available</p>
    )}
    
    
    </>

  )
}

export default Notification