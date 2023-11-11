import React from 'react'
import { Link } from 'react-router-dom'

const MemberCard = () => {
  return (
    <>
    <div>MemberCard</div>
    <button className='invite'>
        <Link to="/walkies">Send Invitation</Link>
    </button>
    </>
  )
}

export default MemberCard