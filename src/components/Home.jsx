import Calculation from "./Calculation"
import Courses from "./Courses"
import React, { useEffect, useState } from 'react'


const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    // course name
    const [selected, setSelected] = useState([])
    // total price
    const [totalPrice, setTotalPrice] = useState(0)
    const handleSelect = (data) => {
        let newArray = [...selected, data.course_name]

        if (selected.includes(data.course_name)) {
            return alert('Already booked')
        }
        else {
            setSelected(newArray)
            setTotalPrice(totalPrice + data.price)
        }
    }
    
    return (
        <>
            <h1 className='text-center pt-5 font-bold text-lg md:text-2xl'>Course Registration</h1>
            <div className='flex flex-col-reverse items-center lg:items-start lg:flex-row lg:justify-center py-5 gap-4 w-[96%] mx-auto'>
                <Courses courses={courses} handleSelect={handleSelect} />
                <Calculation selected={selected} totalPrice={totalPrice} />
            </div>
        </>
    )
}

export default Home