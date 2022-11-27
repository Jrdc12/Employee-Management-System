import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createEmployee, reset, updateEmployee } from "../features/employees/employeeSlice";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

function UpdateEmployee() {
	const { isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.employees
	);
	
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	

	const employee = location.state.employee

	const [email, setEmail] = useState(employee.email);
	const [first_name, setFirstName] = useState(employee.first_name);
	const [last_name, setLastName] = useState(employee.last_name);
	const [gender, setGender] = useState(employee.gender);
	const [salary, setSalary] = useState(employee.salary);

    // useEffect(() => {
    //     if (isError) {
    //         toast.error(message);
    //         console.log(message);
    //     }

    //     if (isSuccess) {
    //         dispatch(reset());
    //         toast.success(message);
    //         navigate("/employees");
    //     }

    //     dispatch(reset());
    // }, [dispatch, isError, isSuccess, message, navigate]);

	const onSubmit = (e) => {
		e.preventDefault();
		toast.success("Employee Updated Successfully");
		dispatch(updateEmployee({ email, first_name, last_name, gender, salary, _id: employee._id }));
	};

    if(isLoading) {
        return <Spinner />
    }

	return (
		<>
            <BackButton url="/" />
			<section className='heading'>
				<h1>Update Employee</h1>
				<p>Please fill out the form below</p>
			</section>
			<section className='form'>
				<form onSubmit={onSubmit}>
					<div className='form-group'>
						<label htmlFor='EmployeeFirstName'>Employee First Name</label>
						<input
							defaultValue={employee.first_name}
							type='text'
							className='form-control'
							onChange={(e) => setFirstName(e.target.value)}
							value={first_name}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='EmployeeLastName'>Employee Last Name</label>
						<input
							defaultValue={employee.last_name}
							type='text'
							className='form-control'
							onChange={(e) => setLastName(e.target.value)}
							value={last_name}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='EmployeeEmail'>Employee Email</label>
						<input
							defaultValue={employee.email}
							type='text'
							className='form-control'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='EmployeeGender'>Employee Gender</label>
						<input
							defaultValue={employee.gender}
							type='text'
							className='form-control'
							onChange={(e) => setGender(e.target.value)}
							value={gender}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='EmployeeSalary'>Employee Salary</label>
						<input
							defaultValue={employee.salary}
							type='text'
							className='form-control'
							onChange={(e) => setSalary(e.target.value)}
							value={salary}
						/>
					</div>
					<div className='form-group'>
						<button type='submit' className='btn btn-primary'>
							Update
						</button>
					</div>
				</form>
			</section>
		</>
	);
}

export default UpdateEmployee;
