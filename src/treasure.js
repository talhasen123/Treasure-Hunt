class Treasure {
    constructor() {
        var x = -3;
        var y = -3;
        var specialTreasure = false;
    }

    spawnTreasure() {
        if ( Math.floor(Math.random() * 10) == 9)
        {
            this.specialTreasure = true;
        }
        else
        {
            this.specialTreasure = false;
        }
        this.x = Math.floor(Math.random() * (document.getElementById("gameBoard").width - 40));
        this.y = Math.floor(Math.random() * (document.getElementById("gameBoard").height - 40));
    }

    showTreasure() {
        var tempX = this.x; 
        var tempY = this.y
        var ctx = document.getElementById("gameBoard").getContext("2d");
        var drawing = new Image();
        if ( this.specialTreasure)
        {
            drawing.src = "shinyTreasure.png";
        }
        else
        {
            drawing.src = "treasure.png";
        }
        drawing.onload = function() { ctx.drawImage(drawing, tempX, tempY, 40, 40)}; 
    }

    checkTreasure(x, y) {
        if ( x >= this.x && x <= this.x + 40 && y >= this.y && y <= this.y + 40)
        {
            return true;
        }
        return false;
    }

    deleteTreasure() {
        document.getElementById("gameBoard").getContext("2d").clearRect(this.x, this.y, 40, 40);
    }
}