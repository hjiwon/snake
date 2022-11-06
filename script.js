const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const img = new Image();
img.src = "30036.png";
var arrx = [10];
var arry = [10];
var Dwidth = 100;
var Dheight = 100;
var speed = 50;
var count = 0;
var length = 1;
var lastx = 1;
var lasty = 1;
img.onload = function () {
  ctx.drawImage(img, x, y, Dwidth, Dheight);
};

function step() {
  requestAnimationFrame(step);
}
function draw(z) {
  ctx.drawImage(img, arrx[z], arry[z], Dwidth, Dheight);
}
window.addEventListener("keydown", function (e) {
  if (count > 5) {
    count = 0;
    for (var i = length; i > 0; i--) {
      arrx[i] = arrx[i - 1];
      arry[i] = arry[i - 1];
    }
    length++;
  }
  for (var i = length; i > 0; i--) {
    arrx[i] = arrx[i - 1];
    arry[i] = arry[i - 1];
  }
  if (e.code === "Space") {
    for (var i = 0; i < length; i++) arrx[i] += speed;
    lastx = 1;
  }
  if (e.code == "ArrowLeft") {
    arrx[0] -= speed;
    lastx = -1;
  }
  if (e.code == "ArrowDown") {
    arry[0] += speed;
    lasty = 1;
  }
  if (e.code == "ArrowRight") {
    arrx[0] += speed;
    lastx = 1;
  }
  if (e.code == "ArrowUp") {
    arry[0] -= speed;
    lasty = -1;
  }

  count++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < length; i++) {
    draw(i);
  }
});
step();
/* 배열끼리 값 같아지면 그 뒤에 배열 값 날려버리기 (스네이크 몸통 닿으면) */
