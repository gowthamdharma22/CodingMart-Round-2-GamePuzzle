let form1 = document.getElementById("l");
let show1 = document.querySelector(".show1");
let form2 = document.getElementById("r");
let show2 = document.querySelector(".show2");
let gody1 = document.querySelector(".left");
let gody2 = document.querySelector(".right");
let gody3 = document.querySelector(".show");
let arr1 = [];
let arr2 = [];
let i = 0,
  j = 0;
form1.addEventListener("submit", function (event) {
  event.preventDefault();
  let a = document.getElementById("ip1");
  arr1.push(a.value);
  a.value = "";
  const p = document.createElement("p");
  const br = document.createElement("br");
  p.classList.add("l_show");
  const t = document.createTextNode(arr1[i]);
  i += 1;
  p.appendChild(t);
  gody1.appendChild(p);
  gody1.appendChild(br);
});
form2.addEventListener("submit", function (event) {
  event.preventDefault();
  let a = document.getElementById("ip2");
  arr2.push(a.value);
  a.value = "";
  const p = document.createElement("p");
  const br = document.createElement("br");
  p.classList.add("r_show");
  const t = document.createTextNode(arr2[j]);
  for (let a = 0; a < arr1.length; a++) {
    let tot = parseInt(arr1[a]) + parseInt(arr2[j]);
    if (tot >= 100) {
      const p = document.createElement("p");
      const t = document.createTextNode(`${arr2[j]}+${arr1[a]}=${tot}`);
      p.appendChild(t);
      gody3.appendChild(p);
    }
  }
  j += 1;
  p.appendChild(t);
  gody2.appendChild(p);
  gody2.appendChild(br);
});
