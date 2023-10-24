let ball = document.getElementById("ball");

function up() {
  ball.style.bottom = "250px";
}

function down() {
  ball.style.bottom = "50px";
}

function left() {
  ball.style.left = "250px";
}

function right() {
  ball.style.right = "50px";
}
document.addEventListener("keydown", up);
document.addEventListener("keyup", down);
document.addEventListener("mousedown", left);
//document.addEventListener("", right);
