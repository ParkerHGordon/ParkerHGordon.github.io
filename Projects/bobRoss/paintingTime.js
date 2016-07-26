
// used this example tutorial to help me out when I was stuck: http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/#demo-simple



var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d"); 
var paint = false;
var mouseX;
var mouseY;
var posX = new Array();
var posY = new Array();
var posDrag = new Array();
var rect = canvas.getBoundingClientRect();

function addPos (x, y, dragging) {
    posX.push(x);
    posY.push(y);
    posDrag.push(dragging);
}

function redraw () {
    ctx.strokeStyle = '#6677ee';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 5;
    for (var i = 0; i < posX.length; i++) {
        ctx.beginPath();
        if(posDrag[i] && i){
            ctx.moveTo(posX[i-1], posY[i-1]);
        }else{
            ctx.moveTo(posX[i], posY[i]);
        }
        ctx.lineTo(posX[i], posY[i]);
        ctx.closePath();
        ctx.stroke();
    }
    
}
$('#canvas').on('mousedown', function (e) {
    
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    
    paint = true;
    addPos(mouseX, mouseY);
    redraw();
});
$('#canvas').on('mousemove', function (e) {
    if (paint === true) {
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
        addPos(mouseX, mouseY, true);
        redraw();
    }
    
});

$('#canvas').on('mouseup', function (e) {
    paint = false;
    
});

$('#canvas').on('mouseleave', function (e) {
    paint = false;
});
