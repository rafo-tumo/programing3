var matrix = [
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0],
    [0, 0, 3, 0, 0, 0, 0, 0, 0, 1, 1, 3,0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 1, 0,0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 4, 4, 1, 0,0, 0],
    [0, 0, 0, 1, 1, 1, 1, 4, 4, 1, 0, 0,0, 0],
    [0, 0, 1, 4, 4, 4, 1, 4, 1, 0, 0, 0,0, 0],
    [0, 0, 0, 1, 4, 4, 4, 4, 0, 0, 0, 0,0, 0],
    [0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0,0, 0],
    [0, 0, 3, 0, 0, 0, 4, 4, 0, 0, 0, 3,0, 0],
    [0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0,0, 0],
    [2, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0,0, 2]

];

var side = 120;
let grassArr = []
let grassEatArr = []
let predatorArr = []
let fainArr = []
function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass)
            }
            else if (matrix[y][x] == 2) {
                var grassEat = new GrassEater(x, y);
                grassEatArr.push(grassEat)
            }
            else if (matrix[y][x] == 3) {
                let pr = new Predator(x, y)
                predatorArr.push(pr)
            }
        }
    }
}
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill(" green")
            }
            else if (matrix[y][x] == 0) {
                fill("gray")
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
            }
            else if (matrix[y][x] == 3) {
                fill("red")
            }
            else if (matrix[y][x] == 4) {
                fill("brown")
            }
            rect(x * side, y * side, side, side);


        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (let i in grassEatArr)
        grassEatArr[i].mul()

    for (let i in grassEatArr) {
        grassEatArr[i].eat()
    }
    for (let i in predatorArr) {
        predatorArr[i].eat()
    }
}