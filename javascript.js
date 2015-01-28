(function () {
  var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d');
window.addEventListener('resize', resizeCanvas, false);
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawStuff();
}
resizeCanvas();
function drawStuff() {
  function clock() {
    var from = new Date("2015-1-15 08:00:00");
    var to = new Date("2015-6-11 16:00:00");
    var now = new Date();
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    complete = 1-(to-now)/(to-from);
    ctx.restore();
    ctx.fillStyle = "red";
    ctx.fillRect(0,Math.floor(complete*canvas.height),Math.floor(canvas.width*(complete*canvas.height%1)),1);
    ctx.restore();
    ctx.fillStyle = "red";
    ctx.fillRect(0,0,canvas.width,Math.floor(complete*canvas.height));

    window.requestAnimationFrame(clock);
  }
  window.requestAnimationFrame(clock);
}
})();
