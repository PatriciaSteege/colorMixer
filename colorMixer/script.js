const wrapper = document.querySelector("#input-wrapper");
const btn = document.querySelector("button");
const url = "https://dummy-apis.netlify.app/api/color";
const redInput = document.querySelector("#red");
const greenInput = document.querySelector("#green");
const blueInput = document.querySelector("#blue");

wrapper.addEventListener("input", changeColor);

btn.addEventListener("click", function (e) {
  e.preventDefault();
  randomizeColor();
});

function changeColor() {
  let red = redInput.value;
  let green = greenInput.value;
  let blue = blueInput.value;

  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}
changeColor();

function randomizeColor() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((color) => {
      console.log(color);
      redInput.value = color.rgb.r;
      greenInput.value = color.rgb.g;
      blueInput.value = color.rgb.b;

      changeColor();
    });
}
randomizeColor();
