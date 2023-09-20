const wrapper = document.querySelector("#input-wrapper");
const btn = document.querySelector("button");
const url = "https://dummy-apis.netlify.app/api/color";
let redInput = document.querySelector("#red");
let greenInput = document.querySelector("#green");
let blueInput = document.querySelector("#blue");

wrapper.addEventListener("input", changeColor);

const changeColor = () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((color) => {
      console.log(color);
      redInput = color.rgb.r;
      greenInput = color.rgb.g;
      blueInput = color.rgb.b;
    });
};
changeColor();

btn.addEventListener("click", changeColor);
