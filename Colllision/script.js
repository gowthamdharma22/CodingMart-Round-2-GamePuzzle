const player = document.querySelector(".player");
const object = document.querySelector(".object");

window.addEventListener("mousemove", function (e) {
  let pla = player.getBoundingClientRect();
  let obj = object.getBoundingClientRect();

  player.style.left = e.clientX + "px";
  player.style.top = e.clientY + "px";

  if (
    pla.bottom >= obj.top &&
    pla.left <= obj.right &&
    pla.right >= obj.left &&
    pla.top <= obj.bottom
  ) {
    object.classList.add("remove");
  } else {
    object.classList.remove("remove");
  }
});
