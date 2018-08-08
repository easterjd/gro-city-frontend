const template = require('../templates/template');
const authorize = require('../authorization/authorize.js');
const validation = require('../validation/validation.js');

const loginSignUpDiv = document.querySelector(".login-signup");

document.addEventListener("DOMContentLoaded", (event) => {
  loginSignUpDiv.innerHTML = template.loginTemplate();
  loadSignUp();
  loadLogInTemplate();
});

const loadSignUp = () => {
  const signUpLink = document.querySelector(".create-account-link");
  signUpLink.addEventListener("click", () => {
    loadSignUpTemplate();
  })
}

const loadSignUpTemplate = () => {
  loginSignUpDiv.innerHTML = template.signupTemplate();
  loadLogin();
  const signupBtn = document.querySelector('.signup-btn');
  authorize.signupEvent(signupBtn);
  validation.addNameValidation();
  validation.addEmailValidation();
  validation.addPasswordValidation();
}

const loadLogin = () => {
  const loginLink = document.querySelector(".login-link");
  loginLink.addEventListener("click", () => {
    loadLogInTemplate();
  })
}

const loadLogInTemplate = () => {
  loginSignUpDiv.innerHTML = template.loginTemplate();
  loadSignUp();
  const loginBtn = document.querySelector('.login-btn');
  authorize.loginEvent(loginBtn);
  validation.addNameValidation();
  validation.addEmailValidation();
  validation.addPasswordValidation();
}
