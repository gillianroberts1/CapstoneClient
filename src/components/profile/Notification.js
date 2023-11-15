import React, { useContext } from 'react'
import WalkieCard from '../walkies/WalkieCard'
import { AuthContext } from "../../firebase/context/AuthContext"
import "./css/Notifications.css"
import { useNavigate } from 'react-router-dom'

const Notification = ({users, onDeleteNotification, onCreateWalkie}) => {

  const { currentUser } = useContext(AuthContext);

  const handleAccept = (notification) => {
    onCreateWalkie({
      location: notification.entries.Location,
      date: notification.entries.Date,
    });
  };
  
  const handleDeleteNotification = (id) => {
    const request = new Request();
    request.delete(`/api/notifications/${id}`).then(() => {
      // window.location = '/notifications'
      // useNavigate
    });
    // onDeleteNotification(id);
  }
  
  return (

    <div className='notifications-container'>
    <h2>Notification Centre</h2>
    
    {currentUser && currentUser.notifications && currentUser.notifications.length > 0 ? (
    currentUser.notifications.map((notification, index) => {
      const foundUser = users.find(user => typeof notification.sender === 'object' ? user.id === notification.sender.id : user.id === notification.sender);
    
      if (foundUser) {
        return (
          <div key={index}>
            <h4>From: {foundUser.firstName} {foundUser.lastName}</h4>
            <p>Location: {notification.entries.Location}</p>
            <p>Date: {notification.entries.Date}</p>
            <p>Message: {notification.entries.Message}</p>
            <button onClick={() => handleAccept(notification)}>Accept</button>
            <button onClick={() => handleDeleteNotification(notification)}>Reject</button>
          </div>
        )
      }
    })
  ) : (
    <p>No notifications available</p>
  )}
  </div>
  )
}

export default Notification