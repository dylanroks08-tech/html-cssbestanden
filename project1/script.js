function showCookieWall() {
    document.getElementById('cookiewall').style.display = 'block';
    document.getElementById(`overlay`).style.display = 'block';
}

function checkage() {
    let age = document.getElementById('ageinput').value;
    if (age >= 16) {
        window.location.href="homepage.html";
    } else {
        document.getElementById('cookiewall').style.display = 'none';
        document.getElementById(`overlay`).style.display = 'none';
        document.getElementById('redpage').style.display = 'block';
    }
}

     var myGamePiece;
     var myObstacles = [];
     var myScore;

     function startGame() {
     myGamePiece = new component(30, 30, "red", 10, 120);
     myGamePiece.gravity = 0.05;
     myScore = new component("30px", "Consolas", "black", 280, 40, "text");
     myGameArea.start();}

     var myGameArea = {
     canvas : document.createElement("canvas"),
     start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
     clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
     }
     }

     function component(width, height, color, x, y, type) {
     this.type = type;
     this.score = 0;
     this.width = width;
     this.height = height;
     this.speedX = 0;
     this.speedY = 0;    
     this.x = x;
     this.y = y;
     this.gravity = 0;
     this.gravitySpeed = 0;
     this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
     }
     this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
     }
     this.hitBottom = function() {
        var rockbottom = myGameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = 0;
        }
     }
     this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
     }
     }

     function updateGameArea() {
     var x, height, gap, minHeight, maxHeight, minGap, maxGap;
     for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            return;
        } 
      }
     myGameArea.clear();
     myGameArea.frameNo += 1;
     if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(10, height, "green", x, 0));
        myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
     }
     for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += -1;
        myObstacles[i].update();
     }
     myScore.text="SCORE: " + myGameArea.frameNo;
     myScore.update();
     myGamePiece.newPos();
     myGamePiece.update();}

     function everyinterval(n) {
     if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
     return false;}

     function accelerate(n) {
     myGamePiece.gravity = n;}

     function clearmove() {
        myGamePiece.gravity = 0
        }
    
    function resetGame() {
        myGamePiece.gravity = 0;
        myGameArea.frameNo = 0;
        myObstacles = [];
    }

    function pauseGame() {
        clearInterval(myGameArea.interval);
    }

    function resumeGame() {
        myGameArea.interval = setInterval(updateGameArea, 20);
    }

    function scoreboard(setitem = true) {
        var score = myGameArea.frameNo;
        localStorage.setItem("score", score);
        var highscore = localStorage.getItem("highscore");
        if (highscore === null || score > highscore) {
            localStorage.setItem("highscore", score);
        }
    }
    
    function showScoreboard() {
        var highscore = localStorage.getItem("highscore");
        if (highscore !== null) {
            alert("High Score: " + highscore);
        } else {
            alert("No high score yet!");
        }
    }
    
    function addScore(score) {
        var currentScore = localStorage.getItem("score");
        if (currentScore === null) {
            localStorage.setItem("score", score);
        } else {
            localStorage.setItem("score", parseInt(currentScore) + score);
        }
    }

    function getScore() {
        var score = localStorage.getItem("score");
        return score !== null ? parseInt(score) : 0;
    }

    function resetScore() {
        localStorage.removeItem("score");
        localStorage.removeItem("highscore");
    }
    
    function game() {
        var Canvas = document.getElementById("gamCanvas");
        var ctx = Canvas.getContext("2d");
        var score = getScore();
        ctx.clearRect(0, 0, Canvas.width, Canvas.height);
        myScore = new component("30px", "Consolas", "black", 280, 40, "text");
        ctx.fillText("Score: " + score, 10, 30);
        var highscore = localStorage.getItem("highscore");
        if (highscore !== null) {
            ctx.fillText("High Score: " + highscore, 10, 60);
        }
    }

    