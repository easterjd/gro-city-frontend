document.addEventListener('DOMContentLoaded', () => {
  const lineDrawing1 = anime({
    targets: '#lineDrawing .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutExpo',
    duration: 3000,
    delay: function(el, i) { return i * 600 },
    direction: 'alternate',
    loop: true
  })

})
