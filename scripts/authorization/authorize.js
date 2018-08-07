const request = require('../requests/requests.js');
const validation = require('../validation/validation.js');

function loginEvent(loginBtn) {
  loginBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const email = document.querySelector('.login-email').value;
    const password = document.querySelector('.login-password').value;

    if (!validation.emailFormat.test(email) || !validation.passwordFormat.test(password)) {
      validation.shakeNode(event.target)
      return validation.showAndFadeError("Email/Password is not in correct format")
    }

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

    if (!validation.nameFormat.test(first_name) || !validation.nameFormat.test(last_name)
        || !validation.emailFormat.test(email) || !validation.passwordFormat.test(password)) {
      validation.shakeNode(event.target)
      return validation.showAndFadeError("The values entered are not in correct format")
    }

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
      validation.showAndFadeError(e.response.data.error);
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
      validation.showAndFadeError(e.response.data.error);
    })
}

module.exports = {
  loginEvent,
  signupEvent
};
