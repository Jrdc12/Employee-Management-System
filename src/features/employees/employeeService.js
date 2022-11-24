import axios from "axios";

const createEmployeeURL = "//localhost:4000/api/emp/employees"



// Create new employee
const createEmployee = async (employeeData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,

        }
    }

    const response = await axios.post(createEmployeeURL, employeeData, config)

    return response.data
}

// Get employees
const getEmployees = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,

        }
    }

    const response = await axios.get(createEmployeeURL, config)

    return response.data
}
// Get employee by id
const getEmployee = async (employeeId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,

        }
    }

    const response = await axios.get(createEmployeeURL + employeeId, config)

    return response.data
}

// Delete employee
const deleteEmployee = async (employeeId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,

        }
    }

    const response = await axios.delete(createEmployeeURL + employeeId, config)

    return response.data
}


const employeeService = {
    createEmployee,
    getEmployees,
    getEmployee,
    deleteEmployee
}

export default employeeService