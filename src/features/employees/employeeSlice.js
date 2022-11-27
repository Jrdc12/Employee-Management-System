import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import employeeService from "./employeeService";

const initialState = {
    employees: [],
    employee: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

// Create new employee
export const createEmployee = createAsyncThunk(
	"employees/create",
	async (employeeData, thunkAPI) => {
		try {
            const token = thunkAPI.getState().auth.token;
			return await employeeService.createEmployee(employeeData, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Get all employees
export const getEmployees = createAsyncThunk(
	"employees/getAll",
	async (_, thunkAPI) => {
		try {
            const token = thunkAPI.getState().auth.token;
			return await employeeService.getEmployees(token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Get employee by id
export const getEmployee = createAsyncThunk(
	"employees/get",
	async (employeeId, thunkAPI) => {
		try {
            const token = thunkAPI.getState().auth.token;
			return await employeeService.getEmployee(employeeId, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Update Employee by ID 
export const updateEmployee = createAsyncThunk(
    "employees/update",
    async (data, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.token;
            console.log("PLAYLOAD ---->", data) 
            const response = await employeeService.updateEmployee(data._id, data, token);
            return response

        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
)


// Delete employee
export const deleteEmployee = createAsyncThunk(
	"employees/delete",
	async (employeeId, thunkAPI) => {
		try {
            const token = thunkAPI.getState().auth.token;
			return await employeeService.deleteEmployee(employeeId, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);



export const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createEmployee.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createEmployee.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(createEmployee.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getEmployees.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getEmployees.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.employees = action.payload;
            })
            .addCase(getEmployees.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getEmployee.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getEmployee.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.employee = action.payload;
            })
            .addCase(getEmployee.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(deleteEmployee.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteEmployee.fulfilled, (state, action) => {
                state.isLoading = false;
                // delete employee
                state.isSuccess = true;
                state.employees = state.employees.filter((employee) => employee.id !== action.payload)
                console.log(action.payload)
                
            })
            .addCase(deleteEmployee.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(updateEmployee.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateEmployee.fulfilled, (state, action) => {
                state.isLoading = false;
                // update employee
                state.isSuccess = true;
                state.employees = state.employees.map((employee) => employee.id === action.payload.id ? action.payload : employee)
                
            })
            .addCase(updateEmployee.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            
    }
})

export const { reset } = employeeSlice.actions;
export default employeeSlice.reducer;