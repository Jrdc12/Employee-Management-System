import { Link } from 'react-router-dom'
import { FaQuestionCircle, FaUserAlt} from 'react-icons/fa'

function Home() {
  return (
    <>
        <section className="heading">
            <h1>What do you need help with?</h1>
            <p>Please choose from an option below</p>
        </section>

        <Link to='/new-employee' className='btn btn-reverse btn-block'>
            <FaQuestionCircle/> New Employee
        </Link>

        <Link to='/employees' className='btn btn-block'>
            <FaUserAlt/> View Employees
        </Link>
    </>
  )
}

export default Home