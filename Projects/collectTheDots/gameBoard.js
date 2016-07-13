var board = document.getElementById("collectGameCanvas");
var ctx = board.getContext("2d");
var heroX = 250;
var heroY = 250;
var oldHeroX = 0;
var oldHeroY = 0;
var hero;
function gameFrame () {
    ctx.putImageData(hero, heroX, heroY);

}
function createHero () {
    hero = new Image(25,25); //figure out how to fix it later
    hero.src = 'theHero.png';
}
window.addEventListener('keydown', whatKey, true);
function whatKey (evt) {
    var edgy = 0;
    oldHeroX = heroX;
    oldHeroY = heroY;
    switch (evt.keyCode) {
        case 37: //left arrow
            heroX--;
            break;
        case 38: //up arrow
            heroY++;
            break;
        case 39: //right arrow
            heroX++;
            break;
        case 40: //down arrow
            heroY--;
            break;
    }
}