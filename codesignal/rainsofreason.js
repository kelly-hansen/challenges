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
