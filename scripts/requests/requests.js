const baseURL = `http://localhost:5000/api`;

// API calls using axios
const loginRequest = (body) => axios.post(`${baseURL}/users/login`, body);
const signUpRequest = (body) => axios.post(`${baseURL}/users/signup`, body);

const plantRequest = () => axios.get(`${baseURL}/plants`)

// module.exports = {
//   loginRequest,
//   signUpRequest,
//   plantRequest
// };
