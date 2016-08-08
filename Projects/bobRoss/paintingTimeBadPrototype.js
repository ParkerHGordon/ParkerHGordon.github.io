var canvas = document.getElementById("paintingCanvas"); 
var ctx = canvas.getContext("2d");
var paintLoop;
canvas.addEventListener('mousedown', timeToPaint, true);
canvas.addEventListener('mouseup', timeToNotPaint, true);
function getMouseCoordinates(canvas, e) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

function timeToPaint (evt) {
    paintLoop = setInterval(paint(evt), 1000);// for some reason won't loop
}
function timeToNotPaint(evt) {
    clearInterval(paintLoop);
    alert("cleared");
}
function paint (evt2) {
    var pos = getMouseCoordinates(canvas, evt2);
    ctx.fillStyle = "#6677ee";
    ctx.imageSmoothingEnabled = false;
    ctx.fillRect(pos.x, pos.y, 4, 4);
}