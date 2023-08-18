import React from 'react'
import { Link } from 'react-router-dom'

const Courses = ({courseInfo}) => {
    const {name,logoUrl,id} = courseInfo
  return (
  <Link to={"/courses/"+id}>  <div className='course'>
      <p>{name}</p>
      <img src={logoUrl} alt={name}/>
    </div>
    </Link>
  )
}

export default Courses
