function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    var yourStrong;
    var yourWeak;
    if (yourLeft >= yourRight) {
        yourStrong = yourLeft;
        yourWeak = yourRight;
    } else {
        yourStrong = yourRight;
        yourWeak = yourLeft;
    }
    var friendsStrong;
    var friendsWeak;
    if (friendsLeft >= friendsRight) {
        friendsStrong = friendsLeft;
        friendsWeak = friendsRight;
    } else {
        friendsStrong = friendsRight;
        friendsWeak = friendsLeft;
    }
    if (yourStrong === friendsStrong && yourWeak === friendsWeak) {
        return true;
    } else {
        return false;
    }
}

function arrayMaximalAdjacentDifference(inputArray) {
    var largest = 0;
    for (var i = 1; i < inputArray.length; i++) {
        var diff = Math.abs(inputArray[i] - inputArray[i - 1]);
        if (diff > largest) {
            largest = diff;
        }
    }
    return largest;
}

function isIPv4Address(inputString) {
    var inputArray = inputString.split('.');
    if (inputArray.length !== 4) {
        return false;
    }
    for (var i = 0; i < inputArray.length; i++) {
        if (!inputArray[i]) {
            return false;
        }
        if (inputArray[i].length > 1 && inputArray[i][0] === '0') {
            return false;
        }
        var x = Number(inputArray[i]);
        if (x < 0 || x > 255 || isNaN(x)) {
            return false;
        }
    }
    return true;
}

function avoidObstacles(inputArray) {
    var highest = Math.max(...inputArray);
    for (i = 2; i <= highest + 1; i++) {
        var avoids = true;
        var multiplier = 1;
        do {
            var x = i * multiplier;
            for (var y = 0; y < inputArray.length; y++) {
                if (x === inputArray[y]) {
                    avoids = false;
                    break;
                }
            }
            multiplier++;
        } while (x <= highest + 1);
        if (avoids) {
            return i;
        }
    }
}

function boxBlur(image) {
    var result = [];
    for (var i = 0; i < image.length - 2; i++) {
        result.push([]);
    }
    var y = 1;
    for (var i = 0; i < result.length; i++) {
        var x = 1;
        for (var z = 0; z < image[0].length - 2; z++) {
            result[i].push(boxBlurFindAvg(y, x, image));
            x++;
        }
        y++;
    }
    return result;
}

function boxBlurFindAvg(y, x, image) {
    var avg = 0;
    for (var i = 0; i < 3; i++) {
        avg += image[y - 1][x - 1];
        avg += image[y][x - 1];
        avg += image[y + 1][x - 1];
        x++;
    }
    avg = Math.floor(avg / 9);
    return avg;
}

function minesweeper(matrix) {
    var result = [];
    for (var i = 0; i < matrix.length; i++) {
        result.push([]);
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[0].length; x++) {
            result[y].push(minesweeperFindNum(y, x, matrix));
        }
    }
    return result;
}

function minesweeperFindNum(y, x, matrix) {
    var numOfMines = 0;
    yMinus = y - 1;
    for (var i = 0; i < 3; i++) {
        xMinus = x - 1;
        if (yMinus >= 0 && yMinus < matrix.length) {
            for (var z = 0; z < 3; z++) {
                if (xMinus >= 0 && xMinus < matrix[0].length) {
                    if (xMinus === x && yMinus === y) {

                    } else if (matrix[yMinus][xMinus])
                    numOfMines++;
                }
                xMinus++;
            }
        }
        yMinus++;
    }
    return numOfMines;
}
