
//maybe go with mouse movement instead to be more interesting?




var canvas = document.getElementById('collectCanvas');
var ctx = canvas.getContext('2d');
var locationX = 0;
var locationY = 0;
//var locations = [{x: 133, y: 72}, {x: 266, y: 72}, {x: 399, y: 72}, {x: 133, y: 172}, {x: 266, y: 172}, {x: 399, y: 172}];
var score = 0;
var time; 
var timeToTime;
var heroX = canvas.width/2;
var heroY = canvas.height/2 + 20;
var heroW = 20;
var heroH = 20;
var heroDX = 0;
var heroDY = 0;
var shinyX = canvas.width/2;
var shinyY = canvas.height/2 - 80;
var shinyR = 30;
var shinyDX = 0;
var shinyDY = 0;
var timeID = '';
var gameDone = 0;

function drawHero () {
    
    ctx.beginPath();
    ctx.rect(heroX-heroW/2, heroY-heroH/2, heroW, heroH);
    ctx.fillStyle = '#ff0909';
    ctx.fill();
    ctx.closePath();
    
}
function drawShiny () {
    ctx.beginPath();
    ctx.rect(shinyX-shinyR/2, shinyY-shinyR/2, shinyR, shinyR);
    ctx.fillStyle = '#fab420';
    ctx.fill();
    ctx.closePath();
    
    
}
function drawScore (num, x, y) {
    ctx.font = '16px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Score: ' + num, x, y);
}
function drawFinalScore (num, x, y) {
    ctx.font = '22px Arial';
    ctx.fillStyle = '#fab420';
    ctx.fillText('Your Final Score: ' + num, x, y);
}
function drawTime () {
    
    ctx.font = '16px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(time + ' seconds left!', 280, 15);
    
    
}
function timePass() {
    if (score > 0) {
        time -= 1;
    }
    
}
function heroCollision () {
    if (((heroX+heroW/2 <= shinyX+shinyR/2 && heroX + heroW/2 >= shinyX-shinyR/2) || (heroX-heroW/2 >= shinyX-shinyR/2 && heroX-heroW/2 <= shinyX+shinyR/2)) && ((heroY+heroH/2 <= shinyY+shinyR/2 && heroY+heroH/2 >= shinyY-shinyR/2) || (heroY-heroH/2 >= shinyY-shinyR/2 && heroY-heroH/2 <= shinyY+shinyR/2))) {
        
        locationX = Math.floor((Math.random() * (400 - shinyR)) + shinyR);
        locationY = Math.floor((Math.random() * (360 - shinyR)) + shinyR);
        shinyX = locationX;
        shinyY = locationY;
        score += 10;
        if (score > 0 && timeID == '') {
            score = 10;
            time = 30;
            timeToTime = true;
            timeID = setInterval(timePass, 1000);
            gameDone = 0;
        }
        
    }
}
function drawFrame () {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawHero();
    drawShiny();
    if (time == 0) {
        clearInterval(timeID);
        timeID = '';
        drawFinalScore(score, canvas.width/2 - 90, canvas.height/2 - 120);
        if (gameDone == 0) {
            timeToTime = false;
            heroX = canvas.width/2;
            heroY = canvas.height/2 + 20;
            shinyX = canvas.width/2;
            shinyY = canvas.height/2 - 80;
            gameDone = 1;
        }
        //alert('You got ' + score + ' points in 30 seconds!');
        //document.location.reload();
        
    }
    else {
        drawScore (score, 15, 15);
    }
    if (timeToTime) {
        drawTime();
    }
    
    heroCollision();
    if (heroX + heroDX - heroW/2 > 0 && heroX + heroDX + heroW/2 < canvas.width) {
        heroX += heroDX;
    }
    if (heroY + heroDY - heroH/2 > 0 && heroY + heroDY + heroH/2 < canvas.height) {
        heroY += heroDY;
    }
    
    
    
    
    //requestAnimationFrame(drawFrame); //use with the //drawFrame();

}
setInterval(drawFrame, 20);


//drawFrame();

$(document).keydown(function (e) {
    switch (e.which) {
        case 37: //left
            heroDX = -3;
            break;
        case 38: //up
            heroDY = -3;
            break;
        case 39: //right
            heroDX = 3;
            break;
        case 40: //down
            heroDY = 3;
            break;
        case 32: //space
            
            break;
    }
});
$(document).keyup(function (e) {
    switch (e.which) {
        case 37:
            if (heroDX==-3)
            heroDX = 0;
            break;
        case 39:
            if (heroDX == 3)
            heroDX = 0;
            break;
        case 38:
            if (heroDY == -3)
            heroDY = 0;
            break;
        case 40:
            if (heroDY == 3)
            heroDY = 0;
            break;
    }
    
});