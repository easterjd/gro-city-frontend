//Used for my-boards.html
//Board and PlantWithinBoard Population
const template = require('../templates/boards.js');
const req = require('../requests/requests.js')

if(window.location.href.indexOf("my-boards.html") > -1) {
  document.addEventListener('DOMContentLoaded', () => {
    populateBoards();
  })
}

async function populateBoards(){
  const resp = await req.getBoards();
  const boards = resp.data.boards;
  const body = document.querySelector('#body');
  body.innerHTML = template.boardsBodyTemp()

  const boardsRow = document.querySelector('#boardsRow')
  boardsRow.innerHTML = template.boardsGroup(boards);

  boardAction(boards);
  deleteBoardAction()
}

function deleteBoardAction(){
  const eachDeleteButton = document.querySelectorAll('.delete-board-buttons')

  eachDeleteButton.forEach(async function(button){
    button.addEventListener('click', async function(event){
      const id = button.getAttribute("name")
      const resp = await req.deleteBoard(id)
      populateBoards();
    })
  })
}

function boardAction(boards){
  const eachBoardButton = document.querySelectorAll('.board-buttons')

  eachBoardButton.forEach(function(button){

    button.addEventListener('click', async function(event){
      const id = button.getAttribute("name")
      const board = boards.find(obj => obj.id==id)
      const resp= await req.getBoardPlants(id)
      const plants = resp.data.response;

      const body = document.querySelector('#body');
      body.innerHTML = template.boardBodyTemp(board);

      const plantsRow = document.querySelector('#plantsRow')
      plantsRow.innerHTML = template.plantsGroup(plants)
    })
  })
}

function renderMyBoards(){
  const myBoardsButtons = Array.from(document.querySelectorAll('.myBoardsButton'))

  myBoardsButtons.forEach(button=>{
    button.addEventListener('click', function(event){
      event.preventDefault();
      document.location.replace("./views/my-boards.html")
    })
  })
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
  renderMyBoards,
  populateBoards,
  populatePlants
}
