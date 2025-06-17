
function toggleMenu() {
  const menu = document.getElementById('glitchMenu');
  menu.classList.toggle('show');
}

function navigateTo(link) {
  document.body.classList.add('glitch-transition');
  setTimeout(() => { window.location.href = link; }, 500);
}
