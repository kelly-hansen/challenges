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

function areSimilar(a, b) {
    var switchCount = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            if (switchCount > 0) {
                return false;
            }
            for (var x = i + 1; x < a.length; x++) {
                var switched = a.slice();
                var switch1 = switched[i];
                var switch2 = switched[x];
                switched[i] = switch2;
                switched[x] = switch1;
                if (switched[i] === b[i] && switched[x] === b[x]) {
                    a = switched.slice();
                    switchCount++;
                    break;
                }
                if (x === a.length - 1) {
                    return false;
                }
            }
        }
    }
    return true;
}
