import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>    
    <div>Sidebar</div>
    <button><Link to="/dogs">Dogs</Link></button>
    </>
  )
}

export default Sidebar