const css = document.querySelector("h3.colors");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");



const change = () => {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.innerHTML =  `linear-gradient(to right, ${color1.value}, ${color2.value})`;
};

const changeRand = (data) => {
  console.log(data.colors);
  color1.value = '#' + data.colors[0].hex;
    color2.value = '#' + data.colors[1].hex;
  body.style.background = `linear-gradient(to right, #${data.colors[0].hex}, #${data.colors[1].hex})`;
  css.innerHTML = `linear-gradient(to right, #${data.colors[0].hex}, #${data.colors[1].hex})`;
};

const randomize = (event) => {
  fetch('http://www.colr.org/json/colors/random/2')
  .then(resp => resp.json())
  .then(data => changeRand(data));

}

color1.addEventListener("input", change);

color2.addEventListener("input", change);
