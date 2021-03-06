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

function concatenateArrays(a, b) {
  return a.concat(b);
}

function removeArrayPart(inputArray, l, r) {
  inputArray.splice(l, r - l + 1);
  return inputArray;
}

function isSmooth(arr) {
  let middle;
  if (arr.length % 2) {
    middle = arr[Math.floor(arr.length / 2)];
  } else {
    middle = arr[arr.length / 2] + arr[arr.length / 2 - 1];
  }
  return arr[0] === middle && arr[arr.length - 1] === middle;
}

function replaceMiddle(arr) {
  if (!(arr.length % 2)) {
    const middle = arr[arr.length / 2] + arr[arr.length / 2 - 1];
    arr.splice(arr.length / 2 - 1, 2, middle);
  }
  return arr;
}

function makeArrayConsecutive2(statues) {
  statues.sort((x, y) => x - y);
  const diff = statues[statues.length - 1] - statues[0];
  return diff - statues.length + 1;
}
