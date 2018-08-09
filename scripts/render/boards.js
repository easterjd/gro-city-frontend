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
  updateBoards();
  deleteBoardAction();
  populateNewBoardForm();
}

function populateNewBoardForm(){
  const row = document.querySelector('#newBoardForm');

  const populateFormButton = document.querySelector('#populateNewBoardFormButton');

  populateFormButton.addEventListener('click', ()=>{
    const toggle = populateFormButton.getAttribute("name")
    if(toggle==="0"){//no form is up
      row.innerHTML=template.newBoardFormTemp();
      populateFormButton.setAttribute("name", "1")
      submitNewBoardAction();
    } else {
      row.innerHTML=""
      populateFormButton.setAttribute("name", "0")
    }
  })
}

function submitNewBoardAction(){
  const submit = document.querySelector('#submitNewBoard')
  submit.addEventListener('click', async function(event){
    event.preventDefault()
    const title = document.querySelector('#new-board-title').value
    const body = { title }
    const resp = await req.createBoard(body);
    populateBoards();
  })
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
function updateBoards() {
  const updateBoardBtns = Array.from(document.querySelectorAll(".update-board"));
  updateBoardBtns.forEach(btn => {
    btn.addEventListener("click", (event) => {
      event.target.parentNode.innerHTML = template.saveTemplate();
      const id = btn.getAttribute("data-board-id");
      const oldTitle = document.querySelector(`.board-buttons[name="${id}"]`);
      const replaceTitle = template.updateFormTemplate(oldTitle.firstChild.innerHTML);
      oldTitle.replaceWith(replaceTitle);

       const saveBtn = document.querySelector(".save-board");
       saveUpdate(id);
    })
  })
}

function saveUpdate(id) {
  const saveBtn = document.querySelector(".save-board");
  saveBtn.addEventListener("click", (event) => {
      const title = document.querySelector(".new-title").value;
    req.updateBoard(id, {title})
    .then((resp) => {
    populateBoards()
  });
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
