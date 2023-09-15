import React, { useEffect } from 'react'

const Courses = () => {

    useEffect(()=>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    
  return (
    <div className='border border-black w-[60%] text-center'>
      courser
    </div>
  )
}

export default Courses