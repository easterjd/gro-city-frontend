//Used for my-boards.html
//Board and PlantWithinBoard Population
const template = require('../templates/boards.js');
const req = require('../requests/requests.js')

async function populateBoards(){
  const resp = await req.getBoards();
  const boards = resp.data.boards;

  const body = document.querySelector('#body');
  body.innerHTML = template.boardsBodyTemp()

  const boardsRow = document.querySelector('#boardsRow')
  boardsRow.innerHTML = template.boardsGroup(boards);
}

//passes a specific board, to create the board template with board.name as title, and plant cards
async function populatePlants(board){
  const resp = await req.getBoardPlants(board.id);
  const plants = resp.data.response;

  const body = document.querySelector('#body');
  body.innerHTML = template.boardBodyTemp(board)

  const plantsRow = document.querySelector('#plantsRow')
  plantsRow.innerHTML = template.plantsGroup(plants);
}



module.exports = {
  populateBoards,
  populatePlants
}
