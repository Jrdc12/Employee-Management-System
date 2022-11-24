import { Link } from 'react-router-dom';

function EmployeeItem({employee}) {
  return (
    <div className='employee'>
        <div>{employee.first_name} {employee.last_name}</div>
        <div>{employee.email}</div>
        <div>{employee.gender}</div>
        <div>{employee.salary}</div>
        
        <Link to={`/employee/${employee._id}`} className='btn btn-reverse btn-sm' >
            View
        </Link>
    </div>
  )
}

export default EmployeeItem