import React from 'react'
import { Link } from 'react-router-dom'
import "./css/SideBar.css"

const Sidebar = ({setSelectedOption}) => {
  return (
    <>    
    <div className='sidebar-container'>Sidebar
    <button onClick={()=> setSelectedOption("user")}> My Info</button>

    <button onClick={()=> setSelectedOption("dog")}> My Dogs</button>
    </div>
    </>
  )
}

export default Sidebar