const signupTemplate = () => {
  return `<section class="signup">
    <h3 class="signup-heading">Sign Up</h3>
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input class="name" id="first_name" type="text" class="validate">
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input class="name" id="last_name" type="text" class="validate">
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input class="signup-email" id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input class="signup-password" id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      <div>
        <button class="btn waves-effect waves-light signup-btn" type="submit" name="action">Sign Up
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
          <input class="login-email" id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input class="login-password" id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      <div>
        <button class="btn waves-effect waves-light login-btn" type="submit" name="action">Login
        </button>
        <a class="create-account-link" href="#">Create New Account</a>
      </div>
    </form>
  </section>`;
}

const cardTemplate = (data) => {
  return `<div class="col s4">
    <div class="card">
      <div class="card-image">
        <img src="http://via.placeholder.com/350x150">
        <span class="card-title">Card Title</span>
      </div>
      <div class="card-content">
        <h6>${data.scientific_name}</h6>
      </div>
      <div class="plant-card-footer">
        <div class="card-action">
          <a href="#" class="waves-effect waves-light btn">Add</a>
        </div>
        <div class="card-info">
          <a href="#" class="waves-effect waves-light btn">Info</a>
        </div>
      </div>
    </div>
  </div>`
}

module.exports = {
  signupTemplate,
  loginTemplate,
  cardTemplate
};
