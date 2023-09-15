import './App.css'
import Calculation from './components/Calculation'
import Courses from './components/Courses'

function App() {

  return (
    <>
      <div className='flex flex-col-reverse items-center md:flex-row md:justify-center py-5 gap-4 w-[90%] mx-auto'>
        <Courses />
        <Calculation />
      </div>
    </>
  )
}

export default App