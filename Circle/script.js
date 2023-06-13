const in_cir = document.querySelector(".in_cir");
const scr = document.querySelector(".score");

let score = 0;

in_cir.addEventListener("click", function () {
  score++;
  scr.innerHTML = `Score : ${score}`;
});
