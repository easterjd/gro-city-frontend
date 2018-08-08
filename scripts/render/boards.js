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

module.exports = {
  populateBoards
}
