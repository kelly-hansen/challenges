function alternatingSums(a) {
    var result = [0, 0];
    for (var i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            result[0] += a[i];
        } else {
            result[1] += a[i];
        }
    }
    return result;
}

function addBorder(picture) {
    var topAndBot = '';
    for (var i = 0; i < picture[0].length + 2; i++) {
        topAndBot += '*';
    }
    for (var i = 0; i < picture.length; i++) {
        picture[i] = '*' + picture[i] + '*';
    }
    picture.unshift(topAndBot);
    picture.push(topAndBot)
    return picture;
}
