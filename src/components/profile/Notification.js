import React, { useContext } from 'react'
import WalkieCard from '../walkies/WalkieCard'
import { AuthContext } from "../../firebase/context/AuthContext"
import "./css/Notifications.css"


const Notification = ({onDelete}) => {

  const { currentUser } = useContext(AuthContext);

  return (

    <div className='notifications-container'>
    <h2>Notification Centre</h2>
    
    {currentUser && currentUser.notifications && currentUser.notifications.length > 0 ? (
    currentUser.notifications.map((notification, index) => (
      <div key={index}>
        <p>Location: {notification.entries.Location}</p>
        <p>Date: {notification.entries.Date}</p>
        <p>Message: {notification.entries.Message}</p>
        <button>Accept</button>
        <button onClick={() => onDelete(notification.id)}>Reject</button>
      </div>
    ))
  ) : (
    <p>No notifications available</p>
  )}
  </div>
  )
}

export default Notification