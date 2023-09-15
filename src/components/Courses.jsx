import React, { useEffect, useState } from 'react'
import Card from './Card'

const Courses = () => {

    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (
        <div className=' w-[70%] text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                courses.map((course, index) => <Card key={index} course={course}/>)
            }
        </div>
    )
}

export default Courses