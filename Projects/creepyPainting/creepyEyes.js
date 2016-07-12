var picture = document.getElementById("art");
window.onmousemove = function getMouseCoordinates(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("coordinates").innerHTML = coor;
};
