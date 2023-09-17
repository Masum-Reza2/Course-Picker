import Calculation from "./Calculation"
import Courses from "./Courses"
import { useEffect, useState } from 'react'

// toast imports
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    //React Toastify
    const noDoubleSelecttion = () => toast.warn('Already selected!', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const timeUp = () => toast.error('Time up!', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

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
            return noDoubleSelecttion()
            // return alert('Already booked')
        }
        else {
            if (totalHours + data.credit > 20) {
                return timeUp()
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
            <ToastContainer />
            <div className='flex flex-col-reverse items-center lg:items-start lg:flex-row lg:justify-center py-5 gap-4 w-[96%] mx-auto'>
                <Courses courses={courses} handleSelect={handleSelect} />
                <Calculation selected={selected} totalPrice={totalPrice} totalHours={totalHours} remaining={remaining} />
            </div>
        </>
    )
}

export default Home