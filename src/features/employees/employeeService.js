import axios from "axios";

// const createEmployeeURL = "//localhost:4000/api/emp/employees"
const createEmployeeURL = "https://101295616-comp-3123-assignment-1.vercel.app/api/emp/employees"



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

// Update employee by id
const updateEmployee = async (employeeId, employeeData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    try {
        const response = await axios.put(createEmployeeURL + employeeId, employeeData, config)
        console.log("response.data ----->", response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }

    // const response = await axios.put(createEmployeeURL + employeeId, employeeData, config)
    // if(response.data) {
    //     return employeeId
    // }
}


// Delete employee
const deleteEmployee = async (employeeId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,

        }
    }

    const response = await axios.delete(createEmployeeURL + employeeId, config)
    if(response.data) {
        return employeeId
    }

    return response.data
}


const employeeService = {
    createEmployee,
    getEmployees,
    getEmployee,
    deleteEmployee,
    updateEmployee
}

export default employeeService