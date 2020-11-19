function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === elemToReplace) {
            inputArray[i] = substitutionElem;
        }
    }
    return inputArray;
}

function evenDigitsOnly(n) {
    var nString = n.toString();
    var even = true;
    for (var i = 0; i < nString.length; i++) {
        if (parseInt(nString[i]) % 2 !== 0) {
            return false;
        }
    }
    return true;
}

function variableName(name) {
    if (name.match(/\W/) || name[0].match(/\d/)) {
        return false;
    }
    return true;
}

function alphabeticShift(inputString) {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var result = '';
    for (var i = 0; i < inputString.length; i++) {
        for (var x = 0; x < alphabet.length; x++) {
            if (inputString[i] === alphabet[x]) {
                if (x === alphabet.length - 1) {
                    result += alphabet[0];
                } else {
                    result += alphabet[x + 1];
                }
                break;
            }
        }
    }
    return result;
}
