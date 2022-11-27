import { Link, useNavigate } from 'react-router-dom';

function EmployeeItem({employee}) {

  const navigate = useNavigate();

  const hanldeChange = () => {
    navigate(`/update-employee/${employee._id}`, { state:{ employee }})
  }

  return (
    <div className='employee'>
        <div>{employee.first_name} {employee.last_name}</div>
        <div>{employee.email}</div>
        <div>{employee.gender}</div>
        <div>{employee.salary}</div>
        
        <Link to={`/employee/${employee._id}`} className='btn btn-reverse btn-sm' >
            View
        </Link>

        {/* <Link to={`/update-employee/${employee._id}`} className='btn btn-reverse btn-sm' >
            Edit
        </Link> */}

        <button onClick={hanldeChange} className='btn btn-reverse btn-sm'>Edit</button>
    </div>
  )
}

export default EmployeeItem