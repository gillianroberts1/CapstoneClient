import React from 'react'
import Group from './Group'
import GroupCard from './GroupCard'

const GroupList = ({groupWalkies, users}) => {
    const groupNodes = groupWalkies.map((groupWalk, id)=>{
        return(
            <li key={id} >
                <Group groupWalk={groupWalk} users={users}/>
                
            </li>
        )
    })
  return (
    <>
    <div>GroupList</div>
    <ul>
        {groupNodes}
    </ul>
    </>

  )
}

export default GroupList