const signupTemplate = () => {
  return `<section class="signup">
    <h3 class="signup-heading">Sign Up</h3>
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="first_name" type="text" class="validate">
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate">
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      <div>
        <button class="btn waves-effect waves-light" type="submit" name="action">Sign Up
        </button>
        <a class="login-link" href="#">Login</a>
      </div>
    </form>
  </section>`;
}

const loginTemplate = () => {
  return `<section class="login">
    <h3 class="login-heading">Log In</h3>
    <form>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      <div>
        <button class="btn waves-effect waves-light" type="submit" name="action">Login
        </button>
        <a class="create-account-link" href="#">Create New Account</a>
      </div>
    </form>
  </section>`;
}

module.exports = {
  signupTemplate,
  loginTemplate
};
