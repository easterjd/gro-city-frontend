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
    <div class="card sticky-action blue">
      <div class="plant-image activator card-image waves-effect waves-block waves-light" style="background-image:url('${data.imageUrl}');">
        <span class="card-title activator">${data.scientific_name}</span>
      </div>
      <div class="card-action">
        <a class='dropup-trigger btn waves-effect waves-light' href='#' data-target='plant-id-${data.id}'>Add</a>
        <!-- Dropdown Structure -->
        <ul id='plant-id-${data.id}' class='dropdown-content add-dropdown'>
        </ul>
        </div>
        <div class="card-reveal">
          <span class="card-title black-text">${data.scientific_name}<i class="material-icons right">close</i></span>
          <p style="position: absolute; left: 10%;">
            Symbol: ${data.data.symbol}<br>
            Location: ${data.data.state}<br>
            Category: ${data.data.category}<br>
            Duration: ${data.data.duration}<br>
            Habit: ${data.data.habit}<br>
            Invasive: ${data.data.invasive}<br>
            Grow Period: ${data.data.growPeriod}<br>
            Flower Color: ${data.data.flowerColor}<br>
            Flower Conspicuous: ${data.data.flowerConsp}<br>
            Foliage Color: ${data.data.foliageColor}<br>
            Coarse Soil: ${data.data.coarseSoil}<br>
            Medium Soil: ${data.data.medSoil}<br>
            Fine Soil: ${data.data.fineSoil}<br>
            Moisture: ${data.data.moisture}<br>
            Shade: ${data.data.shade}<br>
            Temperature Minimum: ${data.data.tempMin} °F<br>
            Bloom Period: ${data.data.bloomPeriod}<br>
            Commercial Availability: ${data.data.commAvailability}
            <br>
            <br>
            <br>
            <br>
        </p>
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
