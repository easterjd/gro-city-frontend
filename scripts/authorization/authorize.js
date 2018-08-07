const request = require('../requests/requests.js');

function loginEvent(loginBtn) {
  loginBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const email = document.querySelector('.login-email').value;
    const password = document.querySelector('.login-password').value;

    loginUser(email, password);
  })
}

function signupEvent(signupBtn) {
  signupBtn.addEventListener('click', (event) => {
    event.preventDefault()

    const first_name = document.querySelector('#first_name').value
    const last_name = document.querySelector('#last_name').value
    const email = document.querySelector('.signup-email').value
    const password = document.querySelector('.signup-password').value

    validateUser(first_name, last_name, email, password)
  })
}

function loginUser(email, password) {
  request.loginRequest({
      email,
      password
    })
    .then(response => {
      const token = response.data.token
      localStorage.setItem('token', token)
      document.location.replace("./views/welcome.html")
    })
    .catch(e => {
      console.log(e);
    })
}

function validateUser(first_name, last_name, email, password) {
  request.signUpRequest({
      first_name,
      last_name,
      email,
      password
    })
    .then(response => {
      if (response) loginUser(email, password)
    })
    .catch(e => {
      console.log(e);
    })
}

module.exports = {
  loginEvent,
  signupEvent
};
