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
