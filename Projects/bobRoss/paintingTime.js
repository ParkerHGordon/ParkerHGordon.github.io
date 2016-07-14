var canvas = document.getElementById("paintingCanvas"); 
var ctx = canvas.getContext("2d");
var mouseX, mouseY;
var paintMethod = "fillRect";
canvas.addEventListener('mousemove', paint, true);
function getMouseCoordinates(canvas, e) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

function paint (evt) {
    var pos = getMouseCoordinates(canvas, evt);
    ctx.fillStyle = "#6677ee";
    ctx.imageSmoothingEnabled = false;
    switch (paintMethod) {
            case "fillRect":
                ctx.fillRect(pos.x, pos.y, 4, 4);
                break;
            case "somethingElse":
                
                break;

    }
}