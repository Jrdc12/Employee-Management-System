import axios from "axios";
// import https from "https";

// change this later to the actual api url
const url = "//localhost:4000/api/user/signup";
const urlLogin = "//localhost:4000/api/user/login";

// Register user
const register = async (userData) => {
	const response = await axios.post(url, userData);

	console.log("RESPONSE RESPONSE ", response);

	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));
	}
	return response.data;
};


// Login user
const login = async (userData) => {
	const response = await axios.post(urlLogin, userData);

	console.log("RESPONSE RESPONSE ", response);

	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));
	}
	return response.data;
};

// Logout user
const logout = () => {
	localStorage.removeItem("user");
}

const authService = {
	register,
	logout,
	login,
};

export default authService;
