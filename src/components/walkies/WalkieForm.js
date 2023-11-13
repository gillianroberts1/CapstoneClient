import React, { useState } from 'react'

const WalkieForm = () => {
  const [userId, setUserId] = useState('')
  const [message, setMessage] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')


  const handleSubmit = async (event) => {
    event.preventDefault()
  
    try {
      const response = await fetch(`/api/users/${userId}/notifications`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          entries: {
            Message: message,
            Date: date,
            Location: location
          } 
        }),
      })
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
  
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User ID:
        <input type="text" value={userId} onChange={e => setUserId(e.target.value)} />
      </label>
      <label>
        Message:
        <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
      </label>
      <label>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      </label>
      <label>
        <input type='text' value={location} onChange={e => setLocation(e.target.value)} />
      </label>
      <button type="submit">Send Notification</button>
    </form>
  )
}

export default WalkieForm