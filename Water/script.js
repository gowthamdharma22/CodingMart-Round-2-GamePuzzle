const pipe1 = document.querySelector(".pipe1");
const pipe2 = document.querySelector(".pipe2");
const pipe3 = document.querySelector(".pipe3");
const mix = document.querySelector(".mix");
const tank1 = document.querySelector(".tank1");
const tank2 = document.querySelector(".tank2");
const tank3 = document.querySelector(".tank3");
const dir1 = document.querySelector(".dir1");
const dir2 = document.querySelector(".dir2");
const dir3 = document.querySelector(".dir3");

let c1 = 0;
let n1 = 1;
let n2 = 1;
let n3 = 1;
pipe1.addEventListener("click", function () {
  if (c1 % 2 !== 0) {
    mix.classList.remove("play");
    mix.classList.add("pause");
    tank1.classList.remove("play");
    tank1.classList.add("pause");
    dir1.classList.remove("show");
    c1++;
  } else {
    mix.classList.add("play");
    tank1.classList.add("play");
    dir1.classList.add("show");
    c1++;
    if (n1 <= 255 && n2 < 2 && n3 < 2) {
      n1 += 255;
      mix.style.backgroundColor = `rgb(${n1},0,0)`;
    } else {
      if (n1 <= 255) {
        n1 += 50;
        mix.style.backgroundColor = `rgb(${n1},${n2},${n3})`;
      }
    }
  }
});

let c2 = 0;
pipe2.addEventListener("click", function () {
  if (c2 % 2 !== 0) {
    mix.classList.remove("play");
    mix.classList.add("pause");
    tank2.classList.remove("play");
    tank2.classList.add("pause");
    dir2.classList.remove("show");
    c2++;
  } else {
    mix.classList.add("play");
    tank2.classList.add("play");
    dir2.classList.add("show");
    c2++;
    if (n2 <= 255 && n1 < 2 && n3 < 2) {
      n2 += 255;
      mix.style.backgroundColor = `rgb(0,${n2},0)`;
    }else {
      if (n2 <= 255) {
        n2 += 50;
        mix.style.backgroundColor = `rgb(${n1},${n2},${n3})`;
      }
    }
  }
});

let c3 = 0;
pipe3.addEventListener("click", function () {
  if (c3 % 2 !== 0) {
    mix.classList.remove("play");
    mix.classList.add("pause");
    tank3.classList.remove("play");
    tank3.classList.add("pause");
    dir3.classList.remove("show");
    c3++;
  } else {
    mix.classList.add("play");
    tank3.classList.add("play");
    dir3.classList.add("show");
    c3++;
    if (n3 <= 255 && n2 < 2 && n1 < 2) {
      n3 += 255;
      mix.style.backgroundColor = `rgb(0,0,${n3})`;
    } else {
      if (n3 <= 255) {
        n3 += 50;
        mix.style.backgroundColor = `rgb(${n1},${n2},${n3})`;
      }
    }
  }
});


