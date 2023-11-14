import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../firebase/context/AuthContext'

const WalkieForm = () => {
  const { currentUser } = useContext(AuthContext)
  const { id } = useParams()
  const [message, setMessage] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')
  const navigate = useNavigate();

  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  
  //   try {
  //     const response = await fetch(`/api/users/${id}/notifications`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ 
  //         sender: currentUser.id,
  //         user: id,
  //         entries: {
  //           Message: message,
  //           Date: date,
  //           Location: location,
  //         },
  //       }),
  //     })

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`)
  //     }
  
  //     const data = await response.json()
  //     console.log(data)

  //     navigate('/members')
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  const handleSubmit = async (event) => {
    event.preventDefault()
  
    try {
      const response = await fetch(`/api/users/${id}/notifications`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          senderId: currentUser.id,
          userId: id,
          entries: {
            Message: message,
            Date: date,
            Location: location,
          },
        }),
      })
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
  
      const data = await response.json()
      console.log(data)
  
      navigate('/members')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <form onSubmit={handleSubmit}>
      <label>
        <input type='text' value={location} placeholder='location' onChange={e => setLocation(e.target.value)} />
      </label>
      <label>
        <input type="datetime-local" value={date} onChange={e => setDate(e.target.value)} />
      </label>
      <label>
        Message:
        <input type="textarea" value={message} onChange={e => setMessage(e.target.value)} />
      </label>
      <button type="submit">Send Notification</button>
    </form>
    </>
  )
}

export default WalkieForm