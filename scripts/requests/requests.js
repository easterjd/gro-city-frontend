const baseURL = `http://localhost:5000/api`;

// API calls using axios
const loginRequest = (body) => axios.post(`${baseURL}/users/login`, body);
const signUpRequest = (body) => axios.post(`${baseURL}/users/signup`, body);

const plantRequest = () => axios.get(`${baseURL}/plants`)
const plantPage = (body, page) => axios.post(`${baseURL}/plants/${page}`, body)

function getBoards() {
  const token = localStorage.getItem('token');
  return axios.get(`${baseURL}/boards`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
}

function createBoard(body) {
  const token = localStorage.getItem('token');
  return axios.post(`${baseURL}/boards`, body, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
}

function updateBoard(id, body) {
  const token = localStorage.getItem('token');
  return axios.patch(`${baseURL}/boards/${id}`, body, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
}

function deleteBoard(id) {
  const token = localStorage.getItem('token');
  return axios.delete(`${baseURL}/boards/${id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
}

function getBoardPlants(id) {
  const token = localStorage.getItem('token');
  return axios.get(`${baseURL}/boards/${id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
}

function deletePlantFromBoard(boardId, plantId) {
  const token = localStorage.getItem('token');
  return axios.delete(`${baseURL}/boards/${boardId}/plants/${plantId}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
}

function addPlant(boardId, plantId) {
  const token = localStorage.getItem('token');
  return axios(`${baseURL}/boards/${boardId}/plants/${plantId}`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`
    }
  })
}

module.exports = {
  loginRequest,
  signUpRequest,
  getBoards,
  createBoard,
  updateBoard,
  deleteBoard,
  getBoardPlants,
  plantRequest,
  plantPage,
  deletePlantFromBoard,
  addPlant
}
