const moment=require('moment')

function boardsTemp(boards){
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Boards</title>

    <!-- CSS  -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
  </head>
  <body>
      <!-- PlaceHolder Nav -->
    <nav class="black" role="navigation">
      <div class="nav-wrapper container">
        <a id="logo-container" href="#" class="brand-logo">Gro.City</a>
        <ul class="right hide-on-med-and-down">
          <li><a href="#">Navbar Link</a></li>
        </ul>

        <ul id="nav-mobile" class="sidenav">
          <li><a href="#">Navbar Link</a></li>
        </ul>
        <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      </div>
    </nav>
    <!--/PlaceHolder Nav -->

    <!--Body -->
    <div class="body">

      <div class="row" id="boardNav">
        <div class="col s12">
          <h4 align="center">My Boards</h4>
        </div>
      </div>

      <div class="row" id="boardsRow">

      </div>
  </div>
      <!--/Body -->

    <!--Footer -->
    <footer class="page-footer teal" style="position: fixed; bottom: 0px; width: 100%;">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Company Bio</h5>
            <p class="grey-text text-lighten-4">!!!Placeholder!!!</p>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
        Made by <a class="brown-text text-lighten-3" href="http://materializecss.com">Gro.City</a>
        </div>
      </div>
    </footer>
      <!-- /Footer -->

    <!--  Scripts-->
    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="js/materialize.js"></script>
    <script src="js/init.js"></script>

    </body>
  </html>
  `
}

function boardCard(board){
  return `
  <div class="col s4" style="border: 1px solid #42a5f5;">
    <div class="container" align="center">
        <a class="waves-effect waves-teal btn-flat" style="padding-bottom: 50px;"><h5>Board Title</h5></a>
      <div class="divider"></div>
      <div class="row">
        <div class="col s6" align="center" >
        <a class="waves-effect waves-light btn white-text" style="top: 10px" href="#">Update Title</a>
      </div>
      <div class="col s6" align="center">
      <a class="waves-effect waves-light btn white-text" style="top: 10px" href="#">Delete Board</a>
      </div>
      </div>
    </div>
  </div>
  `
}

function boardTemp(board){
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Boards</title>

    <!-- CSS  -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
  </head>
  <body>
      <!-- PlaceHolder Nav -->
    <nav class="black" role="navigation">
      <div class="nav-wrapper container">
        <a id="logo-container" href="#" class="brand-logo">Gro.City</a>
        <ul class="right hide-on-med-and-down">
          <li><a href="#">Navbar Link</a></li>
        </ul>

        <ul id="nav-mobile" class="sidenav">
          <li><a href="#">Navbar Link</a></li>
        </ul>
        <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      </div>
    </nav>
    <!--/PlaceHolder Nav -->

    <!--Body -->
    <div class="body">

      <div class="row" id="boardNav">
        <div class="col s10 offset-s1">
          <h4 align="center">Board Name</h4>
        </div>
        <div class="col s1" align="right">
        <a class="waves-effect waves-light btn white-text" style="top: 30px" href="#">My Boards</a>
      </div>
      </div>

      <div class="row" id="plantsRow">

      </div>
  </div>
      <!--/Body -->

    <!--Footer -->
    <footer class="page-footer teal" style="position: fixed; bottom: 0px; width: 100%;">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Company Bio</h5>
            <p class="grey-text text-lighten-4">!!!Placeholder!!!</p>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
        Made by <a class="brown-text text-lighten-3" href="http://materializecss.com">Gro.City</a>
        </div>
      </div>
    </footer>
      <!-- /Footer -->

    <!--  Scripts-->
    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="js/materialize.js"></script>
    <script src="js/init.js"></script>

    </body>
  </html>
  `
}

function plantCard(plant){
  return `
  <div class="col s4">
      <div class="card medium blue">
      <div class="card-content activator blue darken-1 waves-effect waves-block waves-light">
        <span class="card-title activator grey-text text-darken-4">${plant.scientific_name}<i class="material-icons right">more_vert</i></span>
      </div>
        <a class="waves-effect waves-light btn white-text" href="#" style="position: absolute; bottom: 30px; right: 30px;">Remove</a>
      <div class="card-reveal">
        <span class="card-title black-text">${plant.scientific_name}<i class="material-icons right">close</i></span>
        <p style="position: absolute; left: 10%;">
          Symbol: ${plant.data.symbol}<br>
          Location: ${plant.data.state}<br>
          Category: ${plant.data.category}<br>
          Duration: ${plant.data.duration}<br>
          Habit: ${plant.data.habit}<br>
          Invasive: ${plant.data.invasive}<br>
          Grow Period: ${plant.data.growPeriod}<br>
          Flower Color: ${plant.data.flowerColor}<br>
          Flower Conspicuous: ${plant.data.flowerConsp}<br>
          Foliage Color: ${plant.data.foliageColor}<br>
          Coarse Soil: ${plant.data.coarseSoil}<br>
          Medium Soil: ${plant.data.medSoil}<br>
          Fine Soil: ${plant.data.fineSoil}<br>
          Moisture: ${plant.data.moisture}<br>
          Shade: ${plant.data.shade}<br>
          Temperature Minimum: ${plant.data.tempMin} °F<br>
          Bloom Period: ${plant.data.bloomPeriod}<br>
          Commercial Availability: ${plant.data.commAvailability}
      </p>
      </div>
    </div>
  </div>

  `
}

//returns either line 'Created ___ ago' or 'Updated ___ ago' depending on if the data has been updated or not
function timeFrom(board){
  const time;
  const timeLine;
  if(board.created_at===board.updated_at){ // board has yet to be updated
    time = moment(board.created_at).toNow(true);
    timeLine = `Created ${time} ago`;
  } else { //board has been updated
    time = moment(board.updated_at).toNow(true);
    timeLine = `Updated ${time} ago`;
  }
  return timeLine;
}

module.exports = {
  boardsTemp,
  boardCard,
  boardTemp,
  plantCard
}
