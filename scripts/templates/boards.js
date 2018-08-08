const moment = require('moment')

function boardsBodyTemp(boards) {
  return `
  <div class="row" id="boardNav">
    <div class="col s12">
      <h4 align="center">My Boards</h4>
    </div>
   </div>

   <div class="row" id="boardsRow">
   </div>
  `
}

function boardsGroup(boards) {
  return boards.map(boardCard).join('')
}

function boardCard(board) {
  const timeLine = timeFrom(board);
  return `
  <div class="col s4" style="border: 1px solid #42a5f5;">
    <div class="container" align="center">
        <a class="waves-effect waves-teal btn-flat" style="padding-bottom: 50px;"><h5>${board.title}</h5></a>
      <div class="divider"></div>
      <div class="row">
      <div class="col s6" align="center" >
        <a class="waves-effect waves-light btn white-text update-board" data-board-id="${board.id} style="top: 10px" href="#">Update Title</a>
      </div>
      <div class="col s6" align="center">
      <a class="waves-effect waves-light btn white-text" style="top: 10px" href="#">Delete Board</a>
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
      <a class="waves-effect waves-light btn white-text" style="top: 30px" href="#">My Boards</a>
    </div>
  </div>

  <div class="row" id="plantsRow">
  </div>
  `
}

function plantsGroup(plants) {
  return plants.map(plantCard).join('')
}

function plantCard(plant) {
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
  return `<input type="text" class="new-title">${title}`
}

function saveTemplate() {
  return `
    <div class="col s6" align="center">
    <a class="waves-effect waves-light btn white-text save-board" style="top:10px" href="#">Save Title</a>
    </div>
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
  updateFormTemplate
}
