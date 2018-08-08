const renderBoards = require('./boards.js');

document.addEventListener('DOMContentLoaded', () => {
  setTimeout( () => {
    document.querySelector('#fill').setAttribute("fill", "white")
    Array.from(document.querySelectorAll('.btn-flat')).forEach
  }, 3000)
  const lineDrawing1 = anime({
    targets: '#lineDrawing .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutExpo',
    duration: 3000,
    delay: function(el, i) { return i * 600 },
    direction: 'alternate',
    loop: 1
  })
  renderBoards.renderMyBoards();
})
