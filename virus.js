class virus {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.directions = [];
    }
    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }

            }

        }
        return found;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
   
        
    
    eat() {

        let grasses = this.chooseCell(1)
        let grassEats = this.chooseCell(2)
        let all = grasses.concat(grassEats)
        let oneCell = random(all)
        if (oneCell) {
            this.energy++;
            matrix[this.y][this.x] = 0;
            let oneCellX = oneCell[0];
            let oneCellY = oneCell[1];
            matrix[oneCellY][oneCellX] = 3;

            this.y = oneCellY;
            this.x = oneCellX;
            for (var i in grassArr) {
                if (oneCellX == grassArr[i].x && oneCellY == grassArr[i].y) {
                    grassArr.splice(i, 1);//[[1,2],[2,3]]
                    break;
                }
                for (var i in grassEatArr) {

                }
            }
        } else {
            this.move()
        }
    }
}