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

function arrayChange(inputArray) {
    var count = 0;
    for (var i = 1; i < inputArray.length; i++) {
        if (inputArray[i] <= inputArray[i - 1]) {
            do {
                inputArray[i] += 1;
                count++;
            } while (inputArray[i] <= inputArray[i - 1]);
        }
    }
    return count;
}

function palindromeRearranging(inputString) {
    var singleLetter = 0;
    var inputArray = inputString.split('');
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i]) {
            for (var x = i + 1; x < inputArray.length; x++) {
                if (inputArray[i] === inputArray[x]) {
                    inputArray[i] = null;
                    inputArray[x] = null;
                    break;
                }
            }
            if (inputArray[i]) {
                if (singleLetter === 0) {
                    singleLetter++;
                } else {
                return false;
                }
            }
        }
    }
    return true;
}
