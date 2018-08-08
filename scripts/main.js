const render = require('./render/render');
const renderBoard = require('./render/boards.js');
const authorize = require('./authorization/authorize');
const renderPlants = require('./render/plants.js')
const request = require('./requests/requests.js')

if ( window.location.href === "http://127.0.0.1:58510/") {
  document.location.replace('/index.html')
}
