const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const img = new Image();
img.src = "30036.png";
const star = new Image();
star.src = "star-vector-png-transparent-image-pngpix-21.png";
var arrx = [10];
var arry = [10];
var Dwidth = 100;
var Dheight = 100;
var speed = 50;
var count = 0;
var length = 1;
var star_available = 1;
var starx;
var stary;
img.onload = function () {
  ctx.drawImage(img, x, y, Dwidth, Dheight);
};
img.onload = function () {
  ctx.drawImage(star, x, y, Dwidth, Dheight);
};

function step() {
  requestAnimationFrame(step);
}
function draw(z) {
  ctx.drawImage(img, arrx[z], arry[z], Dwidth, Dheight);
}
window.addEventListener("keydown", function (e) {
  if (count > 0) {
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
  for (var i = 1; i < length; i++) {
    if (arrx[0] == arrx[i] && arry[0] == arry[i]) {
      length = i;
      break;
    }
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (star_available) {
    starx = Math.random() * canvas.width;
    stary = Math.random() * canvas.height;
    ctx.drawImage(star, starx, stary, Dwidth / 2, Dheight / 2);
    star_available = 0;
  } else {
    ctx.drawImage(star, starx, stary, Dwidth / 2, Dheight / 2);
  }
  for (var i = 0; i < length; i++) {
    draw(i);
  }

  if (
    arrx[0] < starx + 40 &&
    arrx[0] > starx - 80 &&
    arry[0] < stary + 40 &&
    arry[0] > stary - 80
  ) {
    star_available = 1;
    count = 1;
  }
});
step();
/*자동으로 움직이기*/
