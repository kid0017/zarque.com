
function toggleSystemBar() {
  const bar = document.getElementById("systemBar");
  bar.style.display = bar.style.display === "flex" ? "none" : "flex";
}

function glitchTransition(e) {
  e.preventDefault();
  document.body.classList.add("glitch-out");
  setTimeout(() => {
    window.location.href = e.target.href;
  }, 400);
}
