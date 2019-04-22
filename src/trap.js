class Trap {
    constructor() {
        this.x = -3;
        this.y = -3;
    }

    spawnTrap() {
        this.x = Math.floor(Math.random() * (document.getElementById("gameBoard").width - 40));
        this.y = Math.floor(Math.random() * (document.getElementById("gameBoard").height - 40));
    }

    showTrap() {
        var tempX = this.x; 
        var tempY = this.y
        var ctx = document.getElementById("gameBoard").getContext("2d");
        var drawing = new Image();
        drawing.src = "trap.png";
        drawing.onload = function() { ctx.drawImage(drawing, tempX, tempY, 40, 40)}; 
    }

    checkTrap(x, y) {
        if ( x >= this.x && x <= this.x + 40 && y >= this.y && y <= this.y + 40)
        {
            return true;
        }
        return false;
    }

    deleteTrap() {
        document.getElementById("gameBoard").getContext("2d").clearRect(this.x, this.y, 40, 40);
    }
}