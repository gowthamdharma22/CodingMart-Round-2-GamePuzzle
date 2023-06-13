const ball = document.querySelector(".circle");
const place = document.querySelector(".top");
const obj = document.querySelector(".mov");
const scr = document.querySelector(".score");

//find collision of two moving objects using requestAnimationFrame becasue to make the ball and obj x y in live
let score = 0;
function update() {
  let ballBound = ball.getBoundingClientRect();
  let objBound = obj.getBoundingClientRect();
  if (
    ballBound.bottom >= objBound.top &&
    ballBound.left <= objBound.right &&
    ballBound.right >= objBound.left &&
    ballBound.top <= objBound.bottom
  ) {
    score++;
    console.log("Collision"+" "+score);
    scr.innerHTML = `Score : ${score}`;
    obj.style.display = "none";
  } else {
    obj.style.display = "block";
  }
  requestAnimationFrame(update);
}
requestAnimationFrame(update);

//this makes the ball to initiate from a 'place' and to start animate
place.addEventListener("click", function (e) {
  ball.classList.add("c-show");
  const x = e.clientX;
  const y = e.clientY;
  ball.style.top = y + "px";
  ball.style.left = x + "px";
  window.addEventListener("animationend", function () {
    ball.classList.remove("c-show");
  });
});
