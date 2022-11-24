import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getEmployees, reset} from '../features/employees/employeeSlice';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import EmployeeItem from '../components/EmployeeItem';

function Employees() {
    const {employees, isLoading, isSuccess} = useSelector(state => state.employees);

    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            if(isSuccess) {
                dispatch(reset())
            }
        }
    }, [dispatch, isSuccess])

    useEffect(() => {
        dispatch(getEmployees())
    }, [dispatch]);

    if(isLoading) {
        return <Spinner />
    }

  return (
    <>
        <BackButton url='/' />
        <h1>Employees</h1>
        <div className='employees'>
            <div className='employee-headings'>
                <div>Name</div>
                <div>Email</div>
                <div>Gender</div>
                <div>Salary</div>
                <div></div>
            </div>
            {employees.map(employee => (
                    <EmployeeItem key={employee._id} employee={employee} />
                ))}
        </div>

    </>
  )
}

export default Employees