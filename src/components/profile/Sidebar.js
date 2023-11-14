import React from 'react'
import { Link } from 'react-router-dom'
import "./css/SideBar.css"

const Sidebar = ({setSelectedOption}) => {
  return (
    <>    
    <div className='sidebar-container'>
    <button className="side-button" onClick={()=> setSelectedOption("user")}> My Info</button>

    <button className="side-button" onClick={()=> setSelectedOption("dog")}> My Dogs</button>
    </div>
    </>
  )
}

export default Sidebar