const render = require('./render/render');
const renderBoard = require('./render/boards.js');
const authorize = require('./authorization/authorize');
const renderPlants = require('./render/plants.js')
const request = require('./requests/requests.js')

if ( window.location.href === "http://127.0.0.1:8080/") {
  document.location.replace('/index.html')
}
const lineDrawing1 = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutExpo',
  duration: 3000,
  delay: function(el, i) { return i * 600 },
  direction: 'alternate',
  loop: true
})
