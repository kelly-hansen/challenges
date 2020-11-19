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
