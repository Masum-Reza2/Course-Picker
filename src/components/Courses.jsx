import Card from './Card'


const Courses = ({ courses, handleSelect }) => {

    return (
        <div className=' lg:w-[70%] text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                courses.map((course, index) => <Card key={index} course={course} handleSelect={handleSelect} />)
            }
        </div>
    )
}

export default Courses