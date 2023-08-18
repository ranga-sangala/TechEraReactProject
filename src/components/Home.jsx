import React,{useEffect,useState} from 'react'
import Courses from './Courses'


const Home = () => {

   const [courses,setCourses] = useState('')
     
  useEffect(()=>{
    getCourses();
  },[])

  async function getCourses(){
         const response = await fetch('https://apis.ccbp.in/te/courses')
         const data = await response.json()
         const formattedData = data?.courses?.map(course => ({
          id:course.id,
          name:course.name,
          logoUrl:course.logo_url
         }))
         setCourses(formattedData)    
  }

  return (
    <div className='courses-container'>
      <h1>Courses</h1>
      {courses.map((course) => <Courses key={course.id} courseInfo={course}/>)}
    </div>
  )
}

export default Home
