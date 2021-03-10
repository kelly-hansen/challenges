function createArray(size) {
  const result = [];
  for (let i = 0; i < size; i++) {
    result.push(1);
  }
  return result;
}

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) {
      inputArray[i] = substitutionElem;
    }
  }
  return inputArray;
}

function firstReverseTry(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const first = arr.shift();
  arr.unshift(arr.pop());
  arr.push(first);
  return arr;
}
