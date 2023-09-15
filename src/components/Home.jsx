import Calculation from "./Calculation"
import Courses from "./Courses"


const Home = () => {
    return (
        <>
            <h1 className='text-center pt-5 font-bold text-lg md:text-2xl'>Course Registration</h1>
            <div className='flex flex-col-reverse items-center lg:items-start lg:flex-row lg:justify-center py-5 gap-4 w-[96%] mx-auto'>
                <Courses />
                <Calculation />
            </div>
        </>
    )
}

export default Home