const template = require('../templates/template');
const authorize = require('../authorization/authorize.js');

const loginSignUpDiv = document.querySelector(".login-signup");

document.addEventListener("DOMContentLoaded", (event) => {
  loginSignUpDiv.innerHTML = template.loginTemplate();
  loadSignUp();
  loadLogInTemplate();
});

const loadSignUpTemplate = () => {
  loginSignUpDiv.innerHTML = template.signupTemplate();
  loadLogin();
  const signupBtn = document.querySelector('.signup-btn');
  authorize.signupEvent(signupBtn);
}

const loadLogInTemplate = () => {
  loginSignUpDiv.innerHTML = template.loginTemplate();
  loadSignUp();
  const loginBtn = document.querySelector('.login-btn');
  authorize.loginEvent(loginBtn);
}

const loadLogin = () => {
  const loginLink = document.querySelector(".login-link");
  loginLink.addEventListener("click", () => {
    loadLogInTemplate();
  })
}

const loadSignUp = () => {
  const signUpLink = document.querySelector(".create-account-link");
  signUpLink.addEventListener("click", () => {
    loadSignUpTemplate();
  })
}
