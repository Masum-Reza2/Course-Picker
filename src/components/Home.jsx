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

    // custom sweet alert states
    const [doubleBookWarning, setDoubleBookWarning] = useState(false);
    const [timeup, setTimeup] = useState(false);

    // course name
    const [selected, setSelected] = useState([])
    // total price
    const [totalPrice, setTotalPrice] = useState(0)
    // total hours
    const [totalHours, setTotalHours] = useState(0)
    // Remaining hours
    const [remaining, setRemaining] = useState(20)
    const handleSelect = (data) => {
        let newArray = [...selected, data.course_name]

        if (selected.includes(data.course_name)) {
            setDoubleBookWarning(true)
            setTimeout(() => {
                setDoubleBookWarning(false)
            }, 2500);
            // return alert('Already booked')
        }
        else {
            if (totalHours + data.credit > 20) {
                setTimeup(true)
                setTimeout(() => {
                    setTimeup(false)
                }, 2500);
                // return alert('Time up')
            }
            else {
                setSelected(newArray)
                setTotalPrice(totalPrice + data.price)
                setTotalHours(totalHours + data.credit)
                setRemaining(remaining - data.credit)
            }

        }
    }

    return (
        <>
            {
                doubleBookWarning && <p className="text-center fixed border bg-black py-5 text-yellow-600 font-bold w-full text-xl top-60 max-w-7xl transition-all duration-500">Already bought this Course!!!</p>
            }
            {
                timeup && <p className="text-center fixed border bg-black py-5 text-red-600 font-bold w-full text-xl top-60 max-w-7xl transition-all duration-500">Your Budget Time is over!!!</p>
            }
            <div className='flex flex-col-reverse items-center lg:items-start lg:flex-row lg:justify-center py-5 gap-4 w-[96%] mx-auto'>
                <Courses courses={courses} handleSelect={handleSelect} />
                <Calculation selected={selected} totalPrice={totalPrice} totalHours={totalHours} remaining={remaining} />
            </div>
        </>
    )
}

export default Home