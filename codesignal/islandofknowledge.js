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
