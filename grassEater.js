class GrassEater {
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
    move() {
        if (this.energy > 0) {
            this.energy--;
            let emptyCells = this.chooseCell(0) //[[1,2],[2,5]] [3,2] this.x = 3, this.y = 2
            let oneEmptyCell = random(emptyCells) //[1,2] [4,3] neighX = 4,neighY = 3
            if (oneEmptyCell) {
                matrix[this.y][this.x] = 0
                let newX = oneEmptyCell[0]
                let newY = oneEmptyCell[1]
                matrix[newY][newX] = 2
                this.x = newX
                this.y = newY

            }
        }
        else {
            this.die();
        }
    }
    mul() {
        if (this.energy >= 12) {
            var newCell = random(this.chooseCell(0)); //newCell-1 datark harevan
            if (newCell) { //[3,4]
                var newGrassEater = new GrassEater(newCell[0], newCell[1]);
                grassEaterArr.push(newGrassEater);
                matrix[newCell[1]][newCell[0]] = 2;
                this.energy = 5

            }
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in grassEatArr) {
            if (this.x == grassEatArr[i].x && this.y == grassEatArr[i].y) {
                grassEatArr.splice(i, 1);
                break;
            }
        }
    }

    eat() {
        let grasses = this.chooseCell(1)
        let onefain = random(grasses)
        if (onefain) {
            this.energy++;
            matrix[this.y][this.x] = 0;
            let oneGrassX = onefain[0];
            let oneGrassY = onefain[1];
            matrix[oneGrassY][oneGrassX] = 2;
            this.x = oneGrassX;
            this.y = oneGrassY;

            for (var i in grassArr) {
                if (oneGrassX == grassArr[i].x && oneGrassY == grassArr[i].y) {
                    grassArr.splice(i, 1);//[[1,2],[2,3]]
                    break;
                }
                for (var i in grassEatArr) {
                    if (this.x == grassArr[i].x && this.y == grassArr[i]) {

                    }
                }
            }
        } else {
            this.move()
        }
    }
}