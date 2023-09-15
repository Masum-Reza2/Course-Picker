import { BsCurrencyDollar } from 'react-icons/bs'
import { IoIosBookmarks } from 'react-icons/io'

const Card = ({ course, handleSelect }) => {
    // console.log(course)
    let { course_name, credit, description, img, price } = course;
    return (
        <div className="flex flex-col  justify-center p-4 border shadow-md shadow-gray-400 rounded-lg space-y-2">
            <img className='h-full' src={img} alt="" />
            <p className="font-semibold text-[#1C1B1B]">{course_name}</p>
            <p className="text-xs text-start text-[#1C1B1B99]">{description}</p>

            <div className="flex justify-between text-[#1C1B1B99] font-semibold">
                <div className="flex justify-center items-center gap-1">
                    <BsCurrencyDollar />
                    <p>price : {price}</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <IoIosBookmarks />
                    <p>credit : {credit}hr</p>
                </div>
            </div>

            <button className='border bg-[#2F80ED] text-white py-1 rounded-md font-semibold' onClick={() => handleSelect(course)}>Select</button>

        </div>
    )
}

export default Card