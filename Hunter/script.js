let obj = document.querySelector(".obj");
let obj1 = document.querySelector(".obj1");
let ri = document.querySelector(".right");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");

window.addEventListener("mousemove", function (e) {
  let angle = Math.atan2(e.clientY - window.innerHeight / 2, e.clientX - 0);
  obj.style.transform = "rotate(" + angle + "rad)";
});

ri.addEventListener("click", function (e) {
  let angle = Math.atan2(e.clientY - window.innerHeight / 2, e.clientX - 0);
  let top = e.clientY + window.scrollY;
  obj1.style.transform = "rotate(" + angle + "rad)";
  obj1.style.setProperty("--angle", `${angle}rad`);
  obj1.style.setProperty("--top", `${top}px`);
  obj1.style.display = "block";
  obj1.classList.remove("play");
  void obj1.offsetWidth;
  obj1.classList.add("play");
});

function update() {
  let arrow = obj1.getBoundingClientRect();
  let onnu = one.getBoundingClientRect();
  let rendu = two.getBoundingClientRect();
  let moonu = three.getBoundingClientRect();
  if (
    arrow.bottom >= onnu.top &&
    arrow.left <= onnu.right &&
    arrow.right >= onnu.left &&
    arrow.top <= onnu.bottom
  ) {
    one.style.display = "none";
  } else if (
    arrow.bottom >= rendu.top &&
    arrow.left <= rendu.right &&
    arrow.right >= rendu.left &&
    arrow.top <= rendu.bottom
  ) {
    two.style.display = "none";
  } else if (
    arrow.bottom >= moonu.top &&
    arrow.left <= moonu.right &&
    arrow.right >= moonu.left &&
    arrow.top <= moonu.bottom
  ) {
    three.style.display = "none";
  }
  if (
    one.style.display == "none" &&
    two.style.display == "none" &&
    three.style.display == "none"
  ) {
    one.style.display = "block";
    two.style.display = "block";
    three.style.display = "block";
  }
  requestAnimationFrame(update);
}
requestAnimationFrame(update);
