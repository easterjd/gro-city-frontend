const moment = require('moment')

function boardsBodyTemp(boards) {
  return `
  <div class="row" id="boardNav">
    <div class="col s12">
      <h4 class="white-text" align="center">My Boards</h4>
    </div>
   </div>

   <div class="row" id="boardsRow">
   </div>

   <div class="row" style="position: relative; bottom:10px;">
     <div class="col s12" align="right">
        <a class="btn-floating btn-large waves-effect waves-light red" id="populateNewBoardFormButton" name="0"><i class="material-icons">add</i></a>
      </div>
    </div>

      <div class="row" id="newBoardForm" >
      </div>

      <div class="row" id="clearSpace" >
        <br>
        <br>
        <br>
      </div>
`
}

function newBoardFormTemp(){
  return `
    <form class="col s3 offset-s9">
    <div class="card">
      <div class="container">
        <div class="row">
          <div class="col s12" align="center">
            <h5>Create New Board</h5>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="new-board-title" type="text" class="validate">
            <label for="new-board-title">Title</label>
          </div>
        </div>
        <div class="container" align="center">
          <button class="btn waves-effect waves-light" id="submitNewBoard" type="submit">Submit</button>
        </div>
        <br>
      </div>
    </div>
    </form>`
}

function boardsGroup(boards) {
  return boards.map(boardCard).join('')
}

function boardCard(board) {
  const timeLine = timeFrom(board);
  return `
  <div class="col s4 board-card">
    <div class="container" align="center">
        <a class="board-buttons waves-effect waves-teal btn-flat" name="${board.id}" style="padding-bottom: 50px;"><h5>${board.title}</h5></a>
      <div class="divider"></div>
      <div class="row">
      <div class="col s6" align="center" >
        <a class="waves-effect waves-light btn white-text update-board" data-board-id="${board.id}" style="top: 10px;" href="#">Update Title</a>
      </div>
      <div class="col s6" align="center">
      <a class="delete-board-buttons waves-effect waves-light btn white-text" name="${board.id}" style="top: 10px;" href="#">Delete Board</a>
      </div>
      </div>
      <p>${timeLine}</p>
    </div>
  </div>
  `
}

function boardBodyTemp(board) {
  return `
  <div class="row" id="boardNav">
    <div class="col s10 offset-s1">
      <h4 align="center">${board.title}</h4>
    </div>
    <div class="col s1" align="right">
      <a class="waves-effect waves-light btn white-text" style="top: 30px;" href="./my-boards.html">My Boards</a>
    </div>
  </div>

  <div class="row" id="plantsRow" name="${board.id}">
  </div>
  `
}

function plantsGroup(plants) {
  return plants.map(plantCard).join('')
}

function plantCard(plant) {
  return `
  <div class="col s4">
      <div class="card sticky-action blue">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="${plant.imageUrl}">
        <span class="card-title activator">${plant.scientific_name}</span>
      </div>
      <div class="card-action">
        <a name="${plant.id}" class="remove-plant-from-board waves-effect waves-light btn white-text" href="#">Remove</a>
        </div>
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
function timeFrom(board) {
  var time
  var timeLine
  if (board.created_at === board.updated_at) { // board has yet to be updated
    time = moment(board.created_at).toNow(true);
    timeLine = `Created ${time} ago`;
  } else { //board has been updated
    time = moment(board.updated_at).toNow(true);
    timeLine = `Updated ${time} ago`;
  }
  return timeLine;
}

function updateFormTemplate(title) {

  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.classList.add("new-title");
  input.setAttribute("value", `${title}`);
  input.setAttribute("style", `text-align:center;`);

  return input;

}

function saveTemplate() {
  return `
    <a class="waves-effect waves-light btn white-text save-board" style="top:10px;" href="#">Save Title</a>
  `
}

module.exports = {
  boardsBodyTemp,
  boardsGroup,
  boardCard,
  boardBodyTemp,
  plantsGroup,
  plantCard,
  saveTemplate,
  updateFormTemplate,
  newBoardFormTemp
}
