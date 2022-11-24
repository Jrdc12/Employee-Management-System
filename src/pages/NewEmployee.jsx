import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createEmployee, reset } from "../features/employees/employeeSlice";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

function NewEmployee() {
	const { isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.employees
	);
	const [email, setEmail] = useState("");
	const [first_name, setFirstName] = useState("");
	const [last_name, setLastName] = useState("");
	const [gender, setGender] = useState("");
	const [salary, setSalary] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

    useEffect(() => {
        if (isError) {
            toast.error(message);
            console.log(message);
        }

        if (isSuccess) {
            dispatch(reset());
            toast.success(message);
            navigate("/employees");
        }

        dispatch(reset());
    }, [dispatch, isError, isSuccess, message, navigate]);

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(createEmployee({ email, first_name, last_name, gender, salary }));
        console.log(createEmployee)
	};

    if(isLoading) {
        return <Spinner />
    }

	return (
		<>
            <BackButton url="/" />
			<section className='heading'>
				<h1>New Employee</h1>
				<p>Please fill out the form below</p>
			</section>
			<section className='form'>
				<form onSubmit={onSubmit}>
					<div className='form-group'>
						<label htmlFor='EmployeeFirstName'>Employee First Name</label>
						<input
							tpye='text'
							className='form-control'
							onChange={(e) => setFirstName(e.target.value)}
							value={first_name}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='EmployeeLastName'>Employee Last Name</label>
						<input
							tpye='text'
							className='form-control'
							onChange={(e) => setLastName(e.target.value)}
							value={last_name}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='EmployeeEmail'>Employee Email</label>
						<input
							tpye='text'
							className='form-control'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='EmployeeGender'>Employee Gender</label>
						<input
							tpye='text'
							className='form-control'
							onChange={(e) => setGender(e.target.value)}
							value={gender}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='EmployeeSalary'>Employee Salary</label>
						<input
							tpye='text'
							className='form-control'
							onChange={(e) => setSalary(e.target.value)}
							value={salary}
						/>
					</div>
					<div className='form-group'>
						<button type='submit' className='btn btn-primary'>
							Submit
						</button>
					</div>
				</form>
			</section>
		</>
	);
}

export default NewEmployee;
