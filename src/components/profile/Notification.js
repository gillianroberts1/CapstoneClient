import React, { useContext } from 'react'
import WalkieCard from '../walkies/WalkieCard'
import { AuthContext } from "../../firebase/context/AuthContext"
import "./css/Notifications.css"


const Notification = () => {

  const { currentUser } = useContext(AuthContext);

  const handleDeleteNotification = (id) => {
    const request = new Request();
    request.delete(`/api/notifications/${id}`).then(() => {
      window.location = '/notifications'
    });
  }

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
        <button onClick={() => handleDeleteNotification(notification.id)}>Reject</button>
      </div>
    ))
  ) : (
    <p>No notifications available</p>
  )}
  </div>

  )
}

export default Notification