const template = require('../templates/template');

const loginSignUpDiv = document.querySelector(".login-signup");

document.addEventListener("DOMContentLoaded", (event) => {
  loginSignUpDiv.innerHTML = template.loginTemplate();
  loadSignUp();
});

const loadSignUpTemplate = () => {
  loginSignUpDiv.innerHTML = template.signupTemplate();
  loadLogin();
}

const loadLogInTemplate = () => {
  loginSignUpDiv.innerHTML = template.loginTemplate();
  loadSignUp();
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
