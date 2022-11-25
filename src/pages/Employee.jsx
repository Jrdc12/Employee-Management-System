import { useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getEmployee, reset, deleteEmployee } from "../features/employees/employeeSlice";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

function Employee() {
	const { employee, isLoading, isSuccess, isError, message } = useSelector(
		(state) => state.employees
	);

	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { employeeId} = useParams();

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		dispatch(getEmployee(employeeId));
	}, [isError, message, employeeId]);

	// Delete employee
	const onDeleteEmployee = () => {
		dispatch(deleteEmployee(employeeId));
		toast.success("Employee deleted successfully");
		navigate("/employees");
	}


	if (isLoading) {
		return <Spinner />;
	}

	if (isError) {
		return <h3>Something went wrong</h3>;
	}

	return (
		<div className='employee-page'>
			<header className='employee-header'>
				<BackButton url='/employees' />
				<h2>Employee ID: {employee._id}</h2>
				<h2>Employee Name: {employee.first_name} {employee.last_name}</h2>
				<h2>Gender: {employee.gender}</h2>
				<h2>Salary: {employee.salary}</h2>
			</header>

			<button onClick={onDeleteEmployee} className='btn btn-block btn-danger'>
				Delete Employee
			</button>

		</div>
	);
}

export default Employee;
