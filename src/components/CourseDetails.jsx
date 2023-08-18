import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
    const [courseInfo,setCourseInfo] = useState("")
    const {id} = useParams()
    useEffect(()=>{
        getCourseInfo()
    },[])

    async function getCourseInfo(){
        const response = await fetch("https://apis.ccbp.in/te/courses/"+id)
        const data = await response.json()
        const courseDetails = {
            name:data.course_details.name,
            imageUrl : data.course_details.image_url,
            description:data.course_details.description
        }
        setCourseInfo(courseDetails)
    }

  return (
    <div>
      <img src={courseInfo.imageUrl} alt="" />
      <h1>{courseInfo.name}</h1>
      <p>{courseInfo.description}</p>
    </div>
  )
}

export default CourseDetails
