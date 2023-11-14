import React from 'react'
import { Link } from 'react-router-dom'
import Dog from './Dog'
import "./css/DogDetail.css"

const DogDetail = ({dogs}) => {
  const dogNodes = dogs.map((dog) => {
    return (
      <li key={dog.id} className='dog-list'>
        <Dog dog={dog}/>
      </li>

    )

  })
  console.log(dogs)
  return (
    <>
    <div className='dog-detail'>My Dogs</div>
    <ul>{dogNodes}</ul>
  
    <button><Link to="/newDog">Add Dog</Link></button>
    </>
  )
}

export default DogDetail