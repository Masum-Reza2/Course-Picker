const Card = ({ course }) => {
    console.log(course)
    let { course_name, credit, description, img, price } = course;
    return (
        <div className="flex flex-col  justify-center p-5 border shadow-md shadow-gray-400 rounded-lg space-y-2">
            <img src={img} alt="" />
            <p className="font-semibold">{course_name}</p>
        </div>
    )
}

export default Card
