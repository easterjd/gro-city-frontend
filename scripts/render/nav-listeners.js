document.addEventListener('DOMContentLoaded', () => {
  const logout = document.querySelector('#logout')
  logout.addEventListener('click', () => {
    localStorage.removeItem('token')
    window.location.href = './index.html'
  })
})
