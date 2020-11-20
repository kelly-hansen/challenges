function extractEachKth(inputArray, k) {
  var elsToRemove = Math.floor(inputArray.length / k);
  for (var i = elsToRemove; i > 0; i--) {
    inputArray.splice(k * i - 1, 1);
  }
  return inputArray;
}

function firstDigit(inputString) {
  return inputString.match(/\d/)[0];
}
