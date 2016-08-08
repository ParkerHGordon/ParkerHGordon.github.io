/*

made using this tutorial as a referance: https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript



*/






var canvas = document.getElementById("breakoutCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 5;
var dy = -5;
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
var lives = 3;

var leftPressed = false;
var rightPressed = false;

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1};
    }
}
function drawBricks () {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            if (bricks[c][r].status == 1) {
                var brickX = (c*(brickWidth + brickPadding)) + brickOffsetLeft;
                var brickY = (r*(brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX,brickY,brickWidth,brickHeight);
                ctx.fillStyle = '#44ff00';
                ctx.fill();
                ctx.closePath();
            }
                
        }
    }
}
function drawBall () {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle () {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();
}
function collisionDetection() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status == 1) {
                if (x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if (score == brickRowCount * brickColumnCount) {
                        alert('YOU WIN!!!');
                        document.location.reload();
                    }
                }
            }
            
        }
    }
}
function drawScore () {
    ctx.font = '16px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Score: ' + score, 8, 20);
}
function drawLives () {
    ctx.font = '16px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Lives: ' + lives, canvas.width - 65, 20);
}
function drawFrame () {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    collisionDetection();
    x += dx;
    y += dy;
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX +=7;
    }
    else if (leftPressed && paddleX > 0){
        paddleX -=7;
    }
    
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if (y + dy + ballRadius > canvas.height) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            lives--
            if (!lives) {
                alert('GAME OVER');
                document.location.reload();
            }
            else {
                x = canvas.width/2;
                y = canvas.height-30;
                dx = 5;
                dy = -5;
                paddleX = (canvas.width-paddleWidth)/2;
            }
            
        }
        
    }
    
    if(x + dx + -ballRadius < 0 || x + dx + ballRadius > canvas.width) {
        dx = -dx;
    } 
    requestAnimationFrame(drawFrame); //sometimes is bad?
}

//setInterval(drawFrame, 30); one way, but this other way is better, the tutorial says. (add something to end of draw function)
//oops, for some reason requestAnimationFrame(drawFrame); actually causes intense lag, so don't do that.
//or, it doesn't seem to be breaking now... why was it before?
drawFrame();



$(document).keydown(function(e) {
    //left: 37, up: 38, right: 39, down: 40.
  switch (e.which) {
        case 37: //left
            leftPressed = true;
            break;
        case 38: //up
            
            break;
        case 39: //right
            rightPressed = true;
            break;
        case 40: //down
            
            break;
        case 32: //space
            break;
  }
});
$(document).keyup(function(e) {
    switch (e.which) {
        case 37: //left
            leftPressed = false;
            break;
        case 39: //right
            rightPressed = false;
            break;
    }
});
$(document).mousemove(function(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > paddleWidth/2 && relativeX < canvas.width - paddleWidth/2) {
        paddleX = relativeX - paddleWidth/2;
    }
});